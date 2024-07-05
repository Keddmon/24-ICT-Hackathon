import React from "react";
import { Route, Routes } from 'react-router-dom';

import { Date, Main, Warnings } from "./pages";
import { MainLayout } from "../Layout";

const Router = () => {

    return (
        <MainLayout>
            <Routes>
                <Route
                    path="/"
                    element={<Main />}
                />
                <Route
                    path="/warnings/:id"
                    element={<Warnings />}
                />
                <Route
                    path="/date"
                    element={<Date />}
                />
            </Routes>
        </MainLayout>
    )
}

export default Router;