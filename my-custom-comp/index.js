import MyCustomComp from './src/main.vue'

MyCustomComp.install = function (Vue) {
  Vue.component(MyCustomComp.name, MyCustomComp)
}

export default MyCustomComp
