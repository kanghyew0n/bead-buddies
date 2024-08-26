import { create } from "zustand";

interface GridSizeState {
  column: number;
  row: number;
  setColumn: (newCol: number) => void;
  setRow: (newRow: number) => void;
}

const useGridSizeStore = create<GridSizeState>()((set) => ({
  column: 0,
  row: 0,
  setColumn: (newCol) => set(() => ({ column: newCol })),
  setRow: (newRow) => set(() => ({ row: newRow })),
}));

export default useGridSizeStore;
