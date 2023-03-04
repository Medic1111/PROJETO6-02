import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Login } from "../pages/Login/Login";
import { Product } from "../pages/Product/Product";
export function RoutesClient() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/products"
        element={
          <Layout>
            <Product />
          </Layout>
        }
      />
    </Routes>
  );
}
