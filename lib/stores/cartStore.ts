import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  img: string;
  weight?: string;
  quantity: number;
};

export type CartStore = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  total: () => number | string;
};

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const exists = state.items.find((i) => i._id === item._id);

          if (exists) {
            return {
              items: state.items.map((i) =>
                i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }

          return {
            items: [...state.items, { ...item, quantity: 1 }],
          };
        }),

      increaseQty: (id) =>
        set((state) => ({
          items: state.items.map((i) =>
            i._id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        })),

      decreaseQty: (id) =>
        set((state) => ({
          items: state.items
            .map((i) => (i._id === id ? { ...i, quantity: i.quantity - 1 } : i))
            .filter((i) => i.quantity > 0),
        })),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i._id !== id),
        })),

      clearCart: () => set({ items: [] }),

      total: () =>
        get()
          .items.reduce((sum, i) => sum + i.price * i.quantity, 0)
          .toFixed(3),
    }),
    { name: 'shop-cart' }
  )
);
