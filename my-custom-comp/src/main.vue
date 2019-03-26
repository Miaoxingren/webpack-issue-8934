<template>
  <component v-if="id" :is="`list-${id}`" />
</template>

<script>
export default {
  props: ['id'],
  name: "MyCustomComp",
  components: {
    'list-1': () => import(/* webpackChunkName: "MyTaglist1" */'./list-1.vue'),
    'list-2': () => import(/* webpackChunkName: "MyTaglist2" */'./list-2.vue')
  }
}
</script>