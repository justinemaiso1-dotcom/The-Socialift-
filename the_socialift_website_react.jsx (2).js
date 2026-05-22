export default function TheSocialiftWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-yellow-500 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img
              src="https://placehold.co/180x180/png"
              alt="The Socialift Logo"
              className="rounded-full shadow-2xl border-4 border-white"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            THE SOCIALIFT
          </h1>

          <p className="text-xl md:text-2xl font-medium mb-6">
            Lifting Lives • Inspiring Hope • Creating Change
          </p>

          <p className="max-w-3xl mx-auto text-lg opacity-90 mb-8">
            A social impact platform dedicated to mental health awareness,
            community empowerment, social work education, and inspiring
            positive transformation in society.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/254738757840"
              className="bg-white text-blue-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Contact on WhatsApp
            </a>

            <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-900 transition">
              Join Our Community
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-blue-900">
              About The Socialift
            </h2>

            <p className="text-lg leading-relaxed text-slate-700 mb-4">
              The Socialift is a community-driven brand focused on uplifting
              people through awareness, education, empowerment, and compassion.
            </p>

            <p className="text-lg leading-relaxed text-slate-700">
              We create content around mental health, social work, youth
              empowerment, community support, and inspirational transformation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-yellow-600">
              Our Mission
            </h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              To empower communities through care, awareness, hope, and social
              impact.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-yellow-600">
              Our Vision
            </h3>
            <p className="text-slate-700 leading-relaxed">
              A society where every person feels supported, valued, and inspired
              to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Content Areas */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            What We Share
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mental Health Awareness",
                text: "Educational and supportive content promoting emotional wellbeing and healing.",
              },
              {
                title: "Social Work Education",
                text: "Teaching communities about social issues, protection, empowerment, and advocacy.",
              },
              {
                title: "Motivation & Inspiration",
                text: "Powerful quotes, encouragement, and uplifting stories that inspire hope.",
              },
              {
                title: "Community Support",
                text: "Encouraging unity, empathy, and support for vulnerable people in society.",
              },
              {
                title: "Youth Empowerment",
                text: "Helping young people grow through mentorship, awareness, and motivation.",
              },
              {
                title: "Awareness Campaigns",
                text: "Creating impact through educational campaigns and advocacy projects.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
              >
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">
                  {item.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            “A small act of kindness can change someone’s entire life.”
          </p>

          <p className="text-xl text-yellow-300">— The Socialift</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">
            Connect With Us
          </h2>

          <p className="text-lg text-slate-700 mb-8">
            Join our mission of empowering communities and spreading hope.
          </p>

          <div className="flex justify-center">
            <a
              href="https://wa.me/254738757840"
              className="bg-green-500 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg hover:scale-105 transition"
            >
              WhatsApp: +254 738 757840
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8 text-center px-6">
        <h3 className="text-2xl font-bold mb-2">THE SOCIALIFT</h3>
        <p className="text-slate-300 mb-2">
          Lifting Lives • Inspiring Hope • Creating Change
        </p>
        <p className="text-slate-400 text-sm">
          © 2026 The Socialift. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
