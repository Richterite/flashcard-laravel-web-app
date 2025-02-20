<script setup lang="ts">
import {defineProps, defineEmits, ref} from 'vue'


const props = withDefaults(
    defineProps<{
        label: string,
        modelValue: string,
        type?: string,
        placeholder: string,
        errorMessage: string,
    }>(),
    {
        label: 'text',
    },
);

const emit = defineEmits(["update:modelValue"])


</script>

<template>
    <div class="mb-4">
        <label class="block text-gray-600 mb-1">
            {{ props.label }}
        </label>
        <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        class="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <p
        v-if="errorMessage"
        class="text-red-500 text-sm mt-1"
        >
            {{ props.errorMessage }}
        </p>
    </div>
</template>