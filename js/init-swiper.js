!function() {
  var view = '.swiper-container'

  var controller = {
    view: view,
    swiper: null,
    options: {
      pagination: {
        el: '.swiper-pagination'
      }
    },
    init: function() {
      this.swiper = new Swiper(this.view)
      this.initPagenation()
    },
    initPagenation() {
      var mySwiper = this.swiper
      portfolio1.onclick = function() {
        portfolioBar.className = 'bar state-1'
        mySwiper.slideTo(0, 500, false)
      }
      portfolio2.onclick = function() {
        portfolioBar.className = 'bar state-2'
        mySwiper.slideTo(1, 500, false)
      }
      portfolio3.onclick = function() {
        portfolioBar.className = 'bar state-3'
        mySwiper.slideTo(2, 500, false)
      }
    }
  }
  controller.init()
}.call()
