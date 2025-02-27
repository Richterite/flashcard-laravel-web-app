<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { Button } from './ui/button';
import {Icon} from '@iconify/vue'


const mode = useColorMode()
const onClickHandler = () => {
    mode.value = mode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
    <Button variant="outline" @click="onClickHandler">
        <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">
            Toggle Theme
        </span>
    </Button>
</template>