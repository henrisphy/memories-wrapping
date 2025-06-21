<script setup>
import MemoryCard from "@/components/MemoryCard.vue";
import { ref } from "vue";

const friendsMemories = ref([
  {
    title: "Wisuda Kuliah",
    description: "Akhirnya lulus bersama teman-teman seperjuangan.",
    date: "June 2023",
    image: "/images/random-portrait.jpg",
    isLandscape: true,
  },
  {
    title: "Camping di Gunung",
    description: "Perjalanan mendaki dan camping pertama kami bersama.",
    date: "October 2022",
    image: "/images/random-portrait.jpg",
  },
  {
    title: "Nongkrong Akhir Pekan",
    description: "Kopi dan obrolan panjang di kafe favorit kami.",
    date: "March 2023",
    image: "/images/random-portrait.jpg",
  },
  {
    title: "Kelas Matkul Tersusah",
    description: "Akhirnya lulus bersama teman-teman seperjuangan.",
    date: "June 2023",
    image: "/images/random-portrait.jpg",
    isLandscape: true,
  },
  {
    title: "Trip ke Solo",
    description: "Perjalanan riding menggunakan motor bersama.",
    date: "October 2022",
    image: "/images/random-portrait.jpg",
  },
  {
    title: "Nonton Bola Bareng",
    description: "Kopi dan obrolan panjang di basecamp favorit kami.",
    date: "March 2023",
    image: "/images/random-portrait.jpg",
  },
]);
</script>

<template>
  <div class="page-container">
    <h1 class="page-title">Friends Memories</h1>
    <p class="page-subtitle">
      Momen tak terlupakan bersama sahabat-sahabat terbaik
    </p>

    <div class="memories-grid">
      <MemoryCard
        v-for="(memory, index) in friendsMemories"
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
/* Gunakan style yang sama dengan Family.vue */
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
