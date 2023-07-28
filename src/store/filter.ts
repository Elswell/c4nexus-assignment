import { proxy } from "valtio";

export const store = proxy<{ results: number }>({
  results: 0,
});
