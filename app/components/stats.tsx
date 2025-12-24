import { FaRegStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";

export default function Stats() {
  const stats = [
    {
      title: "4.8/5 Guest Rating",
      icon: <FaRegStar className="text-yellow-400 text-2xl" />,
    },
    {
      title: "24/7 Front Desk",
      icon: <IoMdTime className="text-yellow-400 text-2xl" />,
    },
    {
      title: "5 Min to Malioboro",
      icon: <GrLocation className="text-yellow-400 text-2xl" />,
    },
    {
      title: "Best Price Guarantee",
      icon: <FaCheck className="text-yellow-400 text-2xl" />,
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 p-6 sm:p-12">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="hover:bg-slate-50 text-center flex flex-col items-center gap-2 p-4 rounded-md">
          {stat.icon}
          <p>{stat.title}</p>
        </div>
      ))}
    </div>
  );
}
