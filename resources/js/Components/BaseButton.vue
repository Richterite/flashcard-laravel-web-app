<script setup lang="ts">
import { ref } from 'vue';

interface ButtonClass {
  primary: string,
  secondary: string,
  danger: string,
  outline: string, 
  disabled: string, 
}

const buttonClasses: ButtonClass = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-gray-500 hover:bg-gray-600 text-white",
  danger: "bg-red-500 hover:bg-red-600 text-white",
  outline: "border border-gray-500 text-gray-600 hover:bg-gray-100",
  disabled: "bg-gray-400 cursor-not-allowed text-white",
}

const props = withDefaults(defineProps<{
    buttonLabel: string;
    type: 'submit'| 'reset';
    variant?: keyof ButtonClass;
    disabled?: boolean;
}>(), {
    buttonLabel: 'Submit',
    type: 'submit',
    variant: 'primary',
    disabled: false,
})


const isLoading = ref(false);
</script>

<template>
    <div>
        <button
        :type="props.type"
        :disabled="isLoading"
        :class="[
            'w-full text-white p-3 rounded-xl transition flex items-center justify-center',
            isLoading ? 'bg-gray-400 cursor-not-allowed' : buttonClasses[props.variant]
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