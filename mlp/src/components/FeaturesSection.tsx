// src/components/FeaturesSection.tsx

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-blue-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Over 200 teams worldwide rely on us</h2>
      </div>
      <div className="flex justify-center space-x-8">
        <img src="/path/to/logo1.png" alt="Company 1" className="h-12" />
        <img src="/path/to/logo2.png" alt="Company 2" className="h-12" />
        <img src="/path/to/logo3.png" alt="Company 3" className="h-12" />
      </div>
      <div className="mt-10 flex justify-around">
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="font-bold mb-2">Design</h3>
          <p>Devtool's 100+ components and integrated IDE...</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="font-bold mb-2">Code</h3>
          <p>Devtool is designed for developers...</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;