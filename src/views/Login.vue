<template>
  <div class="login-wrapper" v-cloak>
    <div class="login-box">
      <div class="welcome">
        <h2>Welcome Back</h2>
        <p>Please sign in to continue</p>
      </div>

      <form @submit.prevent="login" class="login-form" novalidate>
        <div class="input-group">
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            autocomplete="username"
            required
          />
        </div>

        <div class="input-group">
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            autocomplete="current-password"
            required
          />
        </div>

        <button type="submit" :disabled="!username || !password">
          Login
        </button>
        <p v-if="error" class="error-msg">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      this.error = "";
      if (this.username === "admin" && this.password === "1234") {
        this.$router.push("/portfolio/profile");
      } else {
        this.error = "Invalid credentials. Please try again.";
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");

:root {
  --color-primary: #00c4b4;
  --color-primary-light: rgba(0, 196, 180, 0.15);
  --color-primary-dark: #008f86;
  --color-navbar-bg: #1f2937;
  --color-navbar-text: #e0e7ff;
  --color-main-bg: #f9fafb;
  --font-family: "Inter", sans-serif;
}

.login-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-navbar-bg);
  font-family: var(--font-family);
  padding: 2rem;
  box-sizing: border-box;
  z-index: 10;
  color: var(--color-navbar-text);
  animation: fadeIn 0.8s ease forwards;
}

[v-cloak] {
  display: none;
}

.login-box {
  background: var(--color-main-bg);
  padding: 3rem;
  border-radius: 20px;
  box-shadow:
    0 12px 20px var(--color-primary-light),
    0 8px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #344054;
}

.login-box:hover {
  transform: translateY(-6px);
  box-shadow:
    0 18px 40px var(--color-primary-light),
    0 12px 30px rgba(0, 0, 0, 0.12);
}

.welcome {
  text-align: center;
  user-select: none;
  color: #344054;
}

.welcome h2 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.welcome p {
  font-size: 1.1rem;
  color: #667085;
  font-weight: 500;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.input-group {
  width: 100%;
}

input {
  width: 100%;
  padding: 0.85rem 0.75rem;
  font-size: 1.05rem;
  border: 2px solid #d0d5dd;
  border-radius: 10px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  outline: none;
  font-weight: 500;
  color: #344054;
  font-family: var(--font-family);
  background: #fff;
}

input::placeholder {
  color: #98a2b3;
  font-weight: 400;
}

input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 8px var(--color-primary-light);
}

button {
  padding: 0.85rem;
  font-size: 1.1rem;
  font-weight: 700;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.15s ease;
  user-select: none;
  box-shadow: 0 5px 15px var(--color-primary-light);
}

button:disabled {
  background-color: #a1ded9;
  cursor: not-allowed;
  box-shadow: none;
}

button:not(:disabled):hover {
  background-color: var(--color-primary-dark);
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 143, 134, 0.6);
}

.error-msg {
  color: #ef4444;
  /* a nice red from Tailwind’s palette */
  text-align: center;
  font-size: 0.95rem;
  font-weight: 700;
  margin-top: -0.5rem;
  user-select: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
