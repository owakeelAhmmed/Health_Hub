import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext";


const Doctors = () => {

  const { specialty } = useParams();
  const [filterDoc,setFilterDoc] = useState([]);
  const navigate = useNavigate();
  console.log(specialty)
  const {doctors} = useContext(AppContext);


  const applyFilter = () => {
    if(specialty){
      setFilterDoc(doctors.filter(doc => doc.speciality === specialty))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[doctors, specialty])

  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
          <div className="flex flex-col gap-4 text-sm">
            <button onClick={() => specialty === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray rounded transition-all cursor-pointer ${specialty === "General physician" ? "button_style" : ""}`}>General physician</button>
            <button onClick={() => specialty === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray rounded transition-all cursor-pointer ${specialty === "Gynecologist" ? "button_style" : ""}`}>Gynecologist</button>
            <button onClick={() => specialty === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray rounded transition-all cursor-pointer ${specialty === "Dermatologist" ? "button_style" : ""}`}>Dermatologist</button>
            <button onClick={() => specialty === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray rounded transition-all cursor-pointer ${specialty === "Pediatricians" ? "button_style" : ""}`}>Pediatricians</button>
            <button onClick={() => specialty === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray rounded transition-all cursor-pointer ${specialty === "Neurologist" ? "button_style" : ""}`}>Neurologist</button>
            <button onClick={() => specialty === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray rounded transition-all cursor-pointer ${specialty === "Gastroenterologist" ? "button_style" : ""}`}>Gastroenterologist</button>
          </div>
            <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
              {
                filterDoc.map((item, index)=> (
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
      </div>
    </div>
  )
}

export default Doctors