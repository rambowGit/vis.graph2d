import { create } from 'zustand';
import type { Item } from '../types/types';

interface ItemsState {
  items: Item[];
  setItems: (items: Item[]) => void;
  reset: () => void;
}

export const useItemsStore = create<ItemsState>((set) => ({
  items: [],

  // заменяем весь список
  setItems: (items) => set({ items }),

  // сброс (возвращаем пустой массив)
  reset: () => set({ items: [] }),
}));
