export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </section>

            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h2>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <i className="fas fa-map-marker-alt w-6"></i>
                    123 News Street, City, Country
                  </p>
                  <p>
                    <i className="fas fa-phone w-6"></i>
                    +1 234 567 890
                  </p>
                  <p>
                    <i className="fas fa-envelope w-6"></i>
                    contact@newsportal.com
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Office Hours</h2>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Follow Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-red-600">
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-red-600">
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-red-600">
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-red-600">
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}