export const handleShortcut = (e) => {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "p") {
    e.preventDefault();
    window.location.href = "/progress";
  }
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "e") {
    e.preventDefault();
    window.location.href = "/events";
  }
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "s") {
    e.preventDefault();
    window.location.href = "/support";
  }
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "b") {
    e.preventDefault();
    window.location.href = "/dashboard";
  }
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "o") {
    e.preventDefault();
    window.location.href = "/companies";
  }
};
