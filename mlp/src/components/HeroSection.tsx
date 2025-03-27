const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-20 bg-white">
      <h1 className="text-6xl font-semibold mb-4">
        The fastest — way to build <br /> internal software
      </h1>
      <div className="relative mt-10">
        <img
          src="https://cdn.pixabay.com/photo/2024/05/27/21/26/desk-8792352_1280.png"
          alt="Product showcase"
          className="w-full max-w-4xl rounded-2xl relative z-10"
        />
        <img
          src="https://cdn.pixabay.com/photo/2023/05/30/13/23/technology-8028575_1280.jpg"
          alt="Background Image 1"
          className="absolute top-2/3 left-[-400px] w-1/2  rounded-2xl transform -translate-y-1/2 z-0"
        />
        <img
          src="https://cdn.pixabay.com/photo/2024/06/14/12/14/cyborg-8829739_1280.png"
          alt="Background Image 2"
          className="absolute top-2/3 right-[-400px] w-1/2  rounded-2xl transform -translate-y-1/2 z-0"
        />
      </div>
    </section>
  );
};

export default HeroSection;