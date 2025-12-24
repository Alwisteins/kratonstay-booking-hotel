import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 p-6 lg:p-12  bg-yellow-50">
      <Image
        alt="Hotel Image"
        src={"/hero.png"}
        width={700}
        height={300}
        className="h-full w-100 lg:w-150 object-cover rounded-xl"
      />
      <div className="space-y-4 lg:space-y-6">
        <h2 className="text-3xl lg:text-4xl text-green-900 font-bold">
          A Comfortable Hotel in Yogyakarta with a Strategic Location
        </h2>
        <div className="w-1/4 h-1 bg-yellow-400"></div>
        <p>
          Located in the heart of Yogyakarta, KratonStay offers the perfect blend of modern comfort
          and traditional Javanese hospitality. Our hotel is strategically situated just 5 minutes
          from Malioboro Street, making it the ideal choice for tourists, business travelers, and
          families looking for hotel{" "}
          <span className="font-medium">accommodation in Yogyakarta.</span>
        </p>
        <p>
          Experience the warmth of Jogja with our elegantly designed rooms, authentic culinary
          delights, and world-class amenities. Whether you are visiting the historic Keraton
          Yogyakarta or exploring the vibrant city center, our hotel serves as your peaceful
          sanctuary.
        </p>
        <button className="cursor-pointer flex text-yellow-400 text-lg font-medium hover:underline hover:text-yellow-500 items-center gap-2">
          Learn More About Us <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
}
