<script setup>
import MemoryCard from "@/components/MemoryCard.vue";
import { ref } from "vue";

const memories = ref([
  {
    title: "Family Vacation",
    description: "Our amazing trip to the mountains last summer.",
    date: "July 2022",
    image: "/images/random-portrait.jpg",
    isLandscape: true,
  },
  {
    title: "Birthday Party",
    description: "Celebrating my 25th birthday with close friends.",
    date: "March 2023",
    image: "/images/random-portrait.jpg",
  },
  // Tambahkan lebih banyak memories
]);
</script>

<template>
  <div class="page-container">
    <h1 class="page-title">My Memories</h1>
    <div class="memories-grid">
      <MemoryCard
        v-for="(memory, index) in memories"
        :key="index"
        :title="memory.title"
        :description="memory.description"
        :date="memory.date"
        :image="memory.image"
        :isLandscape="memory.isLandscape"
      />
    </div>
  </div>
</template>

<style scoped>
.page-container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--primary-color);
}

.memories-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
}
</style>
