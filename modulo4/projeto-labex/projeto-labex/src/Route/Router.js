import React from 'react';
import HomePage from '../Pages/HomePage';
import AdminHomePage from '../Pages/AdminHomePage';
import ApplicationFormPage from '../Pages/ApplicationFormPage';
import CreateTripPage from '../Pages/CreateTripPage';
import ListTripsPage from '../Pages/ListTripsPage';
import LoginPage from '../Pages/LoginPage';
import TripDetailsPage from '../Pages/TripDetailsPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>
                <Route exact path={"/trips/list"}>
                    <ListTripsPage />
                </Route>
                <Route exact path={"/trips/application"}>
                    <ApplicationFormPage />
                </Route>
                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>
                <Route exact path={"/admin/trips/list"}>
                    <AdminHomePage />
                </Route>
                <Route exact path={"/admin/trips/create"}>
                    <TripDetailsPage />
                </Route>
                <Route exact path={"/admin/trips/:id"}>
                    <CreateTripPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router