import { useContext } from "react"
import { AppContext } from "../context/AppContext"


const MyAppointment = () => {

  const {doctors} = useContext(AppContext)


  return (
    <div>
      <p className="pb-3 mt-12 font-medium border-b">My appointments</p>
      <div>
        {
          doctors.slice(0,3).map((item, index) => (
            <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
                <div>
                  <img className="w-32" src={item.image} alt="" />
                </div>
                <div className="flex-1 text-sm">
                  <p className="font-semibold">{item.name}</p>
                  <p>{item.speciality}</p>
                  <p className="font-medium">Address:</p>
                  <p className="text-xs">{item.address.line1}</p>
                  <p className="text-xs">{item.address.line2}</p>
                  <p className="text-xs mt-1">Date & Time:</p>
                </div>
                <div></div>
                <div className="flex flex-col gap-2 justify-center">
                  <button className="text-sm text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-text_white transition-all duration-300">Pay</button>
                  <button className="text-sm text-center sm:min-w-48 py-2 border rounded hover:bg-red hover:text-text_white transition-all duration-300">Cancel</button>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointment