<template>
  <div class="bg-white p-6 rounded-2xl shadow-md">
    <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
    <div class="h-72">
      <div class="w-full h-64 relative">
        <canvas ref="canvas" class="absolute inset-0 w-full h-full"></canvas>
      </div>
    </div>
  </div>
</template>
  
<script setup>
  import { onMounted, ref } from 'vue';
  import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';
  
  Chart.register(PieController, ArcElement, Tooltip, Legend);
  
  const props = defineProps({
    chartData: Object,
    title: String
  });
  
  const canvas = ref(null);
  
  onMounted(() => {
    new Chart(canvas.value, {
      type: 'pie',
      data: props.chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  });
  </script>
  