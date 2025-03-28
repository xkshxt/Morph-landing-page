const Confirmation = () => {
  return (
    // Section with a purple background and centered content
    <section className="bg-purple-200 text-center py-10">
      <div className="my-10">
        {/* Section Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-12">
          Starting with Devtol is <br /> simple, fast and free.
        </h2>

        {/* Button Container with Responsive Layout */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10 mb-10">
          {/* Book Demo Button */}
          <button className="bg-white text-black py-3 px-8 rounded-full">
            Book Demo
          </button>

          {/* Get Started Button */}
          <button className="bg-blue-500 text-white py-3 px-8 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
