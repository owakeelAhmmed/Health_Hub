import { assets } from "../assets/assets"

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

  return (
    <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            {/* --------- Left Section -------------- */}
            <div>
                <img className="mb-5 w-40" src={assets.logo} alt="" />
                <p className="w-full md:w-2/3 leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quod sequi! Sed ducimus, voluptas debitis inventore quam repudiandae cum perferendis.
                </p>
            </div>

             {/* --------- Center Section -------------- */}
             <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Privacy Police</li>
                </ul>
            </div>

             {/* --------- Right Section -------------- */}
             <div> 
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-2">
                    <li>+0-000-000-000</li>
                    <li>greatstackdev@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className="text-center text-gray-500 py-6">
                &copy; {year} GreatStack. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer