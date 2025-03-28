const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-10">
        Join 47,954 customers <span className="text-gray-500">who use our link <br /> management infrastructure to take their <br /> marketing efforts to the next level.</span> 
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
        {Array(9).fill(null).map((_, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-md ${index % 9 === 0 ? 'bg-purple-900 text-white' : 'bg-white'}`}>
            <h3 className="font-bold mb-2">Vercel</h3>
            <p className="mb-4">"Devtol link infrastructure & analytics has helped us gain valuable insights."</p>
            <div className="flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/1999/1999625.png" alt="Julio Cesar" className="w-10 h-10 rounded-full mr-3" />
              <div>
                <p className="font-bold">Julio Cesar</p>
                <p className="text-sm">Genius, billionaire, playboy</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;