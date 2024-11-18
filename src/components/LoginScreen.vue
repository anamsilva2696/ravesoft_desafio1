<template>
    <div class="login-container">
      <div class="login-box">
        <h1>Login</h1>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email</label>
            <FormInput
              v-model="email"
              type="email"
              id="email"
              class="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <FormInput
              v-model="password"
              type="password"
              id="password"
              class="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <FormButton type="submit" title="Login" />
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
    import apiClient from '@/axios';
    import FormInput from './form/FormInput.vue';
    import FormButton from './form/buttons/FormButton.vue';

    export default {
      name: 'LoginScreen',
      components: {
      FormInput,
      FormButton,
    },
      data() {
        return {
          email: '',
          password: '',
          errorMessage: null,
        };
      },
      methods: {
        async login() {
          try {
            const response = await apiClient.post('/login', { email: this.email, password: this.password });
  
            // Ensure that `response.data` exists and has the expected structure
            if (response.data && response.data.token) {
              const { token, user } = response.data;

              // Save token and user_id in localStorage
              localStorage.setItem("token", token);
              localStorage.setItem("user_id", user.id); // Save user ID
              this.$router.push('/home'); // Redirect to home on successful login
            } else {
              throw new Error('Invalid response format');
            }
          } catch (error) {
            this.errorMessage = error.response.data.message || 'Login failed.';
          }
        },
      },
    };
</script>
    
<style scoped>
 
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of the viewport */
  background-color: #f8f9fa; /* Optional background color */
}

.login-box {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.form-group {
  margin-top: 20px;
}

.login-container h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

/*style for the error message*/
.error-message {
  display: flex;
  justify-self: flex-start;
  font-size: 12px;
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>
    