<template>
  <div class="u-relative u-max-h-full u-overflow-hidden">
    <kinesis-container>
      <kinesis-element :strength="10" type="depth">
        <logo class="a-logo u-p-12" />
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
import Logo from '~/components/atoms/logo/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
