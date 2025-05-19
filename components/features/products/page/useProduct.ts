import { create } from 'zustand';

type State = {
  quantity: number;
  isExpanded: boolean;
};

type Action = {
  inc: () => void;
  dec: () => void;

  toggleExpanded: () => void;
};

export const useProductStore = create<State & Action>()(set => ({
  quantity: 1,
  isExpanded: false,
  inc: () => set(state => ({ quantity: state.quantity + 1 })),
  dec: () => set(state => ({ quantity: state.quantity - 1 })),
  toggleExpanded: () => set(state => ({ isExpanded: !state.isExpanded })),
}));
