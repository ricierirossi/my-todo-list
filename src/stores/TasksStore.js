import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasksStore", {
    state: () => ({
        tasks: [],
        loading: false,
    }),
    actions: {
        async getTasks() {
            this.loading = true;
            // await fetch("http://localhost:3000/tasks")
            await fetch(
                "https://my-todo-list-7555f-default-rtdb.firebaseio.com/tasks.json"
            )
                .then((resp) => resp.json())
                // .then((data) => (this.tasks = data));
                .then((data) => {
                    this.tasks = Object.keys(data).map((key) => data[key]);
                });
            this.loading = false;
        },
        async addTask(task) {
            this.tasks.push(task);
            // await fetch("http://localhost:3000/tasks", {
            await fetch(
                `https://my-todo-list-7555f-default-rtdb.firebaseio.com/tasks.json`,
                {
                    method: "POST",
                    body: JSON.stringify(task),
                    headers: { "Content-Type": "application/json" },
                }
            );
        },
        async favTask(id) {
            const task = this.tasks.find((t) => t.id === id);
            task.isFav = !task.isFav;
            console.log(Object.keys(data));
            await fetch(
                `https://my-todo-list-7555f-default-rtdb.firebaseio.com/tasks/${name}.json`,
                {
                    method: "PATCH",
                    body: JSON.stringify({ isFav: task.isFav }),
                    headers: { "Content-Type": "application/json" },
                }
            );
        },
        // async deleteTask(id) {
        //     this.tasks = this.tasks.filter((t) => {
        //         return t.id != id;
        //     });
        //     await fetch(`http://localhost:3000/tasks/${id}`, {
        //         method: "DELETE",
        //     });
        // },
        // filterAll() {
        //     this.getTasks();
        // },
        // filterFavs() {
        //     this.tasks = this.tasks.filter((t) => t.isFav);
        // },
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
    },
});
