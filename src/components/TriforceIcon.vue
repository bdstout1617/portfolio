<template>
  <div 
    style="perspective:800px; display:inline-block;"
    :style="triforceSize"
  >
    <div 
      style="width:100%;height:100%;"
      :style="animate"
    
    >
      <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 200 174" 
        :width="props.size" 
        :height="props.size"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#ffea6b" />
            <stop offset="50%" stop-color="#ffd24a" />
            <stop offset="100%" stop-color="#c48800" />
          </linearGradient>
        </defs>

        <g fill="url(#goldGrad)" stroke="#9a6a00" stroke-width="2" stroke-linejoin="round">
          <polygon points="0,173.205 100,173.205 50,86.6025" />
          <polygon points="100,173.205 200,173.205 150,86.6025" />
          <polygon points="50,86.6025 150,86.6025 100,0" />
        </g>
      </svg>
    </div>
  </div>
</template>

<style>
@keyframes spin3d {
  0% {
    transform: rotateY(0deg) rotateX(0deg);
  }

  50% {
    transform: rotateY(180deg) rotateX(0deg);
  }

  100% {
    transform: rotateY(360deg) rotateX(0deg);
  }
}
</style>
<script setup lang="ts">

  const props = defineProps({
    size: {
      type: Number,
      default: 70,
      required: false
    },
    spin: {
      type: Boolean,
      default: false,
      required: false
    }
  })
  const triforceSize = `width: ${props.size}px; height: ${props.size}px;`
  const animate = props.spin ? 'transform-style:preserve-3d; animation: spin3d 6s linear infinite;' : 'transform-style:none; animation: none;'

</script>