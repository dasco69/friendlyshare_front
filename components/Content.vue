<template>
  <div>
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
