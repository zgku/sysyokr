<template>
  <a-breadcrumb>
    <a-breadcrumb-item>OKR</a-breadcrumb-item>
    <a-breadcrumb-item v-if="$route.meta.module">
      <a href>{{$route.meta.module}}</a>
    </a-breadcrumb-item>
    <a-breadcrumb-item>{{$route.meta.title}}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {

}
</script>

<style>
</style>