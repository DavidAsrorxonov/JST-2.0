import React, { useEffect, useState } from "react";
import NavigationButtons from "../NavigationButtons";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Mic, Square } from "lucide-react";

const SupportBody = () => {
  const [messages, setMessages] = useState([
    { text: "Hi there! How can we help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript && listening) {
      setInput(transcript);
    }
  }, [transcript, listening]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Thanks for your message! We'll get back soon.",
            sender: "bot",
          },
        ]);
      }, 800);
    }
  };

  const handleMicClick = () => {
    if (!browserSupportsSpeechRecognition) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      SpeechRecognition.startListening({
        continuous: true,
        language: "en-US",
      });
    }
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-3xl mx-auto bg-white border border-gray-300 rounded-xl shadow-sm">
      <div className="px-4 py-3 border-b font-semibold text-gray-700 bg-gray-50">
        Support Chat
      </div>
      <NavigationButtons />

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
              msg.sender === "user"
                ? "ml-auto bg-blue-100 text-blue-800"
                : "mr-auto bg-gray-100 text-gray-700"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSend}
        className="flex items-center gap-2 p-3 border-t bg-gray-50"
      >
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 rounded-full bg-blue-100 border border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-blue-500"
        />
        <button
          type="button"
          onClick={handleMicClick}
          className={`px-4 py-2 rounded-full border transition ${
            listening
              ? "bg-red-100 text-red-600 border-red-400 hover:bg-red-200"
              : "bg-green-100 text-green-600 border-green-400 hover:bg-green-200"
          }`}
        >
          {listening ? <Square /> : <Mic />}
        </button>
        <button
          type="submit"
          className="bg-blue-100 border border-blue-500 text-blue-600 px-4 py-2 hover:bg-blue-200 rounded-full transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SupportBody;
