<template>
  <div id="app">
    <my-custom-comp :id="1" />
  </div>
</template>

<script>
import MyCustomComp from 'my-custom-comp'

export default {
  name: 'App',
  components: {
    MyCustomComp
  }
}
</script>


