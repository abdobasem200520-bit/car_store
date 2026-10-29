
import { create } from "zustand";

export const useAuthstore = create((set) => ({
    tokan: null,
    isAuth: false,

    login: (tokan, isAuth) => set(() => ({
        tokan: tokan,
        isAuth: isAuth
    })),
    logout: () => set(() => ({ tokan: null, isauthenicated: false }))
}));
