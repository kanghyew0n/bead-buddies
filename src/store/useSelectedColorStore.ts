import { create } from "zustand";

interface SelectedColorState {
  color: string;
  setColor: (newColor: string) => void;
}

const useSelectedColorStore = create<SelectedColorState>()((set) => ({
  color: '#000000',
  setColor: (newColor) => set(() => ({ color: newColor })),
}));

export default useSelectedColorStore;
