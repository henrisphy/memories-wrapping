<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  isLandscape: {
    type: Boolean,
    default: false,
  },
});

const imageError = (event) => {
  // Jika gambar gagal dimuat, ganti dengan placeholder
  event.target.src = getPlaceholderImage();
};

const getPlaceholderImage = () => {
  return isLandscape
    ? "https://placehold.co/600x400?text=Landscape+Memory"
    : "https://placehold.co/400x600?text=Portrait+Memory";
};
</script>

<template>
  <div class="memory-card" :class="{ landscape: isLandscape }">
    <div class="card-image">
      <img
        :src="image || getPlaceholderImage()"
        :alt="title"
        loading="lazy"
        @error="imageError"
      />
    </div>
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <span class="date">{{ date }}</span>
    </div>
  </div>
</template>

<style scoped>
.memory-card {
  background: var(--card-bg);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%;
  max-width: 320px;
  margin: 1rem;
  position: relative;
}

.memory-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.memory-card.landscape {
  max-width: 600px;
  display: flex;
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.memory-card.landscape .card-image {
  width: 50%;
  height: auto;
}

.memory-card.landscape .card-content {
  width: 50%;
  padding: 1.5rem;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
  transition: opacity 0.3s;
}

.memory-card:hover .card-image img {
  opacity: 1;
}

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.card-content p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}

.date {
  font-size: 0.8rem;
  color: #999;
  font-style: italic;
}

@media (max-width: 768px) {
  .memory-card.landscape {
    flex-direction: column;
    max-width: 320px;
  }

  .memory-card.landscape .card-image,
  .memory-card.landscape .card-content {
    width: 100%;
  }
}
</style>
