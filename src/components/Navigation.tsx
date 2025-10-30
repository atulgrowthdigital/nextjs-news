import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto">
        <ul className="flex space-x-6 py-3 overflow-x-auto">
          <li>
            <Link href="/" className="hover:text-red-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/national" className="hover:text-red-400">
              National
            </Link>
          </li>
          <li>
            <Link href="/international" className="hover:text-red-400">
              International
            </Link>
          </li>
          <li>
            <Link href="/business" className="hover:text-red-400">
              Business
            </Link>
          </li>
          <li>
            <Link href="/technology" className="hover:text-red-400">
              Technology
            </Link>
          </li>
          <li>
            <Link href="/sports" className="hover:text-red-400">
              Sports
            </Link>
          </li>
          <li>
            <Link href="/entertainment" className="hover:text-red-400">
              Entertainment
            </Link>
          </li>
          <li>
            <Link href="/health" className="hover:text-red-400">
              Health
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}