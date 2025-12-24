import { Form } from "radix-ui";
import { FaCheck } from "react-icons/fa6";

export default function Hero() {
  return (
    <div
      className="relative h-[160vh] sm:h-[20w0vh] lg:h-[120vh] bg-cover bg-center flex flex-col lg:flex-row justify-center items-center gap-16 px-6 lg:px-16 text-white"
      style={{ backgroundImage: "url('/hero.png')" }}>
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="z-20 text-center lg:text-start">
        <span className="bg-white/10 backdrop-blur-lg px-3 py-1 border border-white rounded-full text-xs lg:text-sm font-medium">
          #1 Hotel in Yogyakarta
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold my-4">
          Best Hotel in <span className="text-yellow-400">Yogyakarta</span>
        </h1>
        <p className="text-white/80 lg:text-lg max-w-lg">
          A comfortable and strategically located hotel near Malioboro, perfect for leisure,
          business, and family stays in Jogja.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 mt-6">
          <button className="cursor-pointer bg-yellow-400 text-green-900 hover:bg-yellow-500 font-medium border border-white px-6 py-3 rounded-md">
            Book Now
          </button>
          <button className="cursor-pointer bg-white/10 backdrop-blur-xs hover:backdrop-blur-xl hover:bg-white/20 text-white font-medium border border-white px-6 py-3 rounded-md">
            Check Availability
          </button>
        </div>
      </div>
      <Form.Root className="bg-white text-black p-8 rounded-xl space-y-6 w-full lg:w-120 z-20 border-t-4 border-yellow-400">
        <h3 className="text-2xl font-semibold text-green-800">Book Your Stay</h3>
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          {/* CHECK IN */}
          <Form.Field name="checkin">
            <Form.Label className="font-medium uppercase text-sm text-slate-600">
              Check In
            </Form.Label>
            <Form.Control asChild>
              <input
                type="date"
                required
                className="w-full border border-slate-400 rounded-md px-3 py-2 text-sm"
              />
            </Form.Control>
            <Form.Message match="valueMissing" className="text-red-500 text-sm">
              Please select a check-in date
            </Form.Message>
          </Form.Field>

          {/* CHECK OUT */}
          <Form.Field name="checkout">
            <Form.Label className="font-medium uppercase text-sm text-slate-600">
              Check Out
            </Form.Label>
            <Form.Control asChild>
              <input
                type="date"
                required
                className="w-full border border-slate-400 rounded-md px-3 py-2 text-sm"
              />
            </Form.Control>
            <Form.Message match="valueMissing" className="text-red-500 text-sm">
              Please select a check-out date
            </Form.Message>
          </Form.Field>
        </div>

        {/* GUESTS */}
        <Form.Field name="guests">
          <Form.Label className="font-medium uppercase text-sm text-slate-600">Guests</Form.Label>
          <Form.Control asChild>
            <div className="relative">
              <select
                name="guests"
                className="w-full border border-slate-400 text-sm rounded-md px-3 py-2 pr-10 appearance-none">
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">2 Adults, 1 Child</option>
                <option value="4">2+2 Family</option>
              </select>

              {/* Custom Arrow */}
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                ▼
              </span>
            </div>
          </Form.Control>
          <Form.Message match="valueMissing" className="text-red-500 text-sm">
            Please select a number of guests
          </Form.Message>
        </Form.Field>

        <Form.Submit asChild>
          <button className="cursor-pointer w-full bg-green-900 hover:bg-green-800 font-medium text-white py-3 rounded-md">
            Check Availability
          </button>
        </Form.Submit>
        <span className="text-xs text-slate-500 flex items-center gap-2 justify-center">
          <FaCheck className="text-green-600" /> Best Price Guaranteed
        </span>
      </Form.Root>
    </div>
  );
}
