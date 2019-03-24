!function() {
  var view = document.querySelectorAll('nav.menu > ul > li > a')
  var controller = {
    view: null,
    init: function() {
      this.view = view
      requestAnimationFrame(this.animate.bind(this))
      this.bindEvents()
    },
    animate: function(time) {
      requestAnimationFrame(this.animate.bind(this))
      TWEEN.update(time)
    },
    bindEvents: function() {
      var aTags = this.view
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function(e) {
          e.preventDefault()
          let href = e.currentTarget.getAttribute('href')
          let el = document.querySelector(href)
          let top = el.offsetTop
          // window.scrollTo(0, top - 80)

          let currentTop = window.scrollY
          let targetTop = top - 80
          let s = targetTop - currentTop // 路程
          var coords = { y: currentTop } // 起始位置
          var t = Math.abs((s / 100) * 300) // 时间
          if (t > 500) {
            t = 500
          }
          var tween = new TWEEN.Tween(coords) // 起始位置
            .to({ y: targetTop }, t) // 结束位置 和 时间
            .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
            .onUpdate(function() {
              // coords.y 已经变了
              window.scrollTo(0, coords.y) // 如何更新界面
            })
            .start() // 开始缓动
        }
      }
    }
  }

  controller.init(view)
}.call()
