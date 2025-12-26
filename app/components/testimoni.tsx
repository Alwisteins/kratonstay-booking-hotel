import { IoMdStar } from "react-icons/io";

export default function Testimoni() {
  const testimonial = [
    {
      name: "Sarah J.",
      location: "Jakarta",
      review:
        "The best hotel experience in Yogyakarta! The room was spacious and clean, and the staff was incredibly helpful.",
    },
    {
      name: "Michael T.",
      location: "Australia",
      review:
        "Loved the traditional Javanese vibe mixed with modern luxury. The location is perfect, close to Malioboro.",
    },
    {
      name: "Budi S.",
      location: "Surabaya",
      review:
        "Perfect for a family vacation. The kids loved the pool and the breakfast spread was amazing.",
    },
  ];

  return (
    <section className="w-full bg-yellow-50 dark:bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 dark:text-green-600 md:text-4xl">
            What Our Guests Say
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
            Read genuine reviews from our happy guests.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 px-8 lg:px-16">
        {testimonial.map((testimoni) => (
          <div
            key={testimoni.name}
            className="p-6 rounded-md bg-white dark:bg-slate-700 shadow-md space-y-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <IoMdStar key={index} className="text-yellow-400" />
              ))}
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 italic">
              "{testimoni.review}"
            </p>
            <div>
              <h3 className="text-sm">{testimoni.name}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">{testimoni.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
