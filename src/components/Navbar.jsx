// import { NavLink, useNavigate } from 'react-router-dom';
// import {assets} from '../assets/assets';
// import { useState } from 'react';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [showMenu, setShowMenu] = useState(false);
//   const [token, setToken] = useState(true);

//   return (
//     <div className="flex justify-between items-center py-4 text-sm mb-5 border-b border-b-gray-400">
//       <img
//         onClick={() => {
//           navigate("/");
//         }}
//         className="w-44 cursor-pointer"
//         src={assets.logo}
//         alt="logo"
//       />
//       <ul className="hidden md:flex items-start gap-5 font-medium">
//         <NavLink to="/">
//           <li className="py-1">Home</li>
//           <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
//         </NavLink>
//         <NavLink to="/doctors">
//           <li className="py-1">All Doctors</li>
//           <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
//         </NavLink>
//         <NavLink to="/about">
//           <li className="py-1">About</li>
//           <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
//         </NavLink>
//         <NavLink to="/contact">
//           <li className="py-1">Contact</li>
//           <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
//         </NavLink>
//       </ul>
//       <div className="flex items-center gap-4">
//         {token ? (
//           <div className="flex items-center gap-2 cursor-pointer group relative">
//             <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
//             <img className="w-2.5 " src={assets.dropdown_icon} alt="" />

//             <div className="absolute top-0 right-0 pt-14 text-base front-medium z-20 group-hover:block hidden">
//               <div className="myStyle min-w-48 rounded flex flex-col gap-4 bg-gray p-4">
//                 <span
//                   onClick={() => navigate("/my-profile")}
//                   className="hover:font-bold cursor-pointer"
//                 >
//                   Profile
//                 </span>
//                 <span
//                   onClick={() => navigate("/my-appointment")}
//                   className="hover:font-bold cursor-pointer"
//                 >
//                   My Appointment
//                 </span>
//                 <span
//                   onClick={() => setToken(false)}
//                   className="hover:font-bold cursor-pointer"
//                 >
//                   LogOut
//                 </span>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button
//             onClick={() => navigate("/login")}
//             className="bg-primary text-text_white px-8 py-4 rounded-full font-light hidden md:block"
//           >
//             Create Account
//           </button>
//         )}

//         <img
//           onClick={() => setShowMenu(true)}
//           className="w-6 md:hidden"
//           src={assets.menu_icon}
//           alt=""
//         />

//         {/!* -------- Mobile Menu ----------- */}

//         <div
//            className={`${
//             showMenu ? "fixed w-full" : "h-0 w-0"
//           } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-text_white transition-all`}
//         >
//           <div>
//             <img src={assets.logo} alt="" />
//             <img
//               onClick={() => setShowMenu(false)}
//               src={assets.cross_icon}
//               alt=""
//             />
//           </div>

//           <ul>
//             <NavLink to="/">
//               <li className="py-1">Home</li>
//             </NavLink>
//             <NavLink to="/doctors">
//               <li className="py-1">All Doctors</li>
//             </NavLink>
//             <NavLink to="/about">
//               <li className="py-1">About</li>
//             </NavLink>
//             <NavLink to="/contact">
//               <li className="py-1">Contact</li>
//             </NavLink>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex justify-between items-center py-4 text-sm mb-5 border-b border-b-gray-400">
      <img
        onClick={() => {
          navigate("/");
        }}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="logo"
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5 " src={assets.dropdown_icon} alt="" />

            <div className="absolute top-0 right-0 pt-14 text-base front-medium z-20 group-hover:block hidden">
              <div className="myStyle min-w-48 rounded flex flex-col gap-4 bg-gray p-4">
                <span
                  onClick={() => navigate("/my-profile")}
                  className="hover:font-bold cursor-pointer"
                >
                  Profile
                </span>
                <span
                  onClick={() => navigate("/my-appointment")}
                  className="hover:font-bold cursor-pointer"
                >
                  My Appointment
                </span>
                <span
                  onClick={() => setToken(false)}
                  className="hover:font-bold cursor-pointer"
                >
                  LogOut
                </span>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-text_white px-8 py-4 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}

        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />


        {/* -------- Mobile Menu ----------- */}


        <div
           className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-text_white transition-all`}
        >
          <div className="flex justify-between items-center px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
                className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>

          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/"><p className="text-black px-4 py-2 rounded inline-block">Home</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors"><p className="text-black px-4 py-2 rounded inline-block">All Doctors</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about"><p className="text-black px-4 py-2 rounded inline-block">About</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact"><p className="text-black px-4 py-2 rounded inline-block">Contact</p></NavLink>
          </ul>
        </div>



      </div>
    </div>
  );
};

export default Navbar;
