<template>
    <div class="flex flex-col gap-y-4 pb-4 items-center">
        <input
            type="text"
            placeholder="Eu preciso..."
            v-model="todo"
            class="border-solid border-2 rounded text-wine bg-ice w-72 text-center"
        />
        <TaskButtons
            label="Adicionar"
            @click="submitTask"
            class="bg-pineapple w-44"
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
