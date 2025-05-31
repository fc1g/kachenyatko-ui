import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type State = {
  isOpen: boolean;
};

type Actions = {
  setIsOpen: (isOpen: boolean) => void;
  closeMenu: () => void;
};

export const useNavigationStore = create<State & Actions>()(
  devtools(
    set => ({
      isOpen: false,
      setIsOpen: (isOpen: boolean) => set({ isOpen }),

      closeMenu: () => set({ isOpen: false }),
    }),
    {
      name: 'NavigationStore',
    },
  ),
);
