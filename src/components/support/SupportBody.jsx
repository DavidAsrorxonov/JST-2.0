import { useEffect, useState } from "react";
import NavigationButtons from ".././ui/NavigationButtons";
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
    <div className="flex flex-col w-full max-w-3xl h-full bg-[#171717] border border-white/20 rounded-xl shadow-lg overflow-hidden">
      <div className="border-b border-white/20 bg-[#0a0a0a] px-3 py-2">
        <NavigationButtons />
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xs px-4 py-2 rounded-lg text-sm border ${
              msg.sender === "user"
                ? "ml-auto bg-[#212121] text-[#e5e5e5] border-white/20 shadow-md"
                : "mr-auto bg-[#0a0a0a] text-[#e5e5e5] border-white/20 shadow-sm"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSend}
        className="flex items-center gap-2 p-3 border-t border-white/20 bg-[#0a0a0a]"
      >
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-1 rounded-lg bg-[#212121] text-[#e5e5e5] border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 placeholder:text-[#a3a3a3]"
        />
        <button
          type="button"
          onClick={handleMicClick}
          className={`p-1 rounded-full border transition ${
            listening
              ? "bg-red-500/20 text-red-400 border-red-500/40 hover:bg-red-500/30"
              : "bg-green-500/20 text-green-400 border-green-500/40 hover:bg-green-500/30"
          }`}
        >
          {listening ? <Square /> : <Mic />}
        </button>
        <button
          type="submit"
          className="bg-[#212121] border border-white/30 text-[#e5e5e5] px-4 py-1 hover:bg-[#2e2e2e] rounded-lg transition shadow-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SupportBody;
