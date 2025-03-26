// src/components/BenefitsSection.tsx

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-10">
        Built for enterprise scale
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="font-bold mb-2">Self-host</h3>
          <p>Run on your own infrastructure...</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="font-bold mb-2">Run in the cloud</h3>
          <p>Let us handle the heavy lifting...</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="font-bold mb-2">Custom SSO</h3>
          <p>Integrate your IdP to enable login...</p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;