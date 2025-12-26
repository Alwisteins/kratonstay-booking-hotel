import Image from "next/image";

export default function Rooms() {
  const hotels = [
    {
      type: "Standar Room",
      description:
        "Perfect for solo travelers or couples, featuring modern amenities and a cozy atmosphere.",
      facilities: ["Free WiFi", "AC", "Breakfast", "Queen Bed"],
      price: 650000,
      image: "/standar.png",
    },
    {
      type: "Deluxe Room",
      description:
        "Spacious room with a private balcony offering stunning city views of Yogyakarta.",
      facilities: ["Free WiFi", "AC", "Breakfast", "King Bed", "Balcony"],
      price: 950000,
      image: "/deluxe.png",
    },
    {
      type: "Family Suite",
      description:
        "Ideal for families, offering generous space with two double beds and a seating area.",
      facilities: ["Free WiFi", "AC", "Breakfast", "2 Double Beds", "Living Area"],
      price: 1450000,
      image: "/family.png",
    },
  ];
  return (
    <div className="p-6 lg:p-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl lg:text-4xl text-green-900 dark:text-green-600 font-bold">
          Hotel Room Options in Yogyakarta
        </h2>
        <p>
          Choose the perfect sanctuary for your stay. All rooms are designed with comfort and
          elegance in mind.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.type}
            className="group flex flex-col w-85 sm:w-80 lg:w-95 h-full rounded-lg transition-transform duration-300 ease-out hover:-translate-y-2 shadow-lg hover:shadow-xl">
            <div className="relative w-85 h-50 sm:w-80 lg:w-95 lg:h-60 overflow-hidden rounded-t-lg">
              <Image
                alt={hotel.type}
                src={hotel.image}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-120"
              />
            </div>

            <div className="flex flex-col flex-1 p-4 lg:p-6 space-y-6 border border-slate-200 bg-gray-50 dark:bg-gray-900 dark:border-none rounded-b-lg">
              <h3 className="text-xl font-bold text-green-900 dark:text-green-600">{hotel.type}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-200">{hotel.description}</p>
              <ul className="flex flex-wrap gap-2">
                {hotel.facilities.map((facility) => (
                  <li key={facility} className="text-xs px-2 py-1 rounded-sm bg-yellow-400 dark:bg-yellow-600">
                    {facility}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex justify-between">
                <div>
                  <p className="text-xs">starts from</p>
                  <p className="text-xs">
                    <span className="font-medium text-xl">
                      IDR {new Intl.NumberFormat("id-ID").format(hotel.price)}
                    </span>
                    /night
                  </p>
                </div>
                <button className="cursor-pointer bg-green-900 hover:bg-green-800 px-4 py-2 rounded-lg text-sm text-white font-medium">
                  Book This Room
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
