const toggleCSSAnimation = (elem) => {
  elem.style.animationPlayState =
    elem.style.animationPlayState === 'running' ? 'paused' : 'running'
}

const toggleBadJSAnimation = (elem) => {
  if (elem.timer) {
    clearInterval(elem.timer)
    elem.timer = null
    return
  }

  let x = 0

  elem.timer = setInterval(function() {
    x = (x + 1) % 500
    elem.style.transform = `translateX(${x}px)`
  }, 16)
}

const toggleGoodJSAnimation = (elem) => {
  if (elem.timer) {
    cancelAnimationFrame(elem.timer)
    elem.timer = null
    return
  }

  let x = 0

  const tick = () => {
    x = (x + 1) % 500

    elem.style.transform = `translateX(${x}px)`
    elem.timer = requestAnimationFrame(tick)
  }

  tick()
}

var slideshow = remark.create({
  highlightStyle: 'monokai-sublime',
  sourceUrl: 'index.md',
  ratio: '16:9',
  navigation: {
    scroll: false,
  },
})
