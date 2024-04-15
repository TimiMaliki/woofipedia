import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import AuthLayout from "../AuthLayout/Auth";
import Home from "../pages/Home";
import { Dogs } from "../pages/Dogs";
import SingleDog from "../pages/SingleDog";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";
import LogIn from "../ AuthPages/LogIn";
import SignUP from "../ AuthPages/SignUP";

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/dogs/:name" element={<SingleDog />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="" element={<AuthLayout />}>
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUP />} />
      </Route>

    </Routes>
  );
};

export default Router;
