<template>
    <div
        class="w-auto border-solid border-2 rounded p-1 bg-guava text-center hover:cursor-pointer"
    >
        {{ label }}
    </div>
</template>

<script setup>
const props = defineProps({ label: String });
</script>
