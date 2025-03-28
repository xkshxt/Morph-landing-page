// src/components/HeroSection.tsx

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-20 bg-white">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
        <span className="text-blue-600">The fastest</span> — way to build <br /> internal software
      </h1>

      {/* Product Image Section */}
      <div className="relative mt-10 w-full flex justify-center items-center">
        {/* Main Product Showcase Image */}
        <img
          src="https://cdn.pixabay.com/photo/2024/05/27/21/26/desk-8792352_1280.png"
          alt="Product showcase"
          className="w-full sm:w-3/5 lg:w-1/2 rounded-2xl relative z-10"
        />

        {/* Background Image 1 (Left) - Only visible on small screens and above */}
        <img
          src="https://cdn.pixabay.com/photo/2023/05/30/13/23/technology-8028575_1280.jpg"
          alt="Background Image 1"
          className="hidden sm:block absolute w-1/3 lg:w-1/4 left-0 transform bottom-0 rounded-2xl z-0"
        />

        {/* Background Image 2 (Right) - Only visible on small screens and above */}
        <img
          src="https://cdn.pixabay.com/photo/2024/06/14/12/14/cyborg-8829739_1280.png"
          alt="Background Image 2"
          className="hidden sm:block absolute w-1/3 lg:w-1/4 right-0 transform bottom-0 rounded-2xl z-0"
        />
      </div>
    </section>
  );
};

export default HeroSection;
