const resizeObserver = new ResizeObserver((entries) => {
  entries.forEach((elem) => {
    const card = elem.target;
    const img = elem.target.querySelector(".card__img");
    const text = elem.target.querySelector(".card__text");
    const total = elem.target.querySelector(".card__total");
    img.textContent = "Image (" + img.offsetWidth + "px)";
    text.textContent = "Text (" + text.offsetWidth + "px)";
    total.textContent = "Total (" +card.offsetWidth + "px)";
  })
});

Array.from(document.querySelectorAll(".card")).forEach((item) => resizeObserver.observe(item))
