const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-center text-3xl font-semibold mb-10">
        Built for enterprise scale. Retool is designed <br /> for teams with a security mindset.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
        {Array(6).fill(null).map((_, index) => (
          <div key={index} className="bg-white p-6 rounded shadow-md">
            <img 
              src="https://cdn-icons-png.flaticon.com/128/2318/2318786.png" 
              alt="Custom SSO Icon" 
              className="w-10 h-10 mb-3"
            />
            <div>
              <h3 className="font-bold mb-2">Custom SSO</h3>
              <p>Run Retool on your own infrastructure in less than 10 minutes, using anything from Docker Compose to Helm and Terraform.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;