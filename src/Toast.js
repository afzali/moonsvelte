import { writable } from "svelte/store";

function toastSetup() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        creat: (option) => {
            let _option = {
                id: new Date().getTime().toString(),
                content: "",
                title: "",
                alertType: "",
                fillType: "",
                hasDismissButton: true,
                timeShown: 5000,
            };
            let add = Object.assign(_option, option);
            update((n) => [...n, add]);
        },
        remove: (_id) => {
            update((n) => n.filter(obj => obj.id != _id));
        }
    };
}

const Toast = toastSetup();
export default Toast;