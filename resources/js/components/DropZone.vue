<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';


let active = ref(false);
let inActiveTimeout: number | undefined = void 0

function setActive() {
    active.value = true;
    clearTimeout(inActiveTimeout)
}


function setInactive() {
    inActiveTimeout = setTimeout(() => {
        active.value = false;
    }, 50)
}


const emit = defineEmits(['files-dropped']);

function onDrop(e: DragEvent) {
    setInactive();
    emit('files-dropped', e.dataTransfer?.files ? [...e.dataTransfer.files] : []);
}

function preventDefaults(e: DragEvent) {
    e.preventDefault();
}

const events = ['dragenter', 'dragover', 'dragleave', 'drop'];

onMounted(() => {
    events.forEach((eventName) => {
        document.body.addEventListener(eventName, preventDefaults as EventListener)
    })
})

onUnmounted(() => {
    events.forEach((eventName) => {
        document.body.removeEventListener(eventName, preventDefaults as EventListener)
    })
})


</script>

<template>
    <div 
    :data-active="active" 
    @dragenter.prevent="setActive" 
    @dragover.prevent="setActive" 
    @dragleave.prevent="setInactive" 
    @drop.prevent="onDrop"

    class="w-full h-full flex-wrap flex flex-col justify-center items-center "
    >
        <slot :dropZoneActive="active"></slot>
    </div>

</template>