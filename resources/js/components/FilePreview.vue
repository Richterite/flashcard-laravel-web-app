<script setup lang="ts">
import { UploadableFileInterface } from '@/compositions/file-list';
import {Icon} from '@iconify/vue'
import Button from './ui/button/Button.vue';



const {file, tag = 'li'} = defineProps<{
    file : UploadableFileInterface,
    tag?: string
}>();

const emit = defineEmits(['remove'])

</script>

<template>
    <component :is="tag" class="flex border rounded-xl items-center p-2">
        <Icon  icon="radix-icons:file" class="h-[1rem] w-[1rem] mr-2" />
        <span class="max-w-60 truncate text-xs">{{ file.file.name }}</span>
        <button variant="outline" size="icon" @click="$emit('remove', file)" aria-label="Remove">
            <Icon icon="radix-icons:cross-2" class="h-[1rem] w-[1rem] ml-2"/>
        </button>
    </component>

</template>