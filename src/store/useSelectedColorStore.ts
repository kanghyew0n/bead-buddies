import { create } from "zustand";
import { ColorType } from "../utils/color-type";

interface SelectedColorState {
  selectedColor: ColorType;
  setSelectedColor: (newSelectedColor: ColorType) => void;
}

const useSelectedColorStore = create<SelectedColorState>()((set) => ({
  selectedColor: {
    id: "1",
    hexCode: "#000000",
    count: 0,
  },
  setSelectedColor: (newSelectedColor) => set(() => ({ selectedColor: newSelectedColor })),
}));

export default useSelectedColorStore;
