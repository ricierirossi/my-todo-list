<template>
    <div v-if="tasksStore.loading" class="bg-lead">
        <font-awesome-icon icon="spinner" spin-pulse style="color: #fceaff" />
    </div>

    <div v-else-if="tasksStore.totalTasks == 0" class="bg-lead">
        <i
            class="fa-regular fa-face-laugh-wink fa-bounce"
            style="color: #fceaff"
        ></i>
    </div>

    <div class="flex justify-between">
        Correr

        <div>
            <span class="material-symbols-outlined favoritehover:cursor-pointer"
                >favorite</span
            >
            <span class="material-symbols-outlined delete hover:cursor-pointer"
                >delete</span
            >
        </div>
    </div>

    <div class="flex justify-between">
        Fazer compra

        <div>
            <span class="material-symbols-outlined favoritehover:cursor-pointer"
                >favorite</span
            >
            <span class="material-symbols-outlined delete hover:cursor-pointer"
                >delete</span
            >
        </div>
    </div>

    <!-- <div
        v-else
        v-for="task in tasksStore.tasks"
        :key="task.id"
        class="flex justify-between"
    >
        {{ task.title }}

        <div>
            <span
                class="material-symbols-outlined favoritehover:cursor-pointer"
                :class="{ 'favorite-fill': task.isFav }"
                @click="tasksStore.favTask(task.id)"
                >favorite</span
            >
            <span
                class="material-symbols-outlined delete hover:cursor-pointer"
                @click="tasksStore.deleteTask(task.id)"
                >delete</span
            >
        </div>
    </div> -->
</template>

<script setup>
import { useTasksStore } from "../stores/TasksStore";

const tasksStore = useTasksStore();
const props = defineProps({ filter: String });
</script>
