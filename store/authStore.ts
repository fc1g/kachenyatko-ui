import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type State = {
  isLoggedIn: boolean;
};

type Action = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const useAuthStore = create<State & Action>()(
  devtools(set => ({
    isLoggedIn: true,
    setIsLoggedIn: isLoggedIn => set({ isLoggedIn }),
  })),
);
