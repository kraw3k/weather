// element.scroll is supported only in Chrome, Firefox, Opera
// supportsNativeSmoothScroll detect browser support

export const handleMouseEvents = () => {
  const app = document.getElementById("app");
  const weatherList = document.getElementById("weatherList");
  const navButtonLeft = document.getElementById("navColumnLeft").children[0];
  const navButtonRight = document.getElementById("navColumnRight").children[0];
  const navColumnRight = document.getElementById("navColumnRight");
  const supportsNativeSmoothScroll =
    "scrollBehavior" in document.documentElement.style;

  let isMouseDown = false;
  let startX;
  let scrollLeft;

  navColumnRight.classList.add("visible");

  app.addEventListener("mouseenter", () => {
    const { scrollLeft, scrollWidth, offsetWidth } = weatherList;
    const isScrollEndReached =
      Math.ceil(scrollLeft + offsetWidth) >= scrollWidth - 10;

    if (scrollLeft > 0) navButtonLeft.classList.add("visible");
    if (isScrollEndReached) {
      navColumnRight.classList.remove("visible");
      navButtonRight.classList.remove("visible");
    } else {
      navColumnRight.classList.add("visible");
      navButtonRight.classList.add("visible");
    }
  });

  app.addEventListener("mouseleave", () => {
    navButtonLeft.classList.remove("visible");
    navButtonRight.classList.remove("visible");
  });

  weatherList.addEventListener("mouseleave", () => {
    isMouseDown = false;
  });

  weatherList.addEventListener("mousedown", (e) => {
    if (e.detail > 1) e.preventDefault();
    isMouseDown = true;
    startX = e.pageX - weatherList.offsetLeft;
    scrollLeft = weatherList.scrollLeft;
  });

  weatherList.addEventListener("mouseup", () => {
    isMouseDown = false;
    const { scrollLeft, scrollWidth, offsetWidth } = weatherList;
    const isScrollEndReached =
      Math.ceil(scrollLeft + offsetWidth) >= scrollWidth - 10;

    let columnNumber = Math.round(weatherList.scrollLeft / 71);
    if (isScrollEndReached) columnNumber += 1;

    if (supportsNativeSmoothScroll)
      weatherList.scroll({
        top: 0,
        left: columnNumber * 71,
        behavior: "smooth",
      });
    else weatherList.scrollLeft = columnNumber * 71;
  });

  weatherList.addEventListener("scroll", (e) => {
    const { scrollLeft, scrollWidth, offsetWidth } = weatherList;
    const isScrollEndReached =
      Math.ceil(scrollLeft + offsetWidth) >= scrollWidth - 10;

    if (scrollLeft === 0) navButtonLeft.classList.remove("visible");
    else navButtonLeft.classList.add("visible");

    if (isScrollEndReached) navColumnRight.classList.remove("visible");
    else {
      navButtonRight.classList.add("visible");
      navColumnRight.classList.add("visible");
    }
  });

  weatherList.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - weatherList.offsetLeft;
    const walk = x - startX;
    weatherList.scrollLeft = scrollLeft - walk;
  });
};

export const buttonScrollRight = () => {
  const supportsNativeSmoothScroll =
    "scrollBehavior" in document.documentElement.style;
  const weatherList = document.getElementById("weatherList");
  let { scrollLeft } = weatherList;

  scrollLeft += 71;
  const columnNumber = Math.ceil(scrollLeft / 71);

  if (supportsNativeSmoothScroll)
    weatherList.scrollTo({
      left: columnNumber * 71,
      behavior: "smooth",
    });
  else weatherList.scrollLeft = columnNumber * 71;
};

export const buttonScrollLeft = () => {
  const supportsNativeSmoothScroll =
    "scrollBehavior" in document.documentElement.style;
  const weatherList = document.getElementById("weatherList");
  let { scrollLeft } = weatherList;
  const columnNumber = Math.ceil(scrollLeft / 71);

  if (supportsNativeSmoothScroll)
    weatherList.scrollTo({
      left: columnNumber * 71 - 71,
      behavior: "smooth",
    });
  else weatherList.scrollLeft = columnNumber * 71 - 71;
};
