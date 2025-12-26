export default function Cta() {
  return (
    <div className="bg-green-900 text-white px-6 py-12 sm:p-16 space-y-6 flex flex-col items-center text-center">
      <h2 className="text-3xl sm:text-4xl font-bold">
        Special Hotel Deals in <span className="text-yellow-400">Yogyakarta</span>
      </h2>
      <p>
        Book direct through our website and save up to 20%. Enjoy free breakfast and early check-in.
      </p>
      <button className="text-md bg-yellow-400 font-medium text-green-900 px-6 py-4 rounded-md">
        Book Now and Save More
      </button>
    </div>
  );
}
