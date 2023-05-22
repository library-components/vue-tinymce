
import Tinymce from './components/Tinymce'

const install = function (Vue) {
  Vue.component(Tinymce.name, Tinymce)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
