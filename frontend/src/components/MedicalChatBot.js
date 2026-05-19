import { useState } from "react";
import axios from "axios";

export default function MedicalChatBot() {

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [chat, setChat] = useState([
    {
      sender: "bot",
      text:
        "👋 Hello! I am MediCare AI Assistant. Ask me about medicines, orders, healthcare or payments."
    }
  ]);



  // SEND MESSAGE
const sendMessage = async () => {

  if (!message.trim()) return;

  const userMessage = {
    sender: "user",
    text: message
  };

  setChat((prev) => [
    ...prev,
    userMessage
  ]);

  const userInput = message;

  setMessage("");

  setLoading(true);

  try {

    const response = await axios.post(

      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAoy3qaNJ6Mj8vWPKiF2PJkkYV6zQF5DKo",

      {
        contents: [
          {
            parts: [
              {
                text:
                  `You are a helpful medical AI assistant for MediCare app.
                  User question: ${userInput}`
              }
            ]
          }
        ]
      },

      {
        headers: {
          "Content-Type": "application/json"
        }
      }

    );

    console.log("SUCCESS:", response.data);

    const botReply =
      response.data.candidates[0]
      .content.parts[0]
      .text;

    setChat((prev) => [

      ...prev,

      {
        sender: "bot",
        text: botReply
      }

    ]);

  } catch (error) {

    console.log(
      "FULL ERROR:",
      error.response?.data
    );

    setChat((prev) => [

      ...prev,

      {
        sender: "bot",
        text:
          "⚠️ Gemini AI failed."
      }

    ]);

  }

  setLoading(false);

};



  return (

    <>

      {/* OPEN BUTTON */}

      {!open && (

        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-4 rounded-2xl shadow-2xl z-50 font-bold"
        >

          💬 Start Live Chat

        </button>

      )}



      {/* CHAT WINDOW */}

      {open && (

        <div className="fixed bottom-6 right-6 w-[370px] h-[580px] bg-white rounded-[35px] shadow-2xl overflow-hidden z-50 border border-cyan-100">

          {/* HEADER */}

          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-5 flex items-center justify-between">

            <div>

              <h1 className="text-white text-2xl font-bold">

                MediCare AI

              </h1>

              <p className="text-white/80 text-sm">

                Powered by Gemini

              </p>

            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            >

              ✕

            </button>

          </div>



          {/* CHAT AREA */}

          <div className="h-[430px] overflow-y-auto bg-gray-50 p-4">

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
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm shadow ${
                    item.sender === "user"
                      ? "bg-cyan-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >

                  {item.text}

                </div>

              </div>

            ))}



            {loading && (

              <div className="text-sm text-gray-500">

                MediCare AI typing...

              </div>

            )}

          </div>



          {/* INPUT */}

          <div className="p-3 border-t bg-white flex gap-2">

            <input
              type="text"
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Ask medical help..."
              className="flex-1 border border-gray-300 rounded-2xl px-4 py-3 outline-none"
            />

            <button
              onClick={sendMessage}
              className="bg-cyan-500 text-white px-5 rounded-2xl font-bold"
            >

              Send

            </button>

          </div>

        </div>

      )}

    </>

  );

}