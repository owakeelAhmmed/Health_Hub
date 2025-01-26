import { assets } from "../assets/assets"


const Contact = () => {
  return (
    <div>
      <div className="text-center text-3xl pt-10">
        <p>Contact Us</p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img className="w-full md:max-w-[360px]" src={assets.contact_image} alt="" />

        <div className="flex flex-col justify-center items-start gap-6 ">
        <p>OUR OFFICE</p>
        <p>00000 Willms <br /> Station Suite 000, Washington, USA</p>
        <p>Tel: (000) 000-0000 <br />
        Email: greatstackdev@gmail.com</p>
        <p>CAREERS AT PRESCRIPTO</p>
        <p>Learn more about our teams and job openings.</p>
        <button className="border px-8 py-4 cursor-pointer hover:bg-primary transition-all duration-300">Explore</button>
      </div>
      </div>

     
    </div>
  )
}

export default Contact