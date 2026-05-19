import { useState } from "react";
import axios from "axios";

export default function MedicalChatBot() {

  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([]);

  const [loading, setLoading] =
    useState(false);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMsg = {
      sender: "user",
      text: message
    };

    setChat((prev) => [
      ...prev,
      userMsg
    ]);

    setLoading(true);

    try {

      const response = await axios.post(

        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAGH19in2yVUuef9rYJFf2oPoiflBWhXFU",

        {
          contents: [
            {
              parts: [
                {
                  text:
                    "You are a medical store assistant. Answer simply: " +
                    message
                }
              ]
            }
          ]
        }

      );

      const botReply =
        response.data.candidates[0]
        .content.parts[0].text;

      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botReply
        }
      ]);

    } catch (error) {

      console.log(error);

      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            "Server busy. Try again."
        }
      ]);

    }

    setLoading(false);

    setMessage("");

  };

  return (

    <div className="fixed bottom-6 right-6 w-[350px] bg-white rounded-3xl shadow-2xl overflow-hidden z-50">

      {/* HEADER */}

      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 text-xl font-bold">

        MediCare AI Assistant

      </div>

      {/* CHAT AREA */}

      <div className="h-[400px] overflow-y-auto p-4 bg-gray-50">

        {chat.map((item, index) => (

          <div
            key={index}
            className={`mb-4 flex ${
              item.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                item.sender === "user"
                  ? "bg-cyan-500 text-white"
                  : "bg-white shadow"
              }`}
            >

              {item.text}

            </div>

          </div>

        ))}

        {loading && (

          <p className="text-gray-400">

            AI typing...

          </p>

        )}

      </div>

      {/* INPUT */}

      <div className="flex p-3 border-t">

        <input
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          placeholder="Ask medical help..."
          className="flex-1 border rounded-2xl px-4 py-2 outline-none"
        />

        <button
          onClick={sendMessage}
          className="ml-2 bg-cyan-500 text-white px-5 rounded-2xl"
        >

          Send

        </button>

      </div>

    </div>

  );

}