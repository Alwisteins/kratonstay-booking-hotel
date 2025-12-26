import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  const quickLinks = ["About Us", "Rooms & Suites", "Dining", "Offers", "Contact"];
  const contacts = [
    {
      name: "Jl. Malioboro No. 123, Yogyakarta, Indonesia 55271",
      icon: <GrLocation />,
    },
    {
      name: "+62 812 3456 7690",
      icon: <FiPhone />,
    },
    {
      name: "reservations@kratonstay.com",
      icon: <MdOutlineEmail />,
    },
  ];

  return (
    <div className="bg-green-900 px-8 py-12 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">
            Kraton<span className="text-yellow-400">Stay</span>
          </h3>
          <p className="text-sm text-white/60">
            Your home in the heart of Yogyakarta. Experience the perfect blend of tradition and
            modern luxury.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link} className="text-sm text-white/60 hover:text-white">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Contacts</h4>
          <ul className="space-y-2">
            {contacts.map((contact, index) => (
              <li key={index} className="flex items-center gap-2 text-white/60 hover:text-white">
                {contact.icon} <p className="text-sm">{contact.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Newsletter</h4>
          <p className="text-sm text-white/60">Subscribe to get special offers and updates.</p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-white/10 text-white placeholder:text-white/60 focus:outline-none"
            />
            <button className="px-4 py-2 bg-yellow-400 text-green-900 rounded-md">Go</button>
          </div>
        </div>
      </div>
    </div>
  );
}
