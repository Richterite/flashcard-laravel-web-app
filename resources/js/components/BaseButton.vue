<script setup lang="ts">
import { ref } from 'vue';
import { Loader2 } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';

interface ButtonClass {
  primary: string,
  secondary: string,
  danger: string,
  outline: string, 
  disabled: string, 
}




const props = withDefaults(defineProps<{
    buttonLabel: string;
    type: 'submit' | 'button' | 'reset';
    variant?: InstanceType<typeof Button>["$props"]['variant'];
    disabled?: boolean;
}>(), {
    buttonLabel: 'Submit',
    type: 'submit',
    variant: 'default',
    disabled: false,
})


const isLoading = ref(false);
</script>

<template>
    <div>
        <Button
        :type="props.type"
        :disabled="isLoading"
        class="w-full text-white p-3 rounded-xl transition flex items-center justify-center"
        >
        <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin"/>
        
          <span v-if="isLoading">Loading</span>
          <span v-else>{{ props.buttonLabel }}</span>
        </Button>
        
    </div>
</template>