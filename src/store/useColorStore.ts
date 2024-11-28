import { create } from "zustand";
import { ColorType } from "../types/colorType";

interface ColorListState {
  selectedColor: ColorType;
  colorList: ColorType[];
  setSelectedColor: (newSelectedColor: ColorType) => void;
  setAddColorList: (newColor: ColorType) => void;
  setRemoveColorList: (deleteColor: ColorType) => void;
  setChangeColorList: (changeColor: ColorType) => void;
}

const useColorListStore = create<ColorListState>()((set, get) => ({
  selectedColor: {
    id: "1",
    hexCode: "#000000",
    count: 0,
  },
  colorList: [
    {
      id: "1",
      hexCode: "#000000",
      count: 0,
    },
  ],
  setSelectedColor: (newSelectedColor) =>
    set(() => ({ selectedColor: newSelectedColor })),

  setAddColorList: (newColor) => {
    const { colorList } = get();
    set({ colorList: [...colorList, newColor], selectedColor: newColor });
  },
  setRemoveColorList: (deleteColor) => {
    const { colorList } = get();
    set({
      colorList: colorList.filter((color) => color.id !== deleteColor.id),
    });
  },
  setChangeColorList: (changeColor) => {
    const { colorList } = get();
    set({
      colorList: colorList.map((color) => {
        if (color.id === changeColor.id) {
          color.hexCode = changeColor.hexCode;
          return color;
        }
        return color;
      }),
    });
  },
}));

export default useColorListStore;
