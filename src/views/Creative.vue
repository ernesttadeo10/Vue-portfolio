<template>
    <div class="creative-page" role="main" aria-labelledby="creative-heading">
        <h1 id="creative-heading">Creative Page</h1>
        <p>Welcome to my creative space! Here, I share some of the hobbies and interests that inspire me outside of
            academics.</p>
        <div class="hobbies-cards" role="list">
            <div class="hobby-card" v-for="(hobby, index) in hobbies" :key="index" role="listitem" tabindex="0">
                <template v-if="hobby.image">
                    <img :src="hobby.image" :alt="hobby.name + ' photo'" class="hobby-image" loading="lazy" />
                </template>
                <template v-else>
                    <i :class="hobby.icon" class="hobby-icon" aria-hidden="true"></i>
                </template>
                <h3 class="hobby-name">{{ hobby.name }}</h3>
                <p class="hobby-description">{{ hobby.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Creative",
    data() {
        return {
            hobbies: [
                {
                    name: "Photography",
                    description: "Capturing moments with my camera.",
                    icon: "fas fa-camera-retro",
                    image: "/photog.jpg",
                },
                {
                    name: "Volleyball",
                    description: "Enjoy playing volleyball with friends and improving teamwork.",
                    icon: "fas fa-volleyball-ball",
                    image: "/vball.JPG",
                },
                {
                    name: "Reading",
                    description: "Diving into books to explore new worlds and ideas.",
                    icon: "fas fa-book",
                    image: "/book.jpg",
                },
            ],
        };
    },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

.creative-page {
    padding: 3rem 2rem;
    max-width: 700px;
    margin: 0 auto;
    background-color: #f9fafb;
    border-radius: 16px;
    text-align: center;
    font-family: "Inter", sans-serif;
    color: #344054;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

h1 {
    color: #00c4b4;
    margin-bottom: 0.5rem;
}

p {
    font-size: 1.1rem;
    color: #667085;
    margin-bottom: 2rem;
}

.hobbies-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    justify-items: center;
}

.hobby-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    padding: 1.5rem 1.2rem;
    width: 100%;
    max-width: 220px;
    user-select: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    outline-offset: 4px;
}

.hobby-card:hover,
.hobby-card:focus {
    transform: translateY(-6px);
    box-shadow: 0 14px 35px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    outline: none;
}

.hobby-image {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;
}

.hobby-card:hover .hobby-image,
.hobby-card:focus .hobby-image {
    transform: scale(1.05);
}

.hobby-icon {
    font-size: 3rem;
    color: #1abc9c;
    margin-bottom: 1rem;
}

.hobby-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: #00c4b4;
    margin-bottom: 0.5rem;
}

.hobby-description {
    font-size: 1rem;
    color: #475467;
    line-height: 1.4;
    margin: 0;
}

/* Responsive */
@media (max-width: 480px) {
    .creative-page {
        padding: 2rem 1rem;
    }

    .hobby-card {
        max-width: 100%;
    }

    .hobby-image {
        height: 120px;
    }
}
</style>
