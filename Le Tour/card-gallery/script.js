const panels = document.querySelectorAll(".panel")

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses()
    panel.classList.add("active")
  })
})

function removeActiveClasses() {
  /*remove from all at first */
  panels.forEach((panel) => {
    panel.classList.remove("active")
  })
}
