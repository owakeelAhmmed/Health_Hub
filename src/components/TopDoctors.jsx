import { useNavigate } from "react-router-dom"
// import { doctors } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";


const TopDoctors = () => {

  const navigate = useNavigate();
  const {doctors} = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">Simply browse through our extensive list of trusted doctors.</p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 ">
        {
          doctors.slice(0,10).map((item, index)=> (
            <div onClick={()=> navigate(`/appointment/${item._id}`)} className="myStyle border rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500" key={index}>
              <div>
                <img src={item.image} alt="" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green">
                  <p className="flex items-center text-green text-center rounded-full">☉</p><p>Available</p>
                </div>
                <div>
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-sm">{item.speciality}</p>
                </div>
                </div>
            </div>
          ))
        }
      </div>
      <button onClick={() => {navigate('/doctors'); scrollTo(0,0)}} className='text-text_white cursor-pointer px-8 py-4 rounded-full font-light bg-primary'>View All Doctors</button>
    </div>
  )
}

export default TopDoctors