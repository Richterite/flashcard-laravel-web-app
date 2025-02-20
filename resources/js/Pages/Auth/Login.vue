<script setup lang="ts">
import BaseInput from '@/Components/BaseInput.vue';
import SubmitButton from '@/Components/SubmitButton.vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const errors = ref<{
    email?: string,
    password?: string;
}>({});

const validateForm = () => {
    errors.value = {};

    if (!email.value) {
        errors.value.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email.value)){
        errors.value.email = 'Invalid Email format';
    }

    if (!password.value){
        errors.value.password = 'Password is required';
    }
}

const form = useForm({
    email: '',
    password: '',
})


const loginHandler = () => {
    form
    // validateForm();
    console.log('Email:', email.value);
    console.log('Password:', password.value);
    alert("SUCCC")
}


</script>

<template>
    <div class="flex min-h-screen items-center justify-center bg-gray-100">
        <div class="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
            <h2 class="text-2xl font-bold text-center mb-6 text-gray-700">
                LOGIN
            </h2>
            <form @submit.prevent="loginHandler">
                <BaseInput
                label="Email"
                v-model="email"
                placeholder="Enter your email"
                type="email"
                :error-message="errors.email ? errors.email : ''"
                />
                <BaseInput
                label="Password"
                v-model="password"
                placeholder="Enter your password"
                type="password"
                :error-message="errors.password ? errors.password : ''"
                />

                <SubmitButton 
                button-label="Login"
                type="submit"  
                />

            </form>
        </div>
    </div>
</template>
