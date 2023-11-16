<template>
    <div v-if="tasksStore.loading" class="bg-lead my-10">
        <font-awesome-icon icon="spinner" spin-pulse style="color: #fceaff" />
    </div>

    <div v-else-if="tasksStore.totalTasks == 0" class="bg-lead my-10">
        <i
            class="fa-regular fa-face-laugh-wink fa-bounce text-6xl"
            style="color: #fceaff"
        ></i>
    </div>

    <!-- <div class="flex justify-between">
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
    </div> -->
    <div v-else class="flex flex-col items-center gap-y-4 mt-5">
        <div
            v-for="task in tasksStore.tasks"
            :key="task.id"
            class="flex justify-between items-center w-5/6 bg-ice border-solid border-2 rounded p-1 sm:max-w-lg"
        >
            {{ task.title }}

            <div class="flex">
                <span
                    class="material-symbols-outlined favorite hover:cursor-pointer text-red-800"
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
        </div>
    </div>
</template>

<script setup>
import { useTasksStore } from "../stores/TasksStore";

const tasksStore = useTasksStore();
const props = defineProps({ filter: String });
</script>
