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
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 text-black">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight mb-16">
        Reach out to us
      </h1>
      <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-around px-6 py-12 space-y-10 md:space-y-0 gap-4">
        <div className="flex flex-col items-center justify-center w-full">
          <form className="flex flex-col gap-5 w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">
              Talk to Us
            </h1>
            <div className="flex items-center justify-center">
              <div className="flex w-20 h-20 items-center justify-center p-3 rounded-full bg-green-100 text-green-500 border border-green-400 mb-6">
                <Mail size={50} />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Type your name"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Type your email"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Type your message"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center w-full my-12">
          <div className="border-t border-gray-300 w-full"></div>
          <span className="px-4 text-gray-500 font-semibold transition-all duration-300 hover:text-gray-700">
            or
          </span>
          <div className="border-t border-gray-300 w-full"></div>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-12 px-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Connect through:
          </h1>
          <div className="flex flex-col gap-4 w-full max-w-md">
            {connectInfo.map(({ link, icon, label, labelStyle }, idx) => (
              <a href={link} target="_blank" key={idx}>
                <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
                  {icon}
                  <span className={labelStyle}>{label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
