// src/components/TestimonialsSection.tsx

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-10">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded shadow-md">
          <p>"Devtool has been a game-changer for us..."</p>
          <p className="mt-4 font-bold">- Customer Name</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <p>"We love using Devtool for our projects..."</p>
          <p className="mt-4 font-bold">- Customer Name</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;