import { assets } from "../assets/assets"

const Header = () => {



  return (
    <div className="myStyle flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20 ">
        {/* ----------- Left Side --------- */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">

            <p className="text-3xl md:text-4xl lg:text-4xl font-semibold md:leading-tight lg:leading-tight text-text_white">
                Book An Appointment <br /> With Trusted Doctors
            </p>
            <div className="flex flex-col md:flex-row items-center gap-3 text-text_white text-sm font-light">
                <p>
                    <img className="w-28" src={assets.group_profiles} alt="" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br className="hidden sm:block"/> Dolorum eveniet facere aperiam totam, tempora commodi?
                </p>
            </div>
            <button className='bg-gray text-black px-8 py-4 rounded-full font-light'>Book Now</button>
        </div>
        


        {/* ----------- Right Side --------- */}
        <div className="md: w-1/2 relative">
            <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header