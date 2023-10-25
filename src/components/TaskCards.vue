<template>
    <div
        v-for="task in tasksStore.tasks"
        :key="task.id"
        class="w-96 h-auto flex justify-between items-center bg-ice border-solid border-2 rounded p-1"
    >
        {{ task.title }}
        <div class="flex gap-1">
            <span
                class="material-symbols-outlined favorite text-red-600 hover:cursor-pointer"
                :class="{ 'favorite-fill': task.isFav }"
                @click="tasksStore.favTask(task.id)"
                >favorite</span
            >
            <span
                class="material-symbols-outlined delete text-gray-500 hover:cursor-pointer"
                @click="tasksStore.deleteTask(task.id)"
                >delete</span
            >
        </div>
    </div>
</template>

<script setup>
import { useTasksStore } from "../stores/TasksStore";

const tasksStore = useTasksStore();
const props = defineProps({ filter: String });
</script>

<style>
.favorite-fill {
    font-variation-settings: "FILL" 1;
}
</style>
