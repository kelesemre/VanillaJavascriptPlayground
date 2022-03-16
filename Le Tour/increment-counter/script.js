const counters = document.querySelectorAll(".counter")

counters.forEach((counter) => {
  counter.innerText = "0"

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target") // get custom attribute //+ means convert to number type
    const c = +counter.innerText // + means that the result of counter.innerText is integer.

    const increment = target / 200

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)
    } else {
      counter.innerText = target;
    }
  }

  updateCounter();
})