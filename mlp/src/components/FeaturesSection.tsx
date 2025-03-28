const FeaturesSection = () => {
  return (
    <section className="py-20 bg-blue-200">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold">
          Over 200 teams worldwide rely on Gleap
        </h2>
      </div>

      {/* Company Logos Section */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-20 mb-20">
        {/* Logos representing companies using the product */}
        <img
          src="https://cdn-icons-png.flaticon.com/128/732/732221.png"
          alt="Company 1"
          className="h-12"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/731/731985.png"
          alt="Company 2"
          className="h-12"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/2504/2504929.png"
          alt="Company 3"
          className="h-12"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
          alt="Company 4"
          className="h-12"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/5969/5969205.png"
          alt="Company 5"
          className="h-12"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968804.png"
          alt="Company 6"
          className="h-12"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968819.png"
          alt="Company 7"
          className="h-12"
        />
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-40 mb-20">
        {/* Feature 1: Design */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-normal mb-4">
            Design: Devtol's 100+ components and integrated IDE deliver the world's
            fastest development cycle.
          </h3>
          <img
            src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg"
            alt="Design Feature"
            className="w-full"
          />
        </div>

        {/* Feature 2: Code */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-normal mb-4">
            Code: Devtol is designed for developers, allowing you to code from
            virtually anywhere in the world.
          </h3>
          <img
            src="https://cdn.pixabay.com/photo/2019/06/19/07/13/email-4284157_1280.png"
            alt="Code Feature"
            className="w-full"
          />
        </div>

        {/* Feature 3: Debug (Spanning Two Columns for Emphasis) */}
        <div className="bg-white p-6 rounded-2xl shadow-md md:col-span-2">
          <h3 className="text-2xl font-normal mb-4">
            Debug: Analyze stack traces, monitor query performance over time, inspect
            application state, and delve into all dependencies. Easily scale your applications
            to meet the demands of your growing business.
          </h3>
          <img
            src="https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127_1280.jpg"
            alt="Debug Feature"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
