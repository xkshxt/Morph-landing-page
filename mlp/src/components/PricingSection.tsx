// src/components/PricingSection.tsx

const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-3xl font-bold mb-10">
        Pricing Plans
      </h2>
      <div className="flex justify-around">
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h3 className="font-bold mb-2">Part-time Pro</h3>
          <p>$6400/month</p>
          <button className="mt-4 bg-blue-500 text-white p-2 rounded">
            Subscribe Now
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h3 className="font-bold mb-2">Full-time Pro</h3>
          <p>$12800/month</p>
          <button className="mt-4 bg-blue-500 text-white p-2 rounded">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;