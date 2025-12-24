"use client";
import { GrLocation } from "react-icons/gr";

export default function Location() {
  const attractions = [
    { name: "Malioboro Street", time: "5 Minutes" },
    { name: "Keraton Yogyakarta", time: "10 Minutes" },
    { name: "Tugu Jogja", time: "7 Minutes" },
    { name: "Train Station", time: "3 Minutes" },
    { name: "YIA International Airport", time: "60 Minutes" },
  ];

  return (
    <section className="w-full bg-[#FAFAF7] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 md:text-4xl">
            Strategically Located in the Heart of Yogyakarta
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Easy access to major tourist attractions and transportation hubs.
          </p>
        </div>

        <div className="rounded-2xl bg-white shadow-lg">
          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="h-90 w-full overflow-hidden rounded-xl">
                <iframe
                  title="Malioboro Map"
                  src="https://www.google.com/maps?q=Jl.%20Malioboro,%20Yogyakarta&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-green-900">Nearby Attractions</h3>

                <ul className="space-y-4">
                  {attractions.map((item) => (
                    <li key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1F5F2] text-[#1F3D2B]">
                          <GrLocation />
                        </span>
                        <span className="text-sm font-medium text-gray-800">{item.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Jl.%20Malioboro,%20Yogyakarta"
                  target="_blank"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-gray-300 px-4 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-100">
                  Get Directions
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
