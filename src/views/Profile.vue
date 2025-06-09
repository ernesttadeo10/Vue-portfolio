<template>
    <div class="profile-page" role="main" aria-label="Professional profile">
        <div class="header">
            <img src="/profile.jpg" alt="Profile photo" class="profile-photo" />
            <div class="header-info">
                <h1 class="profile-name">{{ name }}</h1>
                <p class="bio">{{ bio }}</p>
            </div>
        </div>

        <div class="content-grid">
            <aside class="sidebar">
                <section class="contact-info">
                    <h2>Contact</h2>
                    <p><strong>Location:</strong> {{ location }}</p>
                    <p><strong>Email:</strong> <a :href="'mailto:' + email">{{ email }}</a></p>
                    <p><strong>Phone:</strong> {{ phone }}</p>
                </section>

                <section class="skills">
                    <h2>Skills</h2>
                    <ul>
                        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
                    </ul>
                </section>

                <section class="social-links" role="list">
                    <h2>Links</h2>
                    <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank"
                        rel="noopener noreferrer" role="listitem" class="social-link">
                        {{ link.name }}
                    </a>
                </section>
            </aside>

            <main class="main">
                <section class="experience">
                    <h2>Experience</h2>
                    <div v-for="(exp, index) in experience" :key="index" class="job">
                        <h3>{{ exp.title }}</h3>
                        <p class="company">{{ exp.company }} | {{ exp.period }}</p>
                        <p class="description">{{ exp.description }}</p>
                    </div>
                </section>

                <a href="/TADEO-CV.pdf" class="btn-download" download>Download CV</a>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    name: "Profile",
    data() {
        return {
            name: "Ernest John T. Tadeo",
            bio:
                "Computer Engineering student at Polytechnic University of the Philippines, passionate about developing web applications and learning modern technologies.",
            location: "San Pedro, Laguna, Philippines",
            email: "erneest.tadeo@gmail.com",
            phone: "09694126443",
            skills: [
                "JavaScript (ES6+)",
                "Vue.js",
                "HTML5 / CSS3",
                "Basic Node.js",
                "REST APIs",
                "Git & GitHub",
                "Responsive Web Design",
                "Basic Testing Concepts",
                "TypeScript (beginner)",
                "Build Tools (Webpack / Vite)"
            ]
            ,
           experience: [
  {
    title: "Web Developer Intern",
    company: "Zoomanity Group Inc.",
    period: "April 2023 – July 2023",
    location: "Makati, NCR",
    description:
      "During my internship at Zoomanity Group Inc., I maintained and edited responsive web pages using Mobirise, applying design principles and adhering to web development best practices. I customized CSS to improve aesthetics and functionality, tracked tasks using Trello, and worked closely with a team of developers and designers to enhance the website's user interface and overall user experience."
  },
  {
    title: "Vice President, Student Council",
    company: "St. Therese of the Child Jesus School",
    period: "2016 – 2017",
    location: "San Pedro, Laguna",
    description:
      "As Vice President of the Student Council, I led and coordinated various school-wide events and initiatives. I developed strategies to boost student engagement, collaborated with other council members to ensure smooth execution of activities, and represented the student body in meetings with faculty to advocate for student interests."
  }
]
,

            socialLinks: [
                { name: "GitHub", url: "https://github.com/tadeosmith" },
                { name: "LinkedIn", url: "https://linkedin.com/in/tadeosmith" },
                { name: "Twitter", url: "https://twitter.com/tadeo_codes" },
            ],
        };
    },
};
</script>

<style scoped>
.profile-page {
    max-width: 960px;
    margin: 0 auto;
    padding: 2rem 1rem;
    font-family: "Inter", sans-serif;
    color: #333;
    font-size: 0.95rem;
    background-color: #f5f7f9;
}

.header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.profile-photo {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--color-primary, #00c4b4);
}

.header-info {
    flex: 1;
}

.profile-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary, #00c4b4);
    margin: 0 0 0.4rem;
}

.bio {
    margin: 0;
    color: #555;
    line-height: 1.5;
}

.content-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
}

.sidebar,
.main {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
}

.sidebar section {
    margin-bottom: 1.2rem;
}

.sidebar h2 {
    font-size: 1rem;
    margin-bottom: 0.4rem;
    color: var(--color-primary, #00c4b4);
    font-weight: 600;
}

.contact-info p {
    margin: 0.2rem 0;
    line-height: 1.4;
}

.contact-info a {
    color: var(--color-primary, #00c4b4);
    text-decoration: none;
}

.skills ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

.skills li {
    background-color: var(--color-primary-light, #e0f7f5);
    color: #004d47;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-weight: 500;
}

.social-links a {
    display: block;
    margin-bottom: 0.4rem;
    color: var(--color-primary, #00c4b4);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
}

.social-links a:hover {
    text-decoration: underline;
}

.main section h2 {
    font-size: 1rem;
    color: var(--color-primary, #00c4b4);
    margin-bottom: 1rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.3rem;
}

.job {
    margin-bottom: 1rem;
}

.job h3 {
    font-size: 1rem;
    margin: 0;
    font-weight: 600;
}

.company {
    font-size: 0.85rem;
    color: #666;
}

.description {
    font-size: 0.9rem;
    color: #444;
    margin-top: 0.2rem;
}

.btn-download {
    margin-top: 1.5rem;
    display: inline-block;
    background-color: var(--color-primary, #00c4b4);
    color: white;
    padding: 0.6rem 1.2rem;
    font-weight: 600;
    font-size: 0.95rem;
    border-radius: 6px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.btn-download:hover {
    background-color: var(--color-primary-dark, #008f86);
}

/* Responsive */
@media (max-width: 768px) {
    .content-grid {
        grid-template-columns: 1fr;
    }

    .header {
        flex-direction: column;
        text-align: center;
    }
}
</style>
