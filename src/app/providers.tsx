import { makeStore } from "@/libs/redux/store";
import React from "react";
import { Provider } from "react-redux";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider store={makeStore}>{children}</Provider>;
};
