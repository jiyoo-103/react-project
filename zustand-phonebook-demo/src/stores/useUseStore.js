import { create } from 'zustand';

/** 예시용 스토어 — 필요 없으면 파일 삭제해도 됩니다. */
export const useUseStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
