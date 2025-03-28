const BenefitsSection = () => {
  const benefits = [
    {
      title: "Custom SSO",
      description: "Run Retool on your own infrastructure in less than 10 minutes, using anything from Docker Compose to Helm and Terraform.",
      icon: "https://cdn-icons-png.flaticon.com/128/4010/4010825.png",
    },
    {
      title: "Advanced Security",
      description: "Ensure your data is protected with our advanced security features, including encryption and access controls.",
      icon: "https://cdn-icons-png.flaticon.com/128/2318/2318786.png",
    },
    {
      title: "Scalable Architecture",
      description: "Easily scale your applications to meet the demands of your growing business.",
      icon: "https://cdn-icons-png.flaticon.com/128/1560/1560542.png",
    },
    {
      title: "Custom Integrations",
      description: "Integrate with your existing tools and workflows seamlessly.",
      icon: "https://cdn-icons-png.flaticon.com/128/453/453897.png",
    },
    {
      title: "Real-time Analytics",
      description: "Gain insights into your operations with real-time analytics and reporting.",
      icon: "https://cdn-icons-png.flaticon.com/128/1163/1163474.png",
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our 24/7 customer support.",
      icon: "https://cdn-icons-png.flaticon.com/128/953/953810.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-12">
        Built for enterprise scale. <span className="text-gray-500">Retool is designed <br /> for teams with a security mindset.</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md py-10 px-10">
            <img 
              src={benefit.icon} 
              alt={`${benefit.title} Icon`} 
              className="w-10 h-10 mb-3"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;