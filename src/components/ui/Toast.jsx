import { addToast } from "@heroui/toast";

const Toast = ({
  desciption,
  duration = 2000,
  shouldShowTimeoutProgress = true,
}) => {
  return addToast({
    description: desciption,
    color: "default",
    timeout: duration,
    shouldShowTimeoutProgress: shouldShowTimeoutProgress,
    radius: "lg",
  });
};

export default Toast;
