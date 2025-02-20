<script setup lang="ts">
import { ref } from 'vue';


const props = defineProps<{
    buttonLabel: string;
    type: 'submit'| 'reset';
}>();



const isLoading = ref(false);
const submitButtonHandler = () => {
    isLoading.value = true;
    setTimeout(() => {
        isLoading.value = false;
    }, 500);
}

</script>

<template>
    <div>
        <button
        v-on:click="submitButtonHandler"
        :type="props.type"
        :disabled="isLoading"
        :class="[
            'w-full text-white p-3 rounded-xl transition flex items-center justify-center',
            isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          ]"
        >
        <svg
            v-if="isLoading"
            class="animate-spin h-5 w-5 mr-2 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8H4z">
            </path>
          </svg>
          <span v-if="isLoading">Loading</span>
          <span v-else>{{ props.buttonLabel }}</span>
        </button>
        
    </div>
</template>