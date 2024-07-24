import React, { useEffect, useState } from "react";

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      console.log(import.meta.env.VITE_API_URL);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/messages`
      );
      const data = await response.json();
      setMessages(data);
    };
    fetchMessages();
  }, []);

  const calculateRowSpan = (message) => {
    const baseSpan = message.image ? 11 : 3;
    const messageLength = message.message.length;
    const additionalSpan = Math.ceil(messageLength / 60);

    return baseSpan + additionalSpan;
  };

  return (
    <div
      className="sm:p-4 grid   grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] "
      style={{ gridAutoRows: "30px", gridGap: "0px" }}
    >
      {messages?.length > 0 &&
        messages?.map((message) => (
          <div
            key={message.id}
            className="bg-yellow-100  text-black rounded-lg shadow-lg m-2 border-[2px] border-yellow-300"
            style={{
              gridRowEnd: `span ${calculateRowSpan(message)}`,
            }}
          >
            {message.image && (
              <img
                src={`${message.image}`}
                alt="message image"
                className="w-full h-56 object-cover rounded-t-[8px] mb-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300x200";
                }}
              />
            )}
            <div className="p-4">
              <div className="">
                <p className="">{message.message}</p>
              </div>
              <div className="mt-2 text-right font-semibold">
                <p className="italic ">- {message.name}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MessageList;
