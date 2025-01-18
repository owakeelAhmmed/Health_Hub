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
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo)
  }
  
  useEffect(()=>{
    fetchDocInfo();
  },[doctors,docId])

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
    </div>
  )
}

export default Appointment