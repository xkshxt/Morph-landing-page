const Confirmation = () => {
    return (
      <section className="bg-purple-200 text-center py-10">
        <div className="my-10">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-12">
        Built for enterprise scale. <span className="text-gray-500">Retool is designed <br /> for teams with a security mindset.</span>
      </h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10 mb-10">
            <button className="bg-white text-black py-3 px-8 rounded-full">Book Demo</button>
            <button className="bg-blue-500 text-white py-3 px-8 rounded-full">Get Started</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Confirmation;