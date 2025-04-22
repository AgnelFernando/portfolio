<template>
    <div class="section-title flex flex-col mb-16">
        <div class="text-center text-text-title text-5xl font-bold">
            {{ titlename }}
        </div>
        <div class="flex justify-center mt-4">
            <div :class="[lineWidthClass, 'h-0.5 bg-icon-color text-center']" />
            <div :class="[lineWidthClass, 'h-0.5 bg-accent text-center']" />
            <div :class="[lineWidthClass, 'h-0.5 bg-icon-color text-center']" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    titlename: {
      type: String,
      required: true
    }
  }, 
  computed: {
    lineWidthClass() {
      if (this.titlename.length == 6) return 'w-12'
      else if(this.titlename.length == 8) return 'w-16'
      else return 'w-24'
    }
  }
}
</script>
