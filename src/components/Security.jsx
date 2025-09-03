import { Lock, ShieldCheck, KeyRound, EyeOff } from "lucide-react";
import { securityOptions } from "../constants/securityOptions";
import Card from "./ui/Card";

const Security = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-start px-6"
      id="security"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 w-full text-left text-[#e5e5e5]">
        Privacy &amp; Security with{" "}
        <span className="text-[#22c55e] underline">JST</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        {securityOptions.map(({ id, icon, title, content }) => (
          <Card key={id} icon={icon} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Security;
