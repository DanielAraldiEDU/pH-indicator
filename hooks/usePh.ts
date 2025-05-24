import { create } from 'zustand';

interface UsePhProps {
  ph: number | null;
  setPh: (ph: number | null) => void;
}

export const usePh = create<UsePhProps>(set => ({
  ph: null,
  setPh: ph => set({ ph }),
}));
