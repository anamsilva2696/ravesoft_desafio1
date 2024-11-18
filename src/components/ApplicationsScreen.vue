<template>
    <div class="application-page">
      <h1>Applications</h1>
      <!-- Table to display applications -->
      <table class="applications-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Area</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(application, index) in applications" :key="index">
            <td>{{ application.name }}</td>
            <td>{{ application.email }}</td>
            <td>{{ application.phone }}</td>
            <td>{{ application.area }}</td>
            <td>{{ application.message }}</td>
          </tr>
        </tbody>
      </table>
  
      <!-- Back Button -->
      <button class="back-button" @click="goBack">Go Back</button>
    </div>
  </template>
  
  <script>
  import apiClient from '@/axios';

  export default {
    name: "ApplicationsScreen",
    data() {
      return {
        applications: [],
      };
    },
    mounted() {
      const queryApplications = this.$route.query.applications;
  
      // Parse the applications from the query parameters
      if (queryApplications) {
        try {
          this.applications = JSON.parse(queryApplications);
        } catch (error) {
          console.error("Failed to parse applications:", error);
        }
      }
      this.fetchApplications();
    },
    methods: {
    goBack() {
        this.$router.push('/home'); // Redirect to home on successful login
    },
    async fetchApplications() {
      try {
          const userId = localStorage.getItem("user_id"); // Retrieve the user_id if stored
          const response = await apiClient.post('/applications', { user_id: userId });

          this.applications = response.data.applications;
        } catch (error) {
          console.error("Error fetching applications:", error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .application-page {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .applications-table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto 20px;
  }
  
  .applications-table th,
  .applications-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .applications-table th {
    background-color: #f2f2f2;
    text-transform: uppercase;
    font-size: 14px;
  }
  
  .back-button {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .back-button:hover {
    background-color: #0056b3;
  }
  </style>
  