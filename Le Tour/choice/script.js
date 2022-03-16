const tagsEl = document.getElementById("tags")
const textarea = document.getElementById("textarea")

textarea.focus()

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value)
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = ""
    }, 10)
    randomSelect()
  }
})

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "") //prevent space...
    .map((tag) => tag.trim())
  tagsEl.innerHTML = ""

  tags.forEach((tag) => {
    const tagEl = document.createElement("span") // creating span and adding class
    tagEl.classList.add("tag")
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect() {
  const times = 40
  
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    if (randomTag !== undefined) {
      highlightTag(randomTag)

      setTimeout(() => {
        unHighlightTag(randomTag)
      }, 100)
    }
  }, 100)

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()

      highlightTag(randomTag)
    }, 900)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag") // all spans
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add("highlight")
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight")
}
