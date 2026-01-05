import { IoIosWifi } from "react-icons/io";
import { GiKnifeFork } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineCar } from "react-icons/ai";
import { HiOutlineBriefcase } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";

export default function Facilities() {
  const facilities = [
    {
      title: "Free High-Speed WiFi",
      icon: <IoIosWifi className="text-yellow-400 text-2xl" />,
    },
    {
      title: "Restaurant & Café",
      icon: <GiKnifeFork className="text-yellow-400 text-2xl" />,
    },
    {
      title: "Complimentary Breakfast",
      icon: <IoFastFoodOutline className="text-yellow-400 text-2xl" />,
    },
    {
      title: "Free Parking Area",
      icon: <AiOutlineCar className="text-yellow-400 text-2xl" />,
    },
    {
      title: "Meeting Rooms",
      icon: <HiOutlineBriefcase className="text-yellow-400 text-2xl" />,
    },
    {
      title: "24-Hour Front Desk",
      icon: <IoMdTime className="text-yellow-400 text-2xl" />,
    },
  ];
  return (
    <div id='facilities' className="flex flex-col lg:flex-row items-center gap-12 text-white bg-green-900 p-6 sm:p-12">
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Facilities for a Comfortable Stay in Yogyakarta
        </h2>
        <p>
          We provide comprehensive facilities to ensure your comfort during your holiday or business
          trip. From relaxation to productivity, we have everything you need.
        </p>
        <button className="cursor-pointer px-4 py-2 rounded-md text-yellow-400 border border-yellow-400">
          View All Facilities
        </button>
      </div>
      <div className="lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-8">
        {facilities.map((facility) => (
          <div
            key={facility.title}
            className="bg-white/10 backdrop-blur-lg hover:bg-white/20 text-center flex flex-col items-center gap-2 p-6 rounded-md">
            {facility.icon}
            <p>{facility.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
