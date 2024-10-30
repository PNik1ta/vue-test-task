import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    profile: {
      second_name: '',
      name: '',
      middle_name: '',
      phone: ''
    },
  }),
  actions: {
    async fetchUserData() {
      try {
        const response = await axios.get('http://80.78.243.226/api/v1/get-user-data/');
        if (response.data.success) {
          this.profile = response.data.profile;
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  }
});
