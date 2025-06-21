import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="w-full shadow-inner py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-gray-700">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">
            <Logo />
          </h2>
          <p className="text-sm mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <p className="font-semibold mb-2 text-center md:text-left">
            Subscribe to our newsletter
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2 text-sm underline underline-offset-2">
          <a
            href="/terms"
            className="hover:text-blue-500 transition"
            target="_blank"
          >
            Terms of Service
          </a>
          <a
            href="/privacy"
            className="hover:text-blue-500 transition"
            target="_blank"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
