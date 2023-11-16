<template>
    <div class="flex flex-col min-h-screen">
        <div class="bg-dark text-ice flex flex-col gap-y-4">
            <div class="flex justify-center gap-x-2 items-end mt-1">
                <span class="material-symbols-outlined text-6xl"> lists </span>
                <span class="text-7xl">Tarefas</span>
            </div>
            <TaskForm v-if="!bottomForm.value" />
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

        <footer class="mt-auto text-center w-full py-3">
            <span>Desenvolvido por </span>
            <a href="https://github.com/ricierirossi" class="text-pineapple"
                >ricieri</a
            >
        </footer>
        <TaskForm v-if="bottomForm.value" />
    </div>
</template>

<script setup>
import { ref, onBeforeUnmount, onMounted, onBeforeMount } from "vue";
import TaskForm from "./components/TaskForm.vue";
import TaskButtons from "./components/TaskButtons.vue";
import TaskCards from "./components/TaskCards.vue";
import { useTasksStore } from "@/stores/TasksStore";

const tasksStore = useTasksStore();
tasksStore.getTasks();

const filter = ref("all");
const windowWidth = ref(window.innerWidth);
const bottomForm = ref("");

const handleResize = () => {
    windowWidth.value = window.innerWidth;
    window.innerWidth <= 420
        ? (bottomForm.value = ref(true))
        : (bottomForm.value = ref(false));
};

onBeforeMount(() => {
    window.innerWidth <= 420
        ? (bottomForm.value = ref(true))
        : (bottomForm.value = ref(false));
});

onMounted(() => {
    window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
});
</script>
