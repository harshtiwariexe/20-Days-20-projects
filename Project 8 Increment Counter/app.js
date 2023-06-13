const count = document.querySelectorAll(".counter");

count.forEach((counter) => {
  counter.innerText = "0";

  updateCount = () => {
    const target = +counter.getAttribute("data-target");
    console.log(target);
    const c = +counter.innerText;
    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
