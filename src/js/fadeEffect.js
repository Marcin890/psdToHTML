function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sections = document.querySelectorAll("section");
// console.log(sections);
const handleScroll = e => {
  const scrollBottom = window.innerHeight + window.scrollY;
  //   console.log(scrollBottom);
  sections.forEach(section => {
    const sectionTopPosition = section.offsetTop;
    const targetSectionOffset = sectionTopPosition + 200;
    // console.log(targetSectionOffset);
    if (
      scrollBottom > targetSectionOffset &&
      !section.classList.contains("active")
    ) {
      section.classList += " active";
      // console.log("brawo");
    }
  });
};

document.addEventListener("scroll", debounce(handleScroll));
