!function() {
  var view = document.querySelector('#topNavBar')

  var controller = {
    view: null,
    init: function(view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function() {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          this.view.classList.add('sticky')
        } else {
          this.view.classList.remove('sticky')
        }
      })
    }
  }

  controller.init(view)
}.call()
