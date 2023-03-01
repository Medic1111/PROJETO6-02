import React from "react";

//GL CODOU POR AQUI AQUI HAHA :)

import { Cart } from "../components/Cart/Cart";
import { Header } from "../components/Header/Header";
export function Layout({ children }) {
  return (
    <>
      <Header />
      <>{children}</>
      <Cart />
    </>
  );
}
