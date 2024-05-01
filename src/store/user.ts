import { create, SetState } from "zustand";

type UserState = {
  user: {
    id: number;
    name: string;
  };
};

export const useUserStore = create((set: SetState<UserState>) => ({
  user: {
    id: 0,
    name: "any one"
  }
}));
