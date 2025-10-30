import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/admin" className="text-xl font-bold text-gray-800">
                News Admin
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                View Site
              </Link>
              <button className="text-gray-600 hover:text-gray-800">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex container mx-auto px-4 py-8">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow rounded-lg p-4 mr-8">
          <nav className="space-y-2">
            <Link
              href="/admin"
              className="block px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/news/create"
              className="block px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Add News
            </Link>
            <Link
              href="/admin/news"
              className="block px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Manage News
            </Link>
            <Link
              href="/admin/categories"
              className="block px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Categories
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white shadow rounded-lg p-6">
          {children}
        </main>
      </div>
    </div>
  );
}