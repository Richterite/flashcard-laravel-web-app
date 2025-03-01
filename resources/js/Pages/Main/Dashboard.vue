<script setup lang="ts">
import FlipCard from '@/components/FlipCard.vue';
import ThemeSwtcher from '@/components/ThemeSwtcher.vue';
import NavigationLayout from '@/Layouts/NavigationLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref, useId } from 'vue';
import DashboardDropZone from './partials/DashboardDropZone.vue';
import { Button } from '@/components/ui/button';




const files = ref();
const timeLimit = ref<number>(0);


const id = useId()
const fileChangeHandler = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files){
        files.value = target.files[0];
    }
}

</script>

<template>

    <Head title="Dashboard" />
    <NavigationLayout>
        <template #nav-right>
            <ThemeSwtcher />
        </template>
        <template #nav-left>
            <h1 class="text-2xl font-bold">
                Flascard
            </h1>
        </template>
        <template #default>
            <div class="main-page">
                <div class="m-16 grid grid-cols-3">
                    <FlipCard flip-trigger="hover">
                        <template #front-side>
                            <p class="text-5xl font-bold text-center">
                                自然
                            </p>
                        </template>
                        <template #back-side>
                            <p class="text-3xl font-bold text-center">(n.) natural</p>
                            <p class="text-lg font-medium text-center">Something unflods when you leave it alone</p>
                        </template>
                    </FlipCard>
                    <div class="ml-10 col-span-2">
                        <h1 class="text-6xl font-bold">Turn your sheets into Flashcard!</h1>
                        <p class="text-2xl font-medium my-10">
                            Improve your learning experience by turning your material sheets into your own flashcard!
                        </p>
                        <div class="mt-14 flex flex-col gap-3">
                            <!-- <h1 class="font-bold text-5xl">Design Here:</h1> -->
                            <form class="max-w-full">
                                <div class="grid  items-center gap-4">
                                    <h1 class="font-bold text-2xl">Generate your Flashcard!</h1>
                                    <DashboardDropZone />
                                    <!-- <Input :id="id" class="dark:file:text-white file:text-black " type="file" @change="fileChangeHandler" /> -->
                                    <Button type="submit" variant="destructive" class="ml-auto bg-primary text-primary-foreground shadow hover:bg-primary/90 ">
                                        Generate
                                    </Button>
                                </div>
     
                            </form>

                        </div>
                    </div>

                </div>


             </div>
        </template>

    </NavigationLayout>
</template>
