<script setup lang="ts">
 import GridLines from '@/components/GridLines/GridLines.ts'


</script>

<template>

  <div class="relative w-full h-full bg-white overflow-hidden border border-grey-300" :style="{ width: `{width}px`, height: `{height}px` }">


    <div v-for="i in `horizontalLines`" :key="'h-' + i" class="absolute left-0 w-full border-t border-grey-200" :style="{top: `{i * 'cellHeight'}px`}"></div>

    <div v-for="i in `horizontalLines`" :key="'h-' + i" class="absolute top-0 w-full border-t border-grey-200" :style="{left: `{i * 'cellWidth'}px`}">


    </div>
  </div>

</template>
