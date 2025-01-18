import { NavLink, useNavigate } from 'react-router-dom';
import {assets} from '../assets/assets';
import { useState } from 'react';

const Navbar = () => {

    const navigate = useNavigate();
    // const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

  return (
    <div className='flex justify-between items-center py-4 text-sm mb-5 border-b border-b-gray-400'>
        <img onClick={()=> {navigate('/')}} className='w-44 cursor-pointer' src={assets.logo} alt='logo'/>
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>Home</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>All Doctors</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>About</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>Contact</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                    <img className='w-2.5 ' src={assets.dropdown_icon} alt="" />

                    <div className='absolute top-0 right-0 pt-14 text-base front-medium z-20 group-hover:block hidden'>
                        <div className='myStyle min-w-48 rounded flex flex-col gap-4 bg-gray p-4'>
                            <span onClick={()=> navigate('/my-profile')} className='hover:font-bold cursor-pointer'>Profile</span>
                            <span onClick={()=> navigate('/my-appointment')} className='hover:font-bold cursor-pointer'>My Appointment</span>
                            <span onClick={()=> setToken(false)} className='hover:font-bold cursor-pointer'>LogOut</span>
                        </div>
                    </div>

                </div> : <button onClick={()=> navigate('/login')} className='bg-primary text-text_white px-8 py-4 rounded-full font-light hidden md:block'>Create Account</button>
            }
        </div>
    </div>
  )
}

export default Navbar