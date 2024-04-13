import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import Search, { Dogs } from "../pages/Dogs";
import SingleDog from "../pages/SingleDog";
import SignIn from "../pages/SignIn"
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<SignIn/>} />
        <Route path="/dogs" element={<Dogs/>} />
        <Route path="/dogs/:name" element={<SingleDog/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  );
};

export default Router;