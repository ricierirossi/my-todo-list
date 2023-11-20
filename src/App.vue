<template>
    <div class="flex flex-col min-h-screen">
        <div class="bg-dark text-ice flex flex-col">
            <div class="flex justify-center gap-x-2 items-end mt-1 mb-4">
                <span class="material-symbols-outlined text-6xl"> lists </span>
                <span class="text-7xl">Tarefas</span>
            </div>
            <TaskForm v-if="!bottomForm.value" />
        </div>
        <div>
            <div>
                <div
                    class="flex flex-col gap-y-3 items-center mt-5 overflow-hidden sm:flex-row smaller:justify-center smaller:gap-x-5"
                >
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
        <div class="mt-auto sticky bottom-0">
            <TaskForm v-if="bottomForm.value" class="bg-dark pt-5" />
        </div>
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
    window.innerWidth <= 640
        ? (bottomForm.value = ref(true))
        : (bottomForm.value = ref(false));
};

onBeforeMount(() => {
    window.innerWidth <= 640
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
