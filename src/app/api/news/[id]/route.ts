import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const news = await prisma.news.findUnique({
      where: {
        id: parseInt(params.id)
      }
    });
    
    if (!news) {
      return NextResponse.json({ error: 'News not found' }, { status: 404 });
    }
    
    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching news' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const news = await prisma.news.update({
      where: {
        id: parseInt(params.id)
      },
      data: {
        title: data.title,
        slug: data.slug,
        content: data.content,
        category: data.category,
        image: data.image,
        isPublished: data.isPublished
      }
    });
    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating news' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.news.delete({
      where: {
        id: parseInt(params.id)
      }
    });
    return NextResponse.json({ message: 'News deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting news' }, { status: 500 });
  }
}