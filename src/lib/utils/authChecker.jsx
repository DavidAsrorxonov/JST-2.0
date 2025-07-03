import Toast from "../../components/ui/Toast";

export const authChecker = (logout) => {
  const token = localStorage.getItem("token");

  if (!token) {
    Toast({
      desciption: "You are not logged in",
      color: "danger",
    });

    setTimeout(() => {
      Toast({
        desciption: "You will be logged out in 3 seconds",
        color: "primary",
      });

      setTimeout(() => {
        logout();
      }, 3000);
    }, 2000);

    return false;
  }

  return true;
};
