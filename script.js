// ●
(() => {
  // ●js 02-03: `data-index` putting at .step, .graphic-item
  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");

  for (let i = 0; i < stepElems.length; i++) {
    stepElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
  }

  // ●js 02-08 changing images by height of text bubble

  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;

    for (let i = 0; i < stepElems.length; i++) {
      step = stepElems[i];
      boundingRect = step.getBoundingClientRect();

      // console.log(boundingRect);
      // console.log(boundingRect.top);

      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        graphicElems[step.dataset.index].classList.add("visible");
      } else {
        graphicElems[step.dataset.index].classList.remove("visible");
      }
    }
  });

  graphicElems[0].classList.add("visible");

  // js 03-21 refresh and top screen

  window.addEventListener("load", () => {
    setTimeout(() => {
      scrollTo(0, 0);
    }, 100);
  });
})();
