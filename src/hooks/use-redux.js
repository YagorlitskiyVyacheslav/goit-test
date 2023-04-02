import { createSelectorHook, useDispatch, useStore } from "react-redux";

export const useRedux = () => {
  const select = createSelectorHook();
  const dispatch = useDispatch();
  const store = useStore();

  return { select, dispatch, store };
};
