import { create } from "zustand";

export const useUserStore = create((set) => ({
  username: "",
  pfp: "",
  logIn: (new_username, new_pfp) =>
    set({ username: new_username, pfp: new_pfp }),
  logOut: () => set({ username: "", pfp: "" }),
}));
