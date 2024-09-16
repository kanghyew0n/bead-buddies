import create from "zustand";
import theme from "../styles/theme";

interface GridStoreState {
  gridState: string[]; // 각 셀의 배경색 저장, 현재 그리드 상태 반영
  history: string[][]; // 셀의 배경색의 변화를 기록
  currentIndex: number;
  initializeGrid: (column: number, row: number) => void; // 초기화 (전부 #fff)
  updateGridState: (newGridState: string[]) => void; // 업데이트 할 그리드 상태
  undo: () => void;
  redo: () => void;
}

const useGridHistoryStore = create<GridStoreState>((set) => ({
  gridState: [],
  history: [[]],
  currentIndex: 0,

  // 전부 배경색으로 초기화 해주기
  initializeGrid: (column, row) => {
    const initialState = Array(column * row).fill(theme.colors.neutral.white);
    set({
      gridState: initialState,
      history: [initialState],
      currentIndex: 0,
    });
  },

  updateGridState: (newGridState) =>
    set((state) => {
      console.log('newGridState',newGridState)
      const newHistory = [...state.history, newGridState];
      return {
        gridState: newGridState,
        history: newHistory,
        currentIndex: newHistory.length - 1, // 전체 기록중 마지막
      };
    }),

  undo: () =>
    set((state) => {
      if (state.currentIndex > 0) {
        return {
          gridState: state.history[state.currentIndex - 1],
          currentIndex: state.currentIndex - 1,
        };
      }
    }),

  redo: () =>
    set((state) => {
      if (state.currentIndex < state.history.length - 1) {
        return {
          gridState: state.history[state.currentIndex + 1],
          currentIndex: state.currentIndex + 1,
        };
      }
    }),
}));

export default useGridHistoryStore;
