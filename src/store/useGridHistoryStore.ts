import create from "zustand";
import theme from "../styles/theme";

type GridState = {
  index: number;
  color: string;
};

interface GridStoreState {
  gridState: GridState[]; // 각 셀의 배경색 저장, 현재 그리드 상태 반영
  history: GridState[][]; // 셀의 배경색의 변화를 기록
  currentHistoryIndex: number;
  initializeGrid: (column: number, row: number) => void; // 초기화 (전부 #fff)
  updateHistory: (newGridState: GridState[]) => void; // 업데이트 할 그리드 상태
  undo: () => void;
  redo: () => void;
}

const useGridHistoryStore = create<GridStoreState>((set) => ({
  gridState: [],
  history: [[]],
  currentHistoryIndex: 0,

  initializeGrid: (column, row) => {
    const initialState = Array(column * row).fill(theme.colors.neutral.white);
    set({
      gridState: initialState,
      history: [initialState],
      currentHistoryIndex: 0,
    });
  },

  updateHistory: (newGridState) =>
    set((state) => {
      const newHistory = [...state.history, newGridState];
      return {
        gridState: newGridState,
        history: newHistory,
        currentHistoryIndex: newHistory.length - 1, // 전체 기록중 마지막
      };
    }),

  undo: () =>
    set((state) => {
      if (state.currentHistoryIndex > 0) {
        return {
          gridState: state.history[state.currentHistoryIndex - 1],
          currentHistoryIndex: state.currentHistoryIndex - 1,
        };
      }
    }),

  redo: () =>
    set((state) => {
      if (state.currentHistoryIndex < state.history.length - 1) {
        return {
          gridState: state.history[state.currentHistoryIndex + 1],
          currentHistoryIndex: state.currentHistoryIndex + 1,
        };
      }
    }),
}));

export default useGridHistoryStore;
