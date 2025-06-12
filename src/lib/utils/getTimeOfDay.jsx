import { useTranslation } from "react-i18next";

export const getTimeOfDay = () => {
  const { t } = useTranslation();

  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    return t("Good morning");
  } else if (hours < 18) {
    return t("Good afternoon");
  } else {
    return t("Good evening");
  }
};
