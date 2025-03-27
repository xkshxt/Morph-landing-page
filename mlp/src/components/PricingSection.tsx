const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-3xl font-bold mb-10">
        Built for enterprise scale. Retool is designed <br /> for teams with a security mindset.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
        {[
          { label: "Most Popular", color: "bg-purple-200", textColor: "text-purple-800" },
          { label: "Best Value", color: "bg-pink-200", textColor: "text-pink-800" },
          { label: "Economic Value", color: "bg-green-200", textColor: "text-green-800" },
        ].map((badge, index) => (
          <div
            key={index}
            className="relative p-6 rounded-lg shadow-md"
            style={{
              background: 'linear-gradient(to bottom, white 60%, #ebf8ff 60%)',
            }}
          >
            <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2">
              <span className={`${badge.color} ${badge.textColor} px-3 py-2 rounded-md shadow-md text-md`}>{badge.label}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 mt-6">Part-time Pro</h3>
            <p className="mb-4">One part-time creative dedicated to your continuous stream of projects.</p>
            <div className="text-3xl font-bold mb-4">$6400 <span className="text-lg font-normal">/month</span></div>
            <p className="mb-4">Pause or cancel anytime</p>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Subscribe Now</button>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">What you will get:</h4>
              <ul className="space-y-2">
                {[
                  "Up to 1000 contacts",
                  "Easily import people from Email, Calendar, Twitter, LinkedIn, Facebook.",
                  "Get organized with Search and Groups",
                  "Stay in touch with Reconnect & Reminders",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;