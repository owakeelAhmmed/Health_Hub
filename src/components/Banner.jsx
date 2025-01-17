import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const Banner = () => {

    const navigate = useNavigate();

  return (
        
    <div className="myStyle flex rounded-lg px-6 sm:px-10 lg:px-12 my-20 md:mx-10">
        {/*----------- Banner Left Side ---------------*/}
        <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-text_white">
                <p>Book Appointment</p>
                <p className="mt-4">With 100+ Trusted Doctors</p>
            </div>
            <button onClick={() => {navigate('/login'); scrollTo(0,0)}} className='bg-gray text-black mt-6 px-8 py-4 rounded-full font-light hover:scale-105 transition-all duration-300'>Create Account</button>
        </div>
        {/*----------- Banner Right Side ---------------*/}
        <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
            <img className="w-full absolute bottom-0 right-0 max-w-md" src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default Banner