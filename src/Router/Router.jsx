import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import Search, { Dogs } from "../pages/Dogs";
import SingleDog from "../pages/SingleDog";
import SignIn from "../pages/SignIn"

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/sign" element={<SignIn/>} />
        <Route path="/dogs" element={<Dogs/>} />
        <Route path="/:name" element={<SingleDog/>} />
      </Route>
    </Routes>
  );
};

export default Router;