<template>
  <div class="showcase-page">
    <h1>Portfolio Showcase</h1>
    <p>Explore my projects and work samples demonstrating skills and creativity.</p>

    <div class="projects">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <img :src="project.image" :alt="project.title" class="project-image" @click="openFullImage(project.image)" />
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Showcase',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Binary Calculator',
          description:
            'A calculator that performs arithmetic operations in binary number system. Perfect for learning and demonstrating binary logic.',
          image: '/project1.jpg',
        },
        {
          id: 2,
          title: 'Coffee Vendo Machine Service',
          description:
            'An automated coffee vending machine service offering a Starbucks-like experience. Features include quick beverage dispensing, customizable drinks, and seamless payment options.',
          image: '/project2.jpg',
        },
      ],
    };
  },
  methods: {
    openFullImage(imageUrl) {
      window.open(imageUrl, '_blank');
    },
  },
};
</script>

<style scoped>
.showcase-page {
  padding: 2rem 1rem 4rem;
  max-width: 100%;
  margin: 0 auto;
  color: #344054;
  font-family: 'Inter', sans-serif;
  text-align: center;
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  /* closer spacing */
  justify-content: center;
  margin-top: 2rem;
}

.project-card {
  width: 100%;
  max-width: 320px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 15px rgba(0, 196, 180, 0.1);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  margin-left: auto;
  margin-right: auto;
  background: white;
  padding: 0.8rem;
  /* slight padding reduction for tighter layout */
  box-sizing: border-box;
}


.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(0, 196, 180, 0.3);
}

.project-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  border-radius: 12px;
  user-select: none;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #00c4b4;
  margin: 0 0 0.5rem;
  user-select: text;
}

.project-description {
  font-size: 1rem;
  color: #475467;
  line-height: 1.4;
  margin: 0;
  user-select: text;
}

/* Responsive improvements */
@media (max-width: 600px) {
  .showcase-page {
    padding: 1rem;
  }

  .project-image {
    height: 180px;
  }
}
</style>
