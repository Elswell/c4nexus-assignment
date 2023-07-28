import { proxy } from "valtio";

export const store = proxy<{ amount: number }>({
  amount: 0,
});
