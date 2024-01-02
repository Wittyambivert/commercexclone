import { NavLink } from "react-router-dom";
import { MdExpandMore, MdOutlineLocalMall } from "react-icons/md";

export const Navbar = () => {
  return (
    <header className="flex gap-12 items-center  py-6 px-4 md:px-24  bg-white">
      <nav className="flex-1 hidden md:flex gap-6">
        <NavLink to="/" className="flex gap-1 items-center">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products" className="flex gap-1 items-center">
          Products <MdExpandMore />
        </NavLink>
      </nav>

      <nav className="flex-1 flex gap-2 justify-start md:justify-center">
        <h1 className="text-xl md:text-2xl font-medium">CommerceX</h1>
      </nav>

      <nav className="flex-1 hidden md:flex gap-6 justify-end items-center">
        <NavLink to="/pages" className="flex gap-1 items-center">
          Pages
          <MdExpandMore />
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/icons">
          <div className="flex gap-1 justify-center items-center">
            <div className="w-5 h-5 flex justify-center items-center bg-black rounded-full text-xs font-semibold text-white">
              0
            </div>
            <MdOutlineLocalMall />
          </div>
        </NavLink>
      </nav>

      <nav className="mobile flex-1 flex md:hidden gap-4 items-center justify-end">
        <NavLink to="/icons">
          <div className="flex gap-1 justify-center items-center">
            <div className="w-5 h-5 flex justify-center items-center bg-black rounded-full text-xs font-semibold text-white">
              0
            </div>
            <MdOutlineLocalMall />
          </div>
        </NavLink>
        <div className="hamburger flex flex-col gap-3">
          <div className="h-[1.2px] w-10 bg-black"></div>
          <div className="h-[1.2px] w-10 bg-black"></div>
        </div>
      </nav>
    </header>
  );
};
