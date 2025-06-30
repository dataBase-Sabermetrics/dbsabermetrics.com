<script setup>
import { ref } from 'vue'
import axios from 'axios';
import MainLayout from '../layouts/MainLayout.vue';
import Popup from '../components/Popup.vue';

const API_KEY = import.meta.env.VITE_API_KEY
const ESTEBAN_URL = import.meta.env.VITE_CYBER_ESTEBAN

const open = ref(false);

const openDialog = () => {
    open.value = true;
    errorMessage.value = null;
}

const formData = ref({
    email: null,
    first: null,
    last: null,
    team: null,
    message: null,
});


const errorMessage = ref(null)
const handleSubmit = async () => {
    const axiosConfig = {
        headers: {
            "Content-Type": "text/plain",
            "X-API-KEY": `${API_KEY}`
        }
    };

    try {
        await axios.post(
            `${ESTEBAN_URL}/api`,
            `New Contact Form 🚀 \nFirst: ${formData.value.first} \nLast: ${formData.value.last} \nTeam: ${formData.value.team} \nEmail: ${formData.value.email} \nMessage: ${formData.value.message}`,
            axiosConfig
        ).catch(error => {
            if (error.message === 'Network Error' && error.response === undefined) {
                openDialog();
                return;
            }
            throw error;
        });
        
        openDialog();
    } catch (error) {
        if (error.message === 'Network Error' && error.response === undefined) {
            openDialog();
            return;
        }
        console.error('Error submitting form:', error);
    }
};
</script>

<template>
  <MainLayout>
  <Popup :open="open" @close="openDialog = false"/>
  <div class="isolate px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's Get Started!</h2>
      <div class="mt-2 text-lg flex flex-col items-center">
        <div class="text-white mb-2">
          We are actively onboarding teams to use our tool for free during the beta stage. Don't miss out, reach out!
        </div>
        <div class="flex items-center gap-2">
          <span class="text-gray-300 italic text-sm">Or join our Discord:</span>
          <a href="https://discord.gg/StuxrWGjdf" target="_blank" class="hover:opacity-80 transition-opacity">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              class="w-6 h-6 text-gray-300 hover:text-white transition-colors"
            >
              <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
              </svg>
          </a>
        </div>
      </div>
      <p v-if="errorMessage" class="mt-1 text-lg leading-8 text-red-400">{{ errorMessage }}</p>
    </div>
    <form @submit.prevent="handleSubmit" enctype="application/x-www-form-urlencoded" name="contact" id="contactForm" method="post" data-netlify="true" data-netlify-honeypot="bot-field" class="mx-auto mt-8 max-w-xl sm:mt-10">
      <input type="hidden" name="form-name" value="contact" />
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first" class="block text-sm font-semibold leading-6 text-gray-300">First</label>
          <div class="mt-2.5">
            <input v-model="formData.first" type="text" name="first" id="first" autocomplete="given-name" class="block w-full bg-black rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="last" class="block text-sm font-semibold leading-6 text-gray-300">Last</label>
          <div class="mt-2.5">
            <input v-model="formData.last" type="text" name="last" id="last" autocomplete="family-name" class="block bg-black w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="team" class="block text-sm font-semibold leading-6 text-gray-300">Team</label>
          <div class="mt-2.5">
            <input v-model="formData.team" type="text" name="team" id="team" autocomplete="organization" class="block bg-black w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-300">Email</label>
          <div class="mt-2.5">
            <input v-model="formData.email" type="email" name="email" id="email" autocomplete="email" class="block bg-black w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-300">Message</label>
          <div class="mt-2.5">
            <textarea v-model="formData.message" name="message" id="message" rows="4" class="block bg-black w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
      <div class="mt-10">
        <button type="submit" id="formSubmit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
      </div>
    </form>
  </div>
  </MainLayout>
</template>
