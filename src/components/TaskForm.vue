<template>
    <div class="flex flex-col items-center gap-y-10 mb-5">
        <input
            type="text"
            placeholder="Eu preciso..."
            v-model="todo"
            class="text-center border-solid border-2 rounded text-wine bg-ice px-2 text-6xl"
        />
        <TaskButtons
            label="Adicionar"
            @click="submitTask"
            class="bg-wine text-6xl w-80 h-20"
        />
    </div>
</template>

<script setup>
import TaskButtons from "../components/TaskButtons.vue";
import { useTasksStore } from "@/stores/TasksStore";
import { ref } from "vue";

const tasksStore = useTasksStore();

const todo = ref("");

const submitTask = () => {
    if (todo.value != "") {
        tasksStore.addTask({
            title: todo.value,
            isFav: false,
            isDone: false,
            id: Date.now(),
        });
    }
    todo.value = "";
};
</script>
