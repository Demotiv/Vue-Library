import Vue from 'vue'

// Клик вне элемента
Vue.directive('click-outside', {
    bind: function (el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
            if (!(el == event.target || el.contains(event.target))) {
                vnode.context[binding.expression](event);
            }
        }
        document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind: function (el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
    },
})

// Клик вне элемента с пропсом
Vue.directive('click-outside-arg', {
    bind: function (el, binding, vnode) {
      el.clickOutsideEvent = function (event) {
        if (vnode.context[binding.arg]) {
          if (!(el == event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event)
          }
        }
      }
      document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind: function (el) {
      document.body.removeEventListener('click', el.clickOutsideEvent)
    },
  })