const FeaturesSection = () => {
  return (
    <section className="py-20 bg-blue-100">
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold">Over 200 teams worldwide rely on us</h2>
      </div>
      <div className="flex justify-center space-x-16 mb-10">
        <img src="https://cdn-icons-png.flaticon.com/128/732/732221.png" alt="Company 1" className="h-10" />
        <img src="https://cdn-icons-png.flaticon.com/128/731/731985.png" alt="Company 2" className="h-10" />
        <img src="https://cdn-icons-png.flaticon.com/128/731/731985.png" alt="Company 3" className="h-10" />
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Company 4" className="h-10" />
        <img src="https://cdn-icons-png.flaticon.com/128/5969/5969205.png" alt="Company 5" className="h-10" />
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968804.png" alt="Company 6" className="h-10" />
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968819.png" alt="Company 7" className="h-10" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Design</h3>
          <p className="mb-4">Devtol's 100+ components and integrated IDE deliver the world's fastest development cycle.</p>
          <img src="https://via.placeholder.com/300x150" alt="Design Feature" className="w-full" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Code</h3>
          <p className="mb-4">Devtol is designed for developers, allowing you to code from virtually anywhere.</p>
          <img src="https://via.placeholder.com/300x150" alt="Code Feature" className="w-full" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Debug</h3>
          <p className="mb-4">Analyze stack traces, monitor query performance over time, inspect application state, and delve into all dependencies.</p>
          <img src="https://via.placeholder.com/300x150" alt="Debug Feature" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;