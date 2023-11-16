<template>
    <div class="flex gap-x-5">
        <input
            type="text"
            placeholder="Eu preciso..."
            v-model="todo"
            class="text-center border-solid border-2 rounded text-wine bg-ice px-2"
        />
        <TaskButtons label="Adicionar" @click="submitTask" class="bg-wine" />
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
