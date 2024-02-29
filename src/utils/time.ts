export const formatTime = (timeString: string) => {
  return new Date(timeString).toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};
