import Logo from '../assets/logo-text.png'
import Hamburger from "../assets/hamburger.png";

const Nav = () => {
    return (
      
<nav className="sticky top-0 z-50 bg-white container mx-auto">
  <div className="relative flex items-center justify-between h-16 px-4 md:px-8 ">

  <div className="md:hidden">
  <img
    src={Hamburger}
    alt="Menu"
    className="w-6 h-6"
  />
</div>

    <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
      <img src={Logo} alt="" className="w-28" />
    </div>

    <div className="hidden md:flex flex-1 justify-center">
      <ul className="flex gap-6 lg:gap-8 text-sm lg:text-base font-semibold">
        <li className='text-[#DB2777]'><a href="#">Home</a></li>
        <li><a href="#">Technologies</a></li>
        <li><a href="#">Projects</a></li>
        <li> <a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <div className="flex items-center font-semibold gap-2 md:gap-3 ">
      <button className="text-sm font-medium">
        Sign In
      </button>
      <button className="bg-pink-600 text-white font-semibold text-sm px-4 py-1.5 rounded-[6px] ">
        Sign Up
      </button>
    </div>

  </div>
</nav>
    );
};

export default Nav;