<script lang="ts" setup>
defineProps<{ icon: string }>();
</script>

<template>
  <i :class="`i-${icon}`" />
</template>
