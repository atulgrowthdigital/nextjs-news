interface CategoryPageProps {
  title: string;
  color: string;
}

export default function CategoryLayout({ title, color }: CategoryPageProps) {
  return (
    <main>
      {/* Featured Category News */}
      <section className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-96">
              <svg className={`w-full h-full ${color}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <rect width="100%" height="100%" fill="currentColor"/>
                <text x="50%" y="50%" fill="#ffffff" textAnchor="middle" dominantBaseline="middle" fontSize="24">
                  Featured {title} News
                </text>
              </svg>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold">Major {title} Development</h2>
              <p className="text-gray-600 mt-4">Detailed coverage of the latest {title.toLowerCase()} news and developments...</p>
              <button className={`mt-4 ${color} text-white px-6 py-2 rounded-full hover:opacity-90`}>Read More</button>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <svg className={`w-full h-48 ${color}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <rect width="100%" height="100%" fill="currentColor"/>
                <text x="50%" y="50%" fill="#ffffff" textAnchor="middle" dominantBaseline="middle" fontSize="20">
                  {title} News {index + 1}
                </text>
              </svg>
              <div className="p-4">
                <h3 className="text-xl font-bold">{title} Story Headline</h3>
                <p className="text-gray-600 mt-2">Brief description of the {title.toLowerCase()} news story...</p>
                <a href="#" className="text-red-600 mt-3 inline-block hover:text-red-700">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}