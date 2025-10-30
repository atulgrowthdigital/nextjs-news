'use client';

export default function NewsTicker() {
  return (
    <div className="bg-white py-2 border-b">
      <div className="container mx-auto">
        <div className="flex items-center">
          <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mr-4">
            Breaking News
          </span>
          <div className="news-ticker flex-1 overflow-hidden">
            <div className="animate-ticker inline-block whitespace-nowrap">
              Latest breaking news and updates from around the world...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}