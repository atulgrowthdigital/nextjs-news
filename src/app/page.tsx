import NewsTicker from '@/components/NewsTicker';
import NewsCard from '@/components/NewsCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <NewsTicker />
      
      {/* Featured News Section */}
      <section className="container mx-auto py-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-96">
              <svg className="w-full h-full bg-gray-500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <rect width="100%" height="100%" fill="#4B5563"/>
                <text x="50%" y="50%" fill="#ffffff" textAnchor="middle" dominantBaseline="middle" fontSize="24">
                  Featured News
                </text>
              </svg>
            </div>
            <div className="p-6">
              <span className="text-red-600 text-sm font-semibold">Breaking News</span>
              <h2 className="text-2xl font-bold mt-2">Featured News Headline</h2>
              <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Main News Grid */}
      <section className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsCard
            category="Business"
            title="Business News Headline"
            description="Latest updates from the business world..."
            color="bg-blue-500"
            imageText="Business News"
            href="/business"
          />
          <NewsCard
            category="Technology"
            title="Technology News Headline"
            description="Latest updates from the tech world..."
            color="bg-purple-500"
            imageText="Technology News"
            href="/technology"
          />
          <NewsCard
            category="Sports"
            title="Sports News Headline"
            description="Latest updates from the sports world..."
            color="bg-green-500"
            imageText="Sports News"
            href="/sports"
          />
        </div>
      </section>

      {/* Secondary News Grid */}
      <section className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <NewsCard
            category="Entertainment"
            title="Entertainment News"
            description="Latest entertainment updates..."
            color="bg-pink-500"
            imageText="Entertainment"
            href="/entertainment"
          />
          <NewsCard
            category="Health"
            title="Health News"
            description="Latest health updates..."
            color="bg-teal-500"
            imageText="Health"
            href="/health"
          />
          <NewsCard
            category="International"
            title="International News"
            description="Latest international updates..."
            color="bg-indigo-500"
            imageText="International"
            href="/international"
          />
          <NewsCard
            category="National"
            title="National News"
            description="Latest national updates..."
            color="bg-orange-500"
            imageText="National"
            href="/national"
          />
        </div>
      </section>
    </main>
  );
}