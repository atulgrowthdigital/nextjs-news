import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Test database connection first
    await prisma.$connect();
    
    const news = await prisma.news.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    if (!news) {
      return NextResponse.json(
        { error: 'No news articles found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: news
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    
    // Check for specific database errors
    if (error instanceof Error) {
      if (error.message.includes('connect')) {
        return NextResponse.json(
          { error: 'Database connection failed. Please try again later.' },
          { status: 503 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Error fetching news articles. Please try again later.' },
      { status: 500 }
    );
  } finally {
    // Disconnect after operation
    await prisma.$disconnect();
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['title', 'slug', 'content', 'category'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Check if slug is already taken
    const existingNews = await prisma.news.findUnique({
      where: { slug: data.slug }
    });

    if (existingNews) {
      return NextResponse.json(
        { error: 'An article with this slug already exists' },
        { status: 400 }
      );
    }

    const news = await prisma.news.create({
      data: {
        title: data.title,
        slug: data.slug,
        content: data.content,
        category: data.category,
        image: data.image || null,
        isPublished: data.isPublished ?? true
      }
    });
    
    return NextResponse.json(news, { status: 201 });
  } catch (error) {
    console.error('Error creating news:', error);
    return NextResponse.json(
      { error: 'Error creating news article' },
      { status: 500 }
    );
  }
}