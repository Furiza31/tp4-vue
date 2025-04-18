<template>
  <div class="base-layout">
    <BaseHeader />
    <main>
      <slot></slot>
    </main>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from './baseHeader.vue'
import BaseFooter from './baseFooter.vue'

export default {
  name: 'BaseLayout',
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>