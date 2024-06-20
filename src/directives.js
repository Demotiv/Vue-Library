import Vue from 'vue'

Vue.directive('resize', {
    bind(el, binding) {
      const resizeObserver = new ResizeObserver(entries => {
        const entry = entries[0]
  
        binding.value({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        })
      })

      resizeObserver.observe(el)
  
      el.__resizeObserver__ = resizeObserver
    },
    unbind(el) {
      el.__resizeObserver__.disconnect()
      delete el.__resizeObserver__
    }
  })