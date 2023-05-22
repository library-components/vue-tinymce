<template>
  <div v-show="visible"
       class="toast">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      message: '', // 默认的提示信息
      visible: false, // 是否可见
      duration: 3000, // 默认三秒
      timer: null, // 计时的，用作判断
      closed: false // 判断是否已经关闭
    }
  },
  watch: {
    closed (newVal) { // 监听closed的值变化，用来控制组件的展示隐藏，及销毁
      if (newVal) {
        this.visible = false
        this.destroyElement()
      }
    }
  },
  mounted () {
    this.startTimer() // 组件挂载后，先做展示
  },
  methods: {
    startTimer () {
      this.visible = true
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.closed = true
          clearTimeout(this.timer)
        }
      }, this.duration)
    },
    destroyElement () { // 销毁组件
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el) // 将组建从dom节点移除
    }
  }
}
</script>

<style lang="scss" scoped>
.toast {
}
</style>
