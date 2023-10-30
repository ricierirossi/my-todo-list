<template>
    <div>
        <div class="h-auto flex flex-col gap-y-5 bg-dark text-ice py-5">
            <div class="flex justify-center gap-1 text-3xl bg-dark">
                <span class="material-symbols-outlined text-3xl bg-dark">
                    lists
                </span>
                Tarefas
            </div>
            <TaskForm class="bg-dark" />
        </div>
        <div class="flex justify-center pt-3 bg-lead h-96">
            <div class="flex flex-col gap-3 items-center w-96 bg-lead">
                <div class="flex justify-between items-center w-full bg-lead">
                    <div class="text-ice bg-lead" v-if="filter == 'all'">
                        Você possui {{ tasksStore.totalTasks }} tarefa(s)
                    </div>
                    <div class="text-ice bg-lead" v-else>
                        Você possui {{ tasksStore.totalFavsTasks }} tarefa(s)
                        favoritas
                    </div>
                    <div class="flex gap-2 self-end bg-lead">
                        <TaskButtons
                            label="Todas"
                            @click="[(filter = 'all'), tasksStore.filterAll()]"
                        />
                        <TaskButtons
                            label="Favoritas"
                            @click="
                                [(filter = 'favs'), tasksStore.filterFavs()]
                            "
                        />
                    </div>
                </div>
                <TaskCards :filter="filter" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import TaskForm from "./components/TaskForm.vue";
import TaskButtons from "./components/TaskButtons.vue";
import TaskCards from "./components/TaskCards.vue";
import { useTasksStore } from "@/stores/TasksStore";

const tasksStore = useTasksStore();
tasksStore.getTasks();

const filter = ref("all");
</script>
