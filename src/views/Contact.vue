<template>
  <div class="contact-page" role="main" aria-labelledby="contact-heading">
    <h1 id="contact-heading">Contact Me</h1>
    <form @submit.prevent="submitForm" class="contact-form" novalidate aria-describedby="form-feedback"
      :aria-busy="submitting">
      <fieldset :disabled="submitting" class="form-group">
        <legend>Send me a message</legend>

        <label for="name">Name:</label>
        <input id="name" type="text" v-model.trim="form.name" required :aria-invalid="errors.name ? 'true' : 'false'"
          aria-describedby="name-error" @blur="validateField('name')" />
        <p v-if="errors.name" id="name-error" class="error-message" role="alert">{{ errors.name }}</p>

        <label for="email">Email:</label>
        <input id="email" type="email" v-model.trim="form.email" required
          :aria-invalid="errors.email ? 'true' : 'false'" aria-describedby="email-error"
          @blur="validateField('email')" />
        <p v-if="errors.email" id="email-error" class="error-message" role="alert">{{ errors.email }}</p>

        <label for="message">Message:</label>
        <textarea id="message" v-model.trim="form.message" required rows="5"
          :aria-invalid="errors.message ? 'true' : 'false'" aria-describedby="message-error"
          @blur="validateField('message')"></textarea>
        <p v-if="errors.message" id="message-error" class="error-message" role="alert">{{ errors.message }}</p>

        <button type="submit" :disabled="submitting || hasErrors">
          {{ submitting ? 'Sending...' : 'Send' }}
        </button>
      </fieldset>
    </form>

    <p v-if="submitted" id="form-feedback" class="success-message" role="alert" aria-live="polite" tabindex="0">
      Thank you for your message!
    </p>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      errors: {},
      submitted: false,
      submitting: false,
    };
  },
  computed: {
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    },
  },
  methods: {
    validateField(field) {
      switch (field) {
        case "name":
          this.errors.name = this.form.name ? "" : "Name is required.";
          break;
        case "email":
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!this.form.email) {
            this.errors.email = "Email is required.";
          } else if (!emailPattern.test(this.form.email)) {
            this.errors.email = "Please enter a valid email address.";
          } else {
            this.errors.email = "";
          }
          break;
        case "message":
          this.errors.message = this.form.message ? "" : "Message is required.";
          break;
      }
      if (this.errors[field] === "") {
        delete this.errors[field];
      }
    },
    validateForm() {
      this.validateField("name");
      this.validateField("email");
      this.validateField("message");
    },
    submitForm() {
      this.submitted = false;
      this.validateForm();

      if (this.hasErrors) return;

      this.submitting = true;

      // Simulate async message sending
      setTimeout(() => {
        this.submitting = false;
        this.submitted = true;

        // Reset form
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
        this.errors = {};
      }, 1000);
    },
  },
};
</script>

<style scoped>
.contact-page {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #fff;
  font-family: 'Inter', sans-serif;
  color: #333;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
  color: #00c4b4;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  border: none;
  padding: 0;
  margin: 0;
}

label {
  margin-top: 1rem;
  font-weight: 600;
  display: block;
}

input,
textarea {
  width: 100%;
  padding: 0.6rem 0.8rem;
  margin-top: 0.3rem;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #00c4b4;
  box-shadow: 0 0 5px rgba(0, 196, 180, 0.5);
}

.error-message {
  margin: 0.25rem 0 0;
  color: #d93025;
  font-size: 0.9rem;
  font-weight: 600;
}

button {
  margin-top: 1.8rem;
  padding: 0.75rem 1.2rem;
  background-color: #00c4b4;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: #a0d7cd;
  cursor: not-allowed;
}

button:not(:disabled):hover,
button:not(:disabled):focus {
  background-color: #008f86;
  outline: none;
}

.success-message {
  margin-top: 1.5rem;
  color: #1a7f37;
  font-weight: 700;
  text-align: center;
  font-size: 1.1rem;
  user-select: none;
}

@media (max-width: 480px) {
  .contact-page {
    padding: 1rem 1rem;
  }
}
</style>
