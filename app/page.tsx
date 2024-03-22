"use client";

import { useState } from "react";

export default function Home() {
  const [urlAddress, setUrlAddress] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const handleUrlAddressChange = (e:any) => {
    setUrlAddress(e.target.value);
  };

  const handleUserMessageChange = (e:any) => {
    setUserMessage(e.target.value);
  };

  const handleSearchYoutube = (e:any) => {
    console.log(e.target.value);
  };

  const handleSendMessage = () => {
    // Add your logic for sending user messages here
  };

  return (
    <div className="flex-1 p-2 sm:p-6 justify-between flex flex-col h-screen">
      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <div className="relative flex">
          <input id="urlAddress" type="text" placeholder="https://youtube.com/?v=123123123"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-md py-3" />
          <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button id="searchYoutubeButton" type="button"
              className="inline-flex items-center justify-center rounded-lg px-9 py-3 transition duration-500 ease-in-out text-white bg-red-500 hover:bg-red-400 focus:outline-none"
              onClick={handleSearchYoutube}
              >
              <span>Search Youtube Video</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                className="h-6 w-6 ml-2 transform rotate-90">
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                </path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
          <div className="relative flex items-center space-x-4">
            <img src="" id="youtubeThumbnail" alt=""
              className="hidden w-32 sm:w-48 h-22 sm:h-28 flex-1 rounded-md" />
            <div id="youtubeLoading" role="status"
              className="hidden space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:items-center">
              <div
                className="w-32 sm:w-48 h-22 sm:h-28 flex items-center justify-center bg-gray-300 rounded dark:bg-gray-300">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path
                    d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <div className="text-2xl mt-1 flex items-center">
                <span className="text-gray-700 mr-3" id="youtubeTitle">Please enter a Youtube URL</span>
              </div>
              <span className="text-lg text-gray-700 mr-3" id="youtubeAuthor"></span>
              <span className=" text-gray-600" id="youtubeDescription"></span>
            </div>
          </div>
        </div>
      </div>
      <div id="messages" className="hidden flex-1 flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"></div>
      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <div className="relative flex">
          <input id="userSendMessage" type="text" placeholder="Write your message!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-md py-3" />
          <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button  id="userSendButton" type="button"
              className="inline-flex items-center justify-center rounded-lg px-9 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
              <span>Send</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                className="h-6 w-6 ml-2 transform rotate-90">
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                </path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
