<script setup lang="ts">

</script>

<template>
        <div class="top-0 left-0 w-full p-4 border border-b-4">
            <div class="flex justify-between items-center container mx-auto">
                <div class="left-side">
                    <slot name="nav-left"></slot>
                </div>
                <div class="right-side">
                    <slot name="nav-right"></slot>
                </div>
            </div>
        </div>
    <div class="container mx-auto">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>