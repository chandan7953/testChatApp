import React, { useEffect } from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";
import { IoMdArrowRoundBack } from "react-icons/io";

const MessageContainer = ({ toggleVisibility, isLeftVisible, isMobile }) => {
  const { selectedUser, authUser, onlineUsers } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();

  const isOnline = onlineUsers?.includes(selectedUser?._id);

  return (
    <>
      {selectedUser !== null ? (
        <div
          className={` ${
            isLeftVisible && !isMobile
              ? "hidden"
              : "w-full flex flex-col bg-[#2C4E80]"
          } `}
        >
          <div className="flex gap-2 items-center text-white bg-zinc-800 px-4 py-2 mb-2">
            <IoMdArrowRoundBack
              onClick={toggleVisibility}
              className={`${isMobile ? "hidden" : "text-white text-2xl mr-4"}`}
            />

            <div className="flex gap-2 items-center ">
              <div className={`avatar ${isOnline ? "online" : ""}`}>
                <div className="w-12 rounded-full">
                  <img src={selectedUser?.profilePhoto} alt="user-profile" />
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex justify-between gap-2">
                  <p>{selectedUser?.fullName}</p>
                </div>
              </div>
            </div>
          </div>
          <Messages />
          <SendInput />
        </div>
      ) : (
        <div
          className={` ${
            isLeftVisible && !isMobile
              ? "hidden"
              : "w-full flex flex-col justify-center items-center bg-[#2C4E80]"
          } ${isMobile ? "md:min-w-[550px]" : "w-full"}`}
        >
          <h1 className="text-4xl text-white font-bold">
            Hi,{authUser?.fullName}{" "}
          </h1>
          <h1 className="text-2xl text-white">Let's start conversation</h1>
        </div>
      )}
    </>
  );
};

export default MessageContainer;
