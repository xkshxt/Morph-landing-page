// src/components/HeroSection.tsx

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        The fastest way to build internal software
      </h1>
      <img
        src="/path/to/your/image.jpg"
        alt="Product showcase"
        className="w-full max-w-4xl"
      />
    </section>
  );
};

export default HeroSection;