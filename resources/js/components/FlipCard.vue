<script setup lang="ts">
import { ref, computed } from 'vue';

const props = withDefaults(defineProps<{
    flipTrigger?: "click" | "hover"; // Default will be 'click'
}>(), {
    flipTrigger: 'click'
});


const isFlipped = ref(false);

const toggleFlip = () => {
    if (props.flipTrigger === "click") {
        isFlipped.value = !isFlipped.value;
    }
};

const flipClass = computed(() => ({
    flipped: isFlipped.value
}));
</script>

<template>
    <div 
        class="card-container" 
        :class="{ 'hover-enabled': flipTrigger === 'hover', 'cursor-pointer': flipTrigger === 'click' }"
        @click="toggleFlip"
        @mouseenter="flipTrigger === 'hover' ? isFlipped = true : null"
        @mouseleave="flipTrigger === 'hover' ? isFlipped = false : null"
    >
        <div class="card" :class="flipClass">
            <!-- Front Side -->
            <div class="card-face front">
                <slot name="front-side"></slot>
            </div>
            
            <!-- Back Side -->
            <div class="card-face back">
                <slot name="back-side"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Perspective to enable 3D effect */
.card-container {
    perspective: 1000px;
    width: 300px;
    height: 500px;
}

/* Flip Card Styling */
.card {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s ease-in-out;
}

/* Flipped State */
.flipped {
    transform: rotateY(180deg);
}

/* Enable hover effect if flipTrigger is 'hover' */
.hover-enabled .card {
    transition: transform 0.6s ease-in-out;
}

.hover-enabled:hover .card {
    transform: rotateY(180deg);
}

/* Front & Back Faces */
.card-face {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

/* Front Side */
.front {
    background-color: #4258a6;
    color: white;
}

/* Back Side (Flipped) */
.back {
    background-color: #1e293b;
    color: white;
    transform: rotateY(180deg); 
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
}


</style>
