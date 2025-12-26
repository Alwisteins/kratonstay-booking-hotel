"use client";

import { NavigationMenu } from "radix-ui";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = ["Rooms", "Facilities", "Location", "Reviews", "Offers"];

  return (
    <NavigationMenu.Root
      className={`
        w-full z-50 transition-all duration-300 p-6
        ${
          isSticky
            ? "fixed top-0 bg-white dark:bg-black shadow-md"
            : open
            ? "absolute top-0 bg-white/10 backdrop-blur-xl"
            : "absolute top-0 bg-transparent"
        }
      `}>
      <div className="flex justify-between">
        <h1 className={`text-2xl font-bold ${isSticky ? "text-green-800" : "text-white"}`}>
          Kraton<span className="text-yellow-400">Stay</span>
        </h1>

        <NavigationMenu.List className="hidden lg:flex gap-6 items-center">
          {menus.map((menu) => (
            <NavigationMenu.Item key={menu}>
              <NavigationMenu.Link
                className={`transition-colors ${
                  isSticky ? "text-gray-700 dark:text-gray-300" : "text-white"
                }`}>
                {menu}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}

          <button className="bg-yellow-400 text-green-900 hover:bg-yellow-500 font-medium border border-white px-4 py-2 rounded-md">
            Book Now
          </button>
        </NavigationMenu.List>

        {/* Hamburger Button */}
        <button className="lg:hidden text-3xl z-20" onClick={() => setOpen(!open)}>
          {open ? (
            <HiX color={`${isSticky ? "black" : "white"}`} />
          ) : (
            <HiMenu color={`${isSticky ? "black" : "white"}`} />
          )}
        </button>
      </div>

      {open ? (
        <NavigationMenu.List className="mt-6 z-10 flex flex-col gap-6 items-center w-full">
          {menus.map((menu) => (
            <NavigationMenu.Item key={menu}>
              <NavigationMenu.Link
                className={`transition-colors ${
                  isSticky ? "text-gray-700 dark:text-gray-300" : "text-white"
                }`}>
                {menu}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}

          <button className="cursor-pointer bg-yellow-400 text-green-900 hover:bg-yellow-500 font-medium border border-white w-full px-4 py-3 rounded-md">
            Book Now
          </button>
        </NavigationMenu.List>
      ) : null}

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
};

export default Navbar;
