import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Hello",
    image: assets.profile_pic,
    email: "test@gmail.com",
    phone: "+8800000000000",
    address: {
      loc: "hello",
      loc2: "hello2",
    },
    gender: "Male",
    dob: "2000-01-01",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded-full" src={userData.image} alt="" />
      {isEdit ? (
        <input
          className="bg-[#2b3640] p-3 "
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className=" mt-4">{userData.name}</p>
      )}
      <hr />
      <div>
        <p>Contact Info</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3">
          <p>Email Id</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address:</p>
          {isEdit ? (
            <p>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, loc: e.target.value },
                  }))
                }
                value={userData.address.loc}
                type="text"
              />
              <br />
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, loc2: e.target.value },
                  }))
                }
                value={userData.address.loc2}
                type="text"
              />
            </p>
          ) : (
            <p>
              {userData.address.loc}
              <br />
              {userData.address.loc2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p>Basic Info</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3">
          <p>Gender:</p>
          {isEdit ? 
          <select onChange={(e) => setUserData(prev => ({...prev, gender:e.target.value}))} value={userData.gender}>
            <option value="Male">Male</option>
            <option value="Male">Female</option>
          </select> : (
            <p>{userData.gender}</p>
          )}
          <p>Birthday:</p>
          {
            isEdit ?
            <input type="text" onChange={(e) => setUserData(prev => ({...prev, gender:e.target.value}))} value={useState.value} />
            : <p>{userData.dob}</p>
          }
        </div>
      </div>
      <div className="mt-4">
          {
            isEdit ?
            <button className="button_style py-3 px-8" onClick={() => setIsEdit(false)}>Save</button> :
            <button className="button_style py-3 px-8" onClick={() => setIsEdit(true)}>Edit</button>
          }
      </div>
    </div>
  );
};

export default MyProfile;
