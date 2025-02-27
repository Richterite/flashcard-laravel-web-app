<script setup lang="ts">
import ThemeSwtcher from '@/components/ThemeSwtcher.vue';
import NavigationLayout from '@/Layouts/NavigationLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>

    <Head title="Dashboard" />
    <NavigationLayout>
        <template #nav-right>
            <ThemeSwtcher />
        </template>
        <template #nav-left>
            <h1 class="text-2xl font-bold">
                Flashcard
            </h1>
        </template>
        <div class="main-page">
            this is main page
        </div>
    </NavigationLayout>
</template>
