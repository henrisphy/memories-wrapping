<script setup>
import MemoryCard from "@/components/MemoryCard.vue";
import { ref } from "vue";

const familyMemories = ref([
  {
    title: "Family Reunion 2023",
    description:
      "Kumpul keluarga besar di rumah nenek setelah 3 tahun tidak bertemu.",
    date: "January 2023",
    image: "/images/random-portrait.jpg",
    isLandscape: true,
  },
  {
    title: "Liburan ke Bali",
    description: "Liburan akhir tahun bersama orang tua dan adik.",
    date: "December 2022",
    image: "/images/random-portrait.jpg",
  },
  {
    title: "Ulang Tahun Ibu",
    description: "Perayaan ulang tahun ibu yang ke-55 di restoran favoritnya.",
    date: "August 2022",
    image: "/images/random-portrait.jpg",
  },
]);
</script>

<template>
  <div class="page-container">
    <h1 class="page-title">Family Memories</h1>
    <p class="page-subtitle">Kenangan indah bersama keluarga tercinta</p>

    <div class="memories-grid">
      <MemoryCard
        v-for="(memory, index) in familyMemories"
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
  margin-bottom: 0.5rem;
  text-align: center;
  color: var(--primary-color);
}

.page-subtitle {
  text-align: center;
  margin-bottom: 2rem;
  color: #666;
  font-size: 1.1rem;
}

.memories-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }
}
</style>
