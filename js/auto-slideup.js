!function() {
  var view = document.querySelectorAll('[data-x]')

  var controller = {
    view: null,
    init: function(view) {
      this.view = view
      for (let i = 0; i < this.view.length; i++) {
        this.view[i].classList.add('offset')
      }
      this.findClosest()
      this.slide()
    },
    slide: function() {
      window.addEventListener('scroll', () => {
        this.findClosest()
      })
    },
    findClosest: function() {
      let specialTags = this.view
      let minIndex = 0
      for (let i = 0; i < specialTags.length; i++) {
        if (
          Math.abs(specialTags[i].offsetTop - window.scrollY) <
          Math.abs(specialTags[minIndex].offsetTop - window.scrollY)
        ) {
          minIndex = i
        }
      }
      specialTags[minIndex].classList.remove('offset')
      let id = specialTags[minIndex].id
      let a = document.querySelector('a[href="#' + id + '"]')
      let li = a.parentNode
      let brothersAndMe = li.parentNode.children
      for (let i = 0; i < brothersAndMe.length; i++) {
        brothersAndMe[i].classList.remove('highlight')
      }
      li.classList.add('highlight')

      let liTags = document.querySelectorAll('nav.menu > ul > li')
      for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function(e) {
          e.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function(e) {
          e.currentTarget.classList.remove('active')
        }
      }
    }
  }

  controller.init(view)
}.call()
