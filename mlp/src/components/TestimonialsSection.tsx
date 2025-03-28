const TestimonialsSection = () => {
  const testimonials = [
    {
      company: "Vercel",
      text: "Stripe for payments, Vercel for deployments, Dub for links. As the cloud evolves, we abstract out common needs into reusable, high-performance infrastructure. Excited about Devtol filling this foundational missing piece of the puzzle.",
      bgColor: "bg-purple-900 text-white",
    },
    {
      company: "Vercel",
      text: "As a software comparison site, tracking and attributing link clicks to the apps we’re recommending is critical. After using every link management tool on the market.",
      bgColor: "bg-white",
    },
    {
      company: "Vercel",
      text: "Devtol has been a breath of fresh air in the link management space – with everything we needed and no unnecessary feature bloat.",
      bgColor: "bg-white",
    },
    {
      company: "Vercel",
      text: "We wanted a tool that not only enables everyone at Prisma to create short links easily, but also provides more analytics for those links. Devtol is the perfect solution for that.",
      bgColor: "bg-white",
    },
    {
      company: "Vercel",
      text: "Devtol has been a game-changer for our marketing campaigns – our links get hundreds of thousands of clicks monthly and with Dub, we are able to easily design our link embeds, attribute clicks, and visualize our data.",
      bgColor: "bg-white",
    },
    {
      company: "Vercel",
      text: "We’ve been using Devtol at Hashnode for almost a year now, and I must say it’s a really intuitive & reliable tool for managing our short links. Great work!",
      bgColor: "bg-white",
    },
    {
      company: "Vercel",
      text: "Devtol link infrastructure & analytics has helped us gain valuable insights into the link-sharing use case of Ray.so. And all of it with just a few lines of code.",
      bgColor: "bg-purple-900 text-white",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-10">
        Join 47,954 customers{" "}
        <span className="text-gray-500">
          who use our link <br /> management infrastructure to take their <br /> marketing
          efforts to the next level.
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-48"> {/* Adjusted px values */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${testimonial.bgColor}`}
          >
            <h3 className="font-bold mb-2">{testimonial.company}</h3>
            <p className="mb-4">{testimonial.text}</p>
            <div className="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1999/1999625.png"
                alt="Julio Cesar"
                className="w-10 h-10 rounded-full mr-3"
              />
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