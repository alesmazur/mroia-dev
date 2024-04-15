// Need to clear active class for anchor links
const clearLinkClass = () => {
  const aLinks = Array.from(document.querySelectorAll(`a[class*="anchor-"]`));

  aLinks.forEach((item) => {
    item?.classList.remove("active");
  });
};

export default clearLinkClass;
