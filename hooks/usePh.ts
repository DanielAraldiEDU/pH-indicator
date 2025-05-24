import { ColorValue } from 'react-native';
import { create } from 'zustand';

interface UsePhProps {
  ph: number | null;
  phColor?: string;
  setPh: (ph: number | null) => void;
  setPhColor: (phColor?: string) => void;
}

export const usePh = create<UsePhProps>(set => ({
  ph: null,
  phColor: undefined,
  setPh: ph => set({ ph }),
  setPhColor: phColor => set({ phColor }),
}));
