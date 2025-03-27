// src/components/HeroSection.tsx

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 mt-15 bg-white">
      <h1 className="text-5xl font-semibold mb-4">
        The fastest -- way to build <br/> internal software
      </h1>
      <img
        src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
        alt="Product showcase"
        className="w-full max-w-4xl rounded-xl mt-10"
      />
    </section>
  );
};

export default HeroSection;