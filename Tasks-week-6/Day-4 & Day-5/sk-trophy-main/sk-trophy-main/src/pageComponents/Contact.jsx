import Breadcrumb from "../components/ui/Breadcrumb";

export default function Contactcomp() {
  return (
    <main className="py-10" role="main">


      <Breadcrumb
        paths={[
          { label: "Home", to: "/" },
          { label: "Contact us" }
        ]}
      />

      {/* Page Header */}
      <header className="text-center mb-10">
        <h1 className="text-[40px] font-medium py-2">Contact Us</h1>

        <p className="text-gray-500 text-[18px]">
          Get in touch with us for inquiries, support, or collaboration — we’re here to help you.
        </p>
      </header>

      {/* Map section */}
      <figure className="w-[1450px] mx-auto">
        <iframe
          title="SK Robin Trophies Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.7377920680915!2d75.85184107528444!3d30.866015374520295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83b50f933485%3A0xdb62353a4f0fbc2d!2sSK%20ROBIN%20TROPHIES!5e0!3m2!1sen!2sin!4v1771679688937!5m2!1sen!2sin"
          className="w-full h-[550px] rounded-xl border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>

        <figcaption>
          Map showing SK Robin Trophies location.
        </figcaption>
      </figure>

      {/* Contact information and form */}
      <section className="max-w-[1450px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12"
      >

        {/* Left- Information */}
        <article>
          <h2 className="text-4xl font-medium py-2">
            Information
          </h2>

          <p className="text-gray-500 mb-8">
            Have a question? Contact us using the customer support details below.
          </p>

          <dl className="space-y-6">

            <div>
              <dt className="font-semibold text-lg">Phone:</dt>
              <dd className="text-gray-600">Phone here</dd>
            </div>

            <div>
              <dt className="font-semibold text-lg">Email:</dt>
              <dd className="text-gray-600">Email here</dd>
            </div>

            <div>
              <dt className="font-semibold text-lg">Address:</dt>
              <dd className="text-gray-600">Address here</dd>
            </div>

            <div>
              <dt className="font-semibold text-lg">Open Time:</dt>
              <dd className="text-gray-600">Mon – Sat: 7:30am – 8:00pm PST</dd>
              <dd className="text-gray-600">Sunday: 9:00am – 5:00pm PST</dd>
            </div>

          </dl>
        </article>

        {/* Right Contact form */}
        <article>
          <h2 id="contact-form-title" className="text-4xl font-medium py-2">
            Get In Touch
          </h2>

          <p className="text-gray-500 mb-6">
            Use the form below to reach out to our sales team.
          </p>

          <form className="space-y-6">

            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label htmlFor="name" className="font-medium">Your Name *</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name*"
                  required
                  className="w-full border rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-medium">Your Email *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email*"
                  required
                  className="w-full border rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="font-medium">Your Message *</label>
              <textarea
                id="message"
                rows="6"
                placeholder="Your Message*"
                required
                className="w-full border rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            {/* Checbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="save-info"
                className="w-4 h-4"
              />
              <label htmlFor="save-info" className="text-gray-600 text-sm">
                Save my name, email, and website for next time.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800"
            >
              Send message
            </button>

          </form>
        </article>

      </section>

    </main>
  );
}