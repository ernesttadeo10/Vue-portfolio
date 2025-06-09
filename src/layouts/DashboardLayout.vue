<template>
    <div class="dashboard-wrapper">
        <!-- Navbar -->
        <header class="navbar" role="navigation" aria-label="Main navigation">
            <div class="logo">My Portfolio</div>
            <nav class="nav-links">
                <router-link to="/portfolio/profile" active-class="active-link" exact>Profile</router-link>
                <router-link to="/portfolio/showcase" active-class="active-link" exact>Portfolio Showcase</router-link>
                <router-link to="/portfolio/contact" active-class="active-link" exact>Contact</router-link>
                <router-link to="/portfolio/creative" active-class="active-link" exact>Creative</router-link>
            </nav>
            <button class="logout-button" @click="logout">Logout</button>
        </header>

        <!-- Page Content -->
        <main class="main-content" role="main">
            <router-view />
        </main>
    </div>
</template>

<script>
export default {
    name: "DashboardLayout",
    methods: {
        logout() {
            this.$router.push("/login");
        },
    },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

:root {
    --color-primary: #00c4b4;
    --color-primary-light: rgba(0, 196, 180, 0.15);
    --color-primary-dark: #008f86;
    --color-navbar-bg: #1f2937;
    --color-navbar-text: #e0e7ff;
    --color-main-bg: #f9fafb;
    --font-family: 'Inter', sans-serif;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    font-family: var(--font-family);
    margin: 0;
    padding: 0;
}

body,
html,
#app {
    height: 100%;
    width: 100%;
    overflow: hidden;
    /* Prevent body scroll */
}

.dashboard-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    /* full viewport height */
    background: var(--color-main-bg);
}

/* NAVBAR */
.navbar {
    width: 100%;
    background-color: var(--color-navbar-bg);
    color: var(--color-navbar-text);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    /* Reduced vertical padding */
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
    flex-wrap: wrap;
    gap: 1rem;
}

.logo {
    font-size: 2rem;
    font-weight: 800;
    color: var(--color-primary);
    text-shadow: 0 0 8px rgba(0, 196, 180, 0.4);
}

.nav-links {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: center;
}

.nav-links a {
    color: var(--color-navbar-text);
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.3rem 0.6rem;
    /* Slightly smaller padding */
    border-bottom: 3px solid transparent;
    transition: color 0.3s ease, border-color 0.3s ease;
}

.nav-links a:hover,
.nav-links a:focus-visible {
    color: var(--color-primary);
    border-color: var(--color-primary);
    outline: none;
}

.active-link {
    color: var(--color-primary);
    font-weight: 700;
    border-bottom: 3px solid var(--color-primary);
}

/* LOGOUT BUTTON */
.logout-button {
    padding: 0.5rem 1rem;
    /* Reduced padding */
    background-color: transparent;
    color: var(--color-navbar-text);
    border: 2px solid var(--color-primary);
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.logout-button:hover,
.logout-button:focus-visible {
    background-color: var(--color-primary);
    color: white;
    box-shadow: 0 4px 14px rgba(0, 196, 180, 0.4);
    outline: none;
}

/* MAIN CONTENT */
.main-content {
    flex-grow: 1;
    /* Take all remaining height */
    padding: 1.5rem 2rem;
    /* Reduced padding to maximize space */
    overflow-y: auto;
    /* Allow vertical scroll inside main */
    background: var(--color-main-bg);
    color: #344054;
    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.05);
    max-width: 100vw;
    /* Ensure content doesn't cause horizontal scroll */
}

/* Scrollbar */
.main-content::-webkit-scrollbar {
    width: 8px;
}

.main-content::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
    border-radius: 5px;
}

.main-content::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-primary-dark);
}

/* RESPONSIVE */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
        padding: 0.8rem 1.2rem;
        /* Reduce padding for small screens */
    }

    .nav-links {
        flex-direction: column;
        width: 100%;
    }

    .main-content {
        padding: 1rem 1.5rem;
        /* Keep padding tight on mobile */
    }
}
.showcase-page {
  padding: 2rem;
  max-width: 100%; /* allow full width inside dashboard container */
  margin: 0 auto;
  color: #344054;
  font-family: 'Inter', sans-serif;
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem; /* closer spacing */
  justify-content: center;
  margin-top: 2rem;
}



</style>
