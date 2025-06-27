import { addToast } from "@heroui/toast";

const Toast = ({
  desciption,
  color,
  duration = 2000,
  shouldShowTimeoutProgress = true,
}) => {
  return addToast({
    description: desciption,
    color: color,
    timeout: duration,
    shouldShowTimeoutProgress: shouldShowTimeoutProgress,
  });
};

export default Toast;
