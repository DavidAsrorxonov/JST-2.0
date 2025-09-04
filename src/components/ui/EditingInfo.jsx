import { CircleX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

const EditingInfo = () => {
  const [turnedOn, setTurnedOn] = useState(false);
  const divRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    setTurnedOn(true);
  }, []);

  useEffect(() => {
    if (turnedOn && divRef.current) {
      gsap.fromTo(
        divRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [turnedOn]);

  return (
    <>
      {turnedOn && (
        <div
          ref={divRef}
          className="absolute top-20 right-2 bg-[#171717]/95 backdrop-blur-md border border-white/20 text-gray-200 px-3 py-2 rounded-xl text-xs shadow-lg"
        >
          <div className="flex items-center gap-2">
            <span>{t("You can edit jobs by checking them")}</span>
            <CircleX
              size={14}
              className="cursor-pointer text-gray-400 hover:text-gray-200 transition"
              onClick={() => setTurnedOn(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EditingInfo;
