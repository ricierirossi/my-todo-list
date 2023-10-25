import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasksStore", {
    state: () => ({
        tasks: [],
    }),
    actions: {
        async getTasks() {
            await fetch("http://localhost:3000/tasks")
                .then((resp) => resp.json())
                .then((data) => (this.tasks = data));
        },
        async addTask(task) {
            this.tasks.push(task);
            await fetch("http://localhost:3000/tasks", {
                method: "POST",
                body: JSON.stringify(task),
                headers: { "Content-Type": "application/json" },
            });
        },
        async favTask(id) {
            const task = this.tasks.find((t) => t.id === id);
            task.isFav = !task.isFav;

            await fetch("http://localhost:3000/tasks/" + id, {
                method: "PATCH",
                body: JSON.stringify({ isFav: task.isFav }),
                headers: { "Content-Type": "application/json" },
            });
        },
        async deleteTask(id) {
            const task = this.tasks.find((t) => t.id === id);
            await fetch("http://localhost:3000/tasks/" + id, {
                method: "DELETE",
            });
        },
    },
    getters: {
        totalTasks() {
            return this.tasks.length;
        },
        totalFavsTasks() {
            return this.tasks.reduce((count, task) => {
                return task.isFav ? count + 1 : count;
            }, 0);
        },
        filterFavs() {
            return this.tasks.filter((task) => task.isFav);
        },
    },
});
