import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type State = {
  accessToken: string | null;
};

type Actions = {
  setAccessToken: (accessToken: string) => void;
  clearAccessToken: () => void;

  isAuthenticated: () => boolean;
};

export const useAuthStore = create<State & Actions>()(
  devtools(
    (set, get) => ({
      accessToken: null,

      setAccessToken: (accessToken: string) => set({ accessToken }),
      clearAccessToken: () => set({ accessToken: null }),

      isAuthenticated: () => !!get().accessToken,
    }),
    { name: 'AuthStore' },
  ),
);
