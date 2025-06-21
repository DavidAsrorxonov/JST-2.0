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
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  }, [turnedOn]);

  return (
    <>
      {turnedOn && (
        <div
          className="absolute top-20 right-2 bg-blue-100 border border-blue-500 text-blue-600 p-2 rounded-2xl text-xs"
          ref={divRef}
        >
          <div className="flex items-center gap-2">
            {t("You can edit jobs by checking them")}
            <CircleX
              size={15}
              className="cursor-pointer"
              onClick={() => setTurnedOn(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EditingInfo;
