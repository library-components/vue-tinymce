import VueTinymce from './src/component'

VueTinymce.install = function (Vue) {
  Vue.component(VueTinymce.name, VueTinymce)
}

export default VueTinymce
