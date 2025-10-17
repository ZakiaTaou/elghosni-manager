import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      // --- Products ---
  products: [],
      addProduct: (product) =>
        set((state) => ({ products: [...state.products, product] })),
      updateProduct: (id, updated) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, ...updated } : p
          ),
        })),
      deleteProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),

      // --- Orders (اختياري إذا عندكها) ---
      orders: [],
      addOrder: (order) =>
        set((state) => ({ orders: [...state.orders, order] })),
      updateOrder: (id, updated) =>
        set((state) => ({
          orders: state.orders.map((o) =>
            o.id === id ? { ...o, ...updated } : o
          ),
        })),
      deleteOrder: (id) =>
        set((state) => ({
          orders: state.orders.filter((o) => o.id !== id),
        })),
    }),
    {
      name: "app-storage", // الاسم ديال localStorage key
      getStorage: () => localStorage, // التخزين فـ localStorage
    }
  )
);
