<template>
    <div class="h-screen">
        <div class="flex flex-col gap-y-10 bg-dark text-ice py-5">
            <div class="flex justify-center items-baseline gap-x-10">
                <span class="material-symbols-outlined text-130"> lists </span>
                <span class="text-180 text-ice sm:text-red-600">Tarefas</span>
            </div>
            <TaskForm />
        </div>
        <div>
            <div>
                <div class="flex justify-center items-center gap-x-5 mt-5">
                    <div v-if="filter == 'all'">
                        Você possui {{ tasksStore.totalTasks }} tarefa(s)
                    </div>
                    <div v-else>
                        Você possui {{ tasksStore.totalFavsTasks }} tarefa(s)
                        favoritas
                    </div>
                    <div class="flex justify-center gap-x-3">
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
                <TaskCards :filter="filter" class="flex justify-center" />
            </div>
        </div>
        <footer class="relative top-full text-center py-5">
            <span>Desenvolvido por </span>
            <a href="https://github.com/ricierirossi" class="text-pineapple"
                >ricieri</a
            >
        </footer>
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
