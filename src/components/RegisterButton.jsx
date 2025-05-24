const RegisterButton = ({ content }) => {
  return (
    <div className="flex items-center justify-center px-4 py-2 bg-gray-300 rounded-full cursor-pointer hover:scale-95 transition-all duration-300">
      <button>{content}</button>
    </div>
  );
};

export default RegisterButton;
