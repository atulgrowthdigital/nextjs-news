export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At News Portal, we are dedicated to delivering accurate, timely, and comprehensive news coverage to our readers.
              Our mission is to inform, educate, and engage our audience with high-quality journalism that matters.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2025, News Portal has grown to become one of the most trusted sources of news and information.
              We cover a wide range of topics including business, technology, sports, entertainment, health, and more.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of experienced journalists and editors work around the clock to bring you the latest news
              and in-depth analysis from around the world.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Accuracy and truth in reporting</li>
              <li>Editorial independence</li>
              <li>Commitment to public interest</li>
              <li>Fairness and impartiality</li>
              <li>Innovation in digital journalism</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Team</h2>
            <p className="text-gray-600 leading-relaxed">
              Our diverse team of professionals includes award-winning journalists, experienced editors,
              skilled photographers, and talented digital media experts. Together, we work to deliver
              the highest quality news content to our readers.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}