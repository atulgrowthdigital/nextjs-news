export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
          
          <section className="mb-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              Last updated: October 29, 2025
            </p>
            <p className="text-gray-600 leading-relaxed">
              Please read these Terms of Service carefully before using the News Portal website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using our website, you agree to be bound by these Terms of Service.
              If you do not agree to all the terms and conditions, you must not access or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Use License</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Permission is granted to temporarily access and use our website for personal,
              non-commercial purposes. This is the grant of a license, not a transfer of title.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Under this license, you may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. User Content</h2>
            <p className="text-gray-600 leading-relaxed">
              Users may post comments and other content as long as it is not illegal, obscene,
              threatening, defamatory, invasive of privacy, or otherwise injurious to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed">
              The materials on our website are provided on an 'as is' basis. We make no
              warranties, expressed or implied, and hereby disclaim and negate all other warranties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Limitations</h2>
            <p className="text-gray-600 leading-relaxed">
              In no event shall News Portal or its suppliers be liable for any damages arising
              out of the use or inability to use the materials on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Revisions</h2>
            <p className="text-gray-600 leading-relaxed">
              We may revise these terms of service at any time without notice. By using this
              website, you agree to be bound by the current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
              terms@newsportal.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}