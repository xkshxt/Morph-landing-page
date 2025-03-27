// src/components/PricingSection.tsx

const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-3xl font-bold mb-10">
        Built for enterprise scale. Retool is designed <br /> for teams with a security mindset.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="text-center mb-4">
            <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">Most Popular</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Part-time Pro</h3>
          <p className="mb-4">One part-time creative dedicated to your continuous stream of projects.</p>
          <div className="text-3xl font-bold mb-4">$6400 <span className="text-lg font-normal">/month</span></div>
          <p className="mb-4">Pause or cancel anytime</p>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Subscribe Now</button>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">What you will get:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Up to 1000 contacts</li>
              <li>Easily import people from Email, Calendar, Twitter, LinkedIn, Facebook.</li>
              <li>Get organized with Search and Groups</li>
              <li>Stay in touch with Reconnect & Reminders</li>
            </ul>
          </div>
        </div>
        {/* Repeat the card for other pricing options */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="text-center mb-4">
            <span className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm">Best Value</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Part-time Pro</h3>
          <p className="mb-4">One part-time creative dedicated to your continuous stream of projects.</p>
          <div className="text-3xl font-bold mb-4">$6400 <span className="text-lg font-normal">/month</span></div>
          <p className="mb-4">Pause or cancel anytime</p>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Subscribe Now</button>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">What you will get:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Up to 1000 contacts</li>
              <li>Easily import people from Email, Calendar, Twitter, LinkedIn, Facebook.</li>
              <li>Get organized with Search and Groups</li>
              <li>Stay in touch with Reconnect & Reminders</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="text-center mb-4">
            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">Economic Value</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Part-time Pro</h3>
          <p className="mb-4">One part-time creative dedicated to your continuous stream of projects.</p>
          <div className="text-3xl font-bold mb-4">$6400 <span className="text-lg font-normal">/month</span></div>
          <p className="mb-4">Pause or cancel anytime</p>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Subscribe Now</button>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">What you will get:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Up to 1000 contacts</li>
              <li>Easily import people from Email, Calendar, Twitter, LinkedIn, Facebook.</li>
              <li>Get organized with Search and Groups</li>
              <li>Stay in touch with Reconnect & Reminders</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;