<script setup>
import MemoryCard from "@/components/MemoryCard.vue";
import { ref } from "vue";

const personalMemories = ref([
  {
    title: "Awal Perjalanan",
    description: "Foto pertama saat memulai hobi dokumentasi kenangan",
    date: "Januari 2015",
    image: "/images/random-portrait.jpg",
    isLandscape: true,
  },
  {
    title: "Pencapaian Besar",
    description: "Momen ketika memenangkan lomba fotografi pertama",
    date: "Maret 2017",
    image: "/images/random-portrait.jpg",
    isLandscape: true,
  },
  {
    title: "Petualangan Solo",
    description: "Perjalanan sendiri menjelajahi tempat baru",
    date: "Agustus 2018",
    image: "/images/random-portrait.jpg",
    isLandscape: true,
  },
  {
    title: "Belajar Skill Baru",
    description: "Saat pertama kali belajar editing video profesional",
    date: "November 2019",
    image: "/images/random-portrait.jpg",
    isLandscape: true,
  },
  {
    title: "Proyek Kolaborasi",
    description: "Bekerja sama dengan kreator lain",
    date: "Juni 2020",
    image: "/images/random-portrait.jpg",
    isLandscape: true,
  },
  {
    title: "Momen Terkini",
    description: "Aktivitas terbaru dalam dokumentasi kenangan",
    date: "Desember 2023",
    image: "/images/random-portrait.jpg",
    isLandscape: true,
  },
]);

const bio = ref({
  name: "Alexandra W.",
  role: "Memory Collector & Storyteller",
  description: "Saya sangat senang untuk mengabadikan memori bersama.",
  stats: [
    { number: "20", label: "Tahun" },
    { number: "Navy", label: "Warna Favorit" },
    { number: "23", label: "Nomor Favorit" },
  ],
});
</script>

<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Tentang Saya</h1>
        <p>Perjalanan mengumpulkan kenangan satu per satu</p>
      </div>
      <div class="hero-image">
        <img src="/images/transparent-background.png" alt="Profile Hero" />
      </div>
    </section>

    <!-- Bio Section -->
    <section class="bio-section">
      <div class="bio-content">
        <h2>{{ bio.name }}</h2>
        <h3>{{ bio.role }}</h3>
        <p>{{ bio.description }}</p>

        <div class="stats-grid">
          <div
            v-for="(stat, index) in bio.stats"
            :key="index"
            class="stat-item"
          >
            <span class="number">{{ stat.number }}</span>
            <span class="label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
      <div class="bio-image">
        <img src="/images/transparent-background.png" alt="Profile Closeup" />
      </div>
    </section>

    <!-- Memories Timeline -->
    <section class="timeline-section">
      <h2>Linimasa Kenangan</h2>
      <p>Momen-momen penting dalam perjalanan saya</p>

      <div class="timeline-container">
        <div
          v-for="(memory, index) in personalMemories"
          :key="index"
          class="timeline-item"
          :class="{ highlight: memory.highlight }"
        >
          <div class="timeline-content">
            <MemoryCard
              :title="memory.title"
              :description="memory.description"
              :date="memory.date"
              :image="memory.image"
              :isLandscape="memory.isLandscape"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="philosophy-section">
      <h2>Filosofi Saya</h2>
      <div class="philosophy-content">
        <blockquote>
          Kenangan adalah harta yang tidak bisa dicuri, tidak bisa hilang, dan
          akan selalu menghangatkan hati di saat-saat sulit.
        </blockquote>
        <p>
          Saya percaya setiap momen, baik besar maupun kecil, layak untuk
          diingat. Foto-foto ini bukan sekadar gambar, tapi potongan kehidupan
          yang suatu hari akan menjadi sejarah pribadi yang berharga.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Hero Section */
.hero-section {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-bottom: 4rem;
}

.hero-content {
  text-align: center;
  padding: 2rem 1rem;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.hero-content p {
  font-size: 1.2rem;
  color: #666;
}

.hero-image {
  width: 100%;
  max-width: 600px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* Bio Section */
.bio-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 5rem;
  padding: 2rem 0;
  background-color: rgba(66, 185, 131, 0.05);
  border-radius: 15px;
}

.bio-content {
  width: 90%;
  max-width: 600px;
}

.bio-content h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.bio-content h3 {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--secondary-color);
  font-weight: 500;
}

.bio-content p {
  margin-bottom: 2rem;
  line-height: 1.7;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.stat-item .number {
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 0.3rem;
}

.stat-item .label {
  font-size: 0.9rem;
  color: #666;
}

.bio-image {
  width: 90%;
  max-width: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.bio-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* Timeline Section */
.timeline-section {
  margin-bottom: 5rem;
  text-align: center;
}

.timeline-section h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.timeline-section p {
  margin-bottom: 3rem;
  color: #666;
}

.timeline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.timeline-item {
  position: relative;
  width: 100%;
  max-width: 800px;
}

.timeline-item.highlight .timeline-content {
  align-items: left;
  transform: scale(1.03);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.timeline-content {
  align-items: left;
  transition: all 0.3s ease;
}

.timeline-date {
  align-items: left;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: calc(100% + 2rem);
  font-weight: 700;
  color: var(--secondary-color);
  white-space: nowrap;
}

/* Philosophy Section */
.philosophy-section {
  max-width: 800px;
  margin: 0 auto 5rem;
  text-align: center;
}

.philosophy-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--primary-color);
}

.philosophy-content blockquote {
  font-size: 1.5rem;
  font-style: italic;
  color: var(--primary-color);
  margin-bottom: 2rem;
  line-height: 1.6;
  position: relative;
}

.philosophy-content blockquote::before,
.philosophy-content blockquote::after {
  content: '"';
  font-size: 2rem;
  color: var(--secondary-color);
  opacity: 0.5;
}

.philosophy-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
}

/* Responsive Styles */
@media (min-width: 768px) {
  .hero-section {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    margin-bottom: 6rem;
  }

  .hero-content {
    text-align: left;
    flex: 1;
    padding-left: 2rem;
  }

  .hero-image {
    flex: 1;
  }

  .bio-section {
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem;
  }

  .bio-content {
    flex: 1;
  }

  .bio-image {
    flex: 1;
  }

  .timeline-item:nth-child(even) {
    align-self: flex-end;
  }

  .timeline-item:nth-child(even) .timeline-date {
    right: auto;
    left: calc(100% + 2rem);
  }
}

@media (min-width: 1024px) {
  .hero-content h1 {
    font-size: 3rem;
  }

  .bio-content h2 {
    font-size: 2.5rem;
  }
}
</style>
