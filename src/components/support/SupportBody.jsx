import React, { useState } from "react";
import NavigationButtons from "../NavigationButtons";

const SupportBody = () => {
  const [messages, setMessages] = useState([
    { text: "Hi there! How can we help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

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
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SupportBody;
