const PricingSection = () => {
  return (
    <section className="my-20 bg-white">
      {/* Section Title */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-12">
        Built for enterprise scale. 
        <span className="text-gray-500">
          Retool is designed <br /> for teams with a security mindset.
        </span>
      </h2>

      {/* Pricing Plans Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
        {/* Mapping through pricing badge details */}
        {[
          { label: "Most Popular", color: "bg-purple-200", textColor: "text-purple-800" },
          { label: "Best Value", color: "bg-pink-200", textColor: "text-pink-800" },
          { label: "Economic Value", color: "bg-green-200", textColor: "text-green-800" },
        ].map((badge, index) => (
          <div
            key={index}
            className="relative p-6 rounded-lg shadow-md"
            style={{
              background: 'linear-gradient(to bottom, white 60%, #ebf8ff 60%)', // Gradient background effect
            }}
          >
            {/* Conditionally Render Badge (Only for "Most Popular" & "Best Value") */}
            {badge.label !== "Economic Value" && (
              <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2">
                <span className={`${badge.color} ${badge.textColor} px-3 py-2 rounded-md shadow-md text-md`}>
                  {badge.label}
                </span>
              </div>
            )}

            {/* Plan Title */}
            <h3 className="text-xl font-bold mb-2 mt-6">Part-time Pro</h3>

            {/* Plan Description */}
            <p className="mb-4">
              One part-time creative dedicated to your continuous stream of projects.
            </p>

            {/* Pricing Amount */}
            <div className="text-3xl font-bold mb-4">
              $6400 <span className="text-lg font-normal">/month</span>
            </div>

            {/* Plan Cancellation Policy */}
            <p className="mb-4">Pause or cancel anytime</p>

            {/* Subscribe Button */}
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
              Subscribe Now
            </button>

            {/* Plan Benefits List */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">What you will get:</h4>
              <ul className="space-y-2">
                {[
                  "Up to 1000 contacts",
                  "Easily import people from Email, Calendar",
                  "Get organized with Search and Groups",
                  "Stay in touch with Reconnect & Reminders",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    {/* Checkmark Icon for Each Benefit */}
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
