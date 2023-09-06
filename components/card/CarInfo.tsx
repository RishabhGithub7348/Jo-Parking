"use client";
import React, { useEffect, useState } from "react";
import { updateUser } from "@/lib/actions/user.actions";
import { RiAccountBoxFill } from "react-icons/ri";
interface CarInfoProps {
  user: {
    id: string;
    userName: string;
    address: string;
    insuranceNumber: string;
    vechileName: string;
    vechileType: string;
    vechileImage: string;
    vechileModelNumber: string;
    email: string;
    userImage: string;
    drivingExperience: string;
    phoneNumber: string;
    vechile_cardNumber: string;
    dateofBirth: string;
    cardNumber: string;
    dob: string;
    contactNumber: string;
    experience: string;
    addressofuser:string
  };
}
import { AiOutlineEdit } from "react-icons/ai";
import { toast } from "react-hot-toast";

const CarInfo: React.FC<CarInfoProps> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setFormData({ ...user });
    setIsEditing(false);
  };

  console.log(user)

  const handleSave = async () => {
    await updateUser({
      userId: user.id,
      vechileName: user.vechileName,
      vechileType: user.vechileType,
      vechileImage: user.vechileImage,
      email: formData.email,
      userName: formData.userName,
      path: "/profile/edit",
      userImage: user.userImage,
      dateofBirth: formData.dob,
      drivingExperience: formData.experience,
      address: formData.addressofuser,
      vechile_cardNumber: formData.cardNumber,
      phoneNumber: formData.contactNumber,
      vechile_number: formData.cardNumber,
    });
    toast.success("Profile Updated Successfully");

    setIsEditing(false);

    setIsEditing(false);
  };

  return (
    <div className="bg-white p-8 shadow-md rounded-md -mt-8 ">
      <div className="flex flex-row gap-3">
        <RiAccountBoxFill className="h-6 w-6 text-blue" />
        <h2 className="text-xl font-semibold mb-2">
          {user.vechileType.toUpperCase()} & Personal Information
        </h2>
        <button
          className="bg-blue-500 ml-auto hover:bg-blue-600 text-white px-3 py-1 rounded-md mt-2"
          onClick={() => setIsEditing(true)}
        >
          <AiOutlineEdit className="h-7 w-7 text-blue" />
        </button>
      </div>
      {isEditing ? (
        <form className="space-y-4">
          <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="data w-[396px] justify-evenly">
              <div className="bg-white flex mt-4">
                <p className="text-[#8e8c8ee4] flex-shrink-0">First Name</p>
                <input
                  type="text"
                  style={{ textAlign: "right" }}
                  placeholder="First Name"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  className="ml-auto outline-none font-semibold text-slate-600"
                />
              </div>
              <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
            </div>
            <div className="data w-[396px] justify-evenly">
              <div className="bg-white flex mt-4">
                <p className="text-[#8e8c8ee4] flex-shrink-0 ">Email Address</p>
                <input
                  className="ml-auto text-small-medium font-semibold max-w-[250px] outline-none text-slate-600"
                  style={{ textAlign: "right" }}
                  placeholder="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
            </div>

            <div className="data w-[396px] justify-evenly">
              <div className="bg-white flex mt-4">
                <p className="text-[#8e8c8ee4] flex-shrink-0">Address</p>
                <input
                  className="ml-auto font-semibold max-w-[200px] outline-none text-slate-600"
                  type="text"
                  style={{ textAlign: "right" }}
                  placeholder="address"
                  name="Address"
                  value={formData.addressofuser}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
            </div>

            <div className="data w-[396px] justify-evenly">
              <div className="bg-white flex mt-4">
                <p className="text-[#8e8c8ee4] flex-shrink-0">
                  Driving Experience
                </p>
                <input
                  className="ml-auto font-semibold max-w-[200px] outline-none text-slate-600"
                  type="number"
                  name="experience"
                  style={{ textAlign: "right" }}
                  placeholder="Driving Experience"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
            </div>

            <div className="data w-[396px] justify-evenly">
              <div className="bg-white flex mt-4">
                <p className="text-[#8e8c8ee4] flex-shrink-0">Date of Birth:</p>
                <input
                  className="ml-auto font-semibold max-w-[200px] outline-none text-slate-600"
                  type="date"
                  name="dob"
                  style={{ textAlign: "right" }}
                  placeholder="Date of Birth"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
            </div>

            <div className="data w-[396px] justify-evenly">
              <div className="bg-white flex mt-4">
                <p className="text-[#8e8c8ee4] flex-shrink-0">Contact Number</p>
                <input
                  className="ml-auto font-semibold max-w-[200px] outline-none text-slate-600"
                  type="text"
                  name="contactNumber"
                  style={{ textAlign: "right" }}
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />{" "}
              </div>
              <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
            </div>

            <div className="data w-[396px] justify-evenly">
              <div className="bg-white flex mt-4">
                <p className="text-[#8e8c8ee4] flex-shrink-0">
                  {user.vechileType.toUpperCase()} Card Number
                </p>
                <input
                  className="ml-auto font-semibold max-w-[200px] outline-none text-slate-600"
                  type="text"
                  name="cardNumber"
                  style={{ textAlign: "right" }}
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                />{" "}
              </div>
              <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
            </div>
            {/* Add more fields as needed */}
          </div>
          {/* Add more fields as needed */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-396 hover:bg-red-400 bg-stone-600 text-white hover:text-white px-3 py-1 rounded-md"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <div
             
              className="bg-[#5369e7] cursor-pointer  hover:bg-blue-600 text-white p-6 px-3 py-1 rounded-md"
              onClick={handleSave}
            >
              Save
            </div>
          </div>
        </form>
      ) : (
        <div className="mt-2 grid lg:grid lg:grid-cols-2  gap-3">
          <div className="data w-[396px] justify-evenly">
            <div className="bg-white flex mt-4">
              <p className="text-[#8e8c8ee4] flex-shrink-0">First Name</p>
              <p
                className={`${
                  user.userName ? "" : ""
                } ml-auto text-slate-600 font-bold`}
              >
                {" "}
                {user.userName}
              </p>
            </div>
            <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
          </div>
          <div className="data w-[396px] justify-evenly">
            <div className="bg-white flex mt-4">
              <p className="text-[#8e8c8ee4] flex-shrink-0 ">Email Address</p>
              <p
                className={`${
                  user.email ? "" : ""
                }  ml-auto text-slate-600 font-bold `}
              >
                {" "}
                {user.email}
              </p>
            </div>
            <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
          </div>

          <div className="data w-[396px] justify-evenly">
            <div className="bg-white flex mt-4">
              <p className="text-[#8e8c8ee4] flex-shrink-0">Address</p>
              <p
                className={`${
                  user.address ? "" : ""
                } ml-auto text-slate-600 font-bold`}
              >
                {user.address ? user.address : "Please fill"}
              </p>
            </div>
            <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
          </div>

          <div className="data w-[396px] justify-evenly">
            <div className="bg-white flex mt-4">
              <p className="text-[#8e8c8ee4] flex-shrink-0">
                Driving Experience
              </p>
              <p
                className={`${
                  user.experience ? "" : ""
                } ml-auto text-slate-600 font-bold`}
              >
                {" "}
                {user.drivingExperience
                  ? user.drivingExperience
                  : "Please fill"}
              </p>
            </div>
            <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
          </div>

          <div className="data w-[396px] justify-evenly">
            <div className="bg-white flex mt-4">
              <p className="text-[#8e8c8ee4] flex-shrink-0">Date of Birth:</p>
              <p
                className={`${
                  user.dob ? "" : ""
                } ml-auto text-slate-600 font-bold`}
              >
                {" "}
                {user.dateofBirth ? user.dateofBirth : "Please fill"}
              </p>
            </div>
            <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
          </div>

          <div className="data w-[396px] justify-evenly">
            <div className="bg-white flex mt-4">
              <p className="text-[#8e8c8ee4] flex-shrink-0">Contact Number</p>
              <p
                className={`${
                  user.contactNumber ? "" : ""
                } ml-auto text-slate-600 font-bold`}
              >
                {user.phoneNumber ? user.phoneNumber : "Please fill"}
              </p>
            </div>
            <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
          </div>

          <div className="data w-[396px] justify-evenly">
            <div className="bg-white flex mt-4">
              <p className="text-[#8e8c8ee4] flex-shrink-0">
                {user.vechileType.toUpperCase()} Card Number
              </p>
              <p
                className={`${
                  user.cardNumber ? "" : ""
                } ml-auto text-slate-600 font-bold`}
              >
                {" "}
                {user.vechile_cardNumber
                  ? user.vechile_cardNumber
                  : "Please fill"}
              </p>
            </div>
            <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
          </div>
          {/* Add more fields as needed */}
        </div>
      )}
    </div>
  );
};

export default CarInfo;
