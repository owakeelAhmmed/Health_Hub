/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";


const Appointment = () => {


  const {docId} = useParams();
  const {doctors, currencySymbol} = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo)
  }

  const availableSlots = async () => {
    setDocSlots([]);

    let today = new Date();
    for(let i = 0; i < 7; i++){
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate()+i);

      let endTime = new Date();
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0);

      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = [];
      while(currentDate < endTime){
        let timeFormatted = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: timeFormatted,
        })

        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDocSlots(prev => ([...prev, timeSlots]))
    }
  } 
  
  useEffect(()=>{
    fetchDocInfo();
  },[doctors,docId])

  useEffect(() =>{
    availableSlots()
  },[docInfo])

  useEffect(() => {
    console.log(docSlots)
  },[docSlots])

  return docInfo && (
    <div>
        {/*--------- Doctor Details -----------*/}
        <div className="flex flex-col sm:flex-row gap-4">
            <div>
                <img className="myStyle w-full sm:max-w-72" src={docInfo.image} alt="" />
            </div>
            <div className="flex-1 myStyle p-8 py-7 mx-2 sm:mx-0 mt-[-80px] sm:mt-0 ">
              {/* --------- Doctor other details ---------- */}
              <p className="flex items-center gap-2 text-2xl font-medium">
                {docInfo.name} <img src={assets.verified_icon} alt="" />
                </p>
            
            <div className="flex items-center gap-2 text-sm mt-1">
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <p className="myStyle px-3 py-1">{docInfo.experience}</p>
            </div>

            {/* -------- Doctor About -------- */}
            <div>
                <div className="flex items-center gap-2">
                  <p>About</p>
                  <img src={assets.info_icon} alt="" />
                </div>
                <p>{docInfo.about}</p>
            </div>
                <div>
                    <p className="mt-4">
                      Appointment fee: <span>{currencySymbol}{docInfo.fees}</span>
                    </p>
                </div>
            </div>
        </div>

        {/* ------- Booking Slots ---------- */}

        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium">
          <p>Booking your slots</p>
          <div className="flex gap-4 items-center w-full overflow-x-scroll mt-4">
            {
              docSlots.length && docSlots.map((item,index)=> (
                <div onClick={() => setSlotIndex(index)} className={`text-center py-4 px-4 min-w-16 cursor-pointer ${slotIndex === index ? 'bg-primary' : 'border border-gray'}`} key={index}>
                    <button>
                      {
                        item[0] && daysOfWeek[item[0].dateTime.getDay()]
                      }
                    </button>
                    <button>
                      {
                        item[0] && item[0].dateTime.getDate()
                      }
                    </button>
                </div>
              ))
            }
          </div>

            <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4 ">
              {
                docSlots.length && docSlots[slotIndex].map((item, index)=> (
                  <button onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-text_white' : 'border border-e-gray' }`} key={index}>
                    {
                      item.time.toLowerCase()
                    }
                  </button>
                ))
              }
            </div>


        </div>


    </div>
  )
}

export default Appointment