import { Facebook, Github, Instagram, Mail, Send, Twitter } from "lucide-react";

const Contact = () => {
  const connectInfo = [
    {
      link: "https://github.com/DavidAsrorxonov",
      icon: <Github className="text-gray-800" />,
      label: "Github",
      labelStyle: "font-medium text-gray-700",
    },
    {
      link: "https://www.facebook.com/profile.php?id=100088196042938",
      icon: <Facebook className="text-blue-600" />,
      label: "Facebook",
      labelStyle: "font-medium text-gray-700",
    },
    {
      link: "https://t.me/whoisdave02",
      icon: <Send className="text-teal-500" />,
      label: "Telegram",
      labelStyle: "font-medium text-gray-700",
    },
    {
      link: "https://www.instagram.com/adovudkhan/",
      icon: <Instagram className="text-pink-600" />,
      label: "Instagram",
      labelStyle: "font-medium text-gray-700",
    },
    {
      link: "https://twitter.com/DAsrorxonov",
      icon: <Twitter className="text-blue-400" />,
      label: "Twitter",
      labelStyle: "font-medium text-gray-700",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-left w-full text-[#e5e5e5] tracking-tight mb-16">
        Reach out to us
      </h1>
      <div className="w-full flex flex-col md:flex-row items-start justify-start px-6 md:space-y-0 gap-4">
        <div className="flex flex-col items-center justify-center w-full">
          <form className="flex flex-col gap-5 w-full max-w-md bg-[#171717] p-8 rounded-lg shadow-xl border border-white/30">
            <h1 className="text-5xl font-extrabold text-[#e5e5e5] mb-4 text-center">
              Talk to Us
            </h1>

            <div className="flex flex-col">
              <label className="mb-1 text-[#e5e5e5] font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Type your name"
                className="bg-[#212121] text-[#e5e5e5] p-2 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition placeholder:text-white/50"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-[#e5e5e5] font-medium">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Type your email"
                className="bg-[#212121] text-[#e5e5e5] p-2 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition placeholder:text-white/50"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-[#e5e5e5] font-medium">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Type your message"
                className="bg-[#212121] text-[#e5e5e5] p-2 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition placeholder:text-white/50"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#e5e5e5] text-[#171717] font-medium py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
