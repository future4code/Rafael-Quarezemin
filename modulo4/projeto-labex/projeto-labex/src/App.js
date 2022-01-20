import './App.css';
import HomePage from './Pages/HomePage';
import AdminHomePage from './Pages/AdminHomePage';
import ApplicationFormPage from './Pages/ApplicationFormPage';
import CreateTripPage from './Pages/CreateTripPage';
import ListTripsPage from './Pages/ListTripsPage';
import LoginPage from './Pages/LoginPage';
import TripDetailsPage from './Pages/TripDetailsPage';
import Router from './Route/Router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router />
      {/* <AdminHomePage />
      <ApplicationFormPage />
      <CreateTripPage />
      <HomePage />
      <ListTripsPage />
      <LoginPage />
      <TripDetailsPage /> */}

    </div>
  );
}

export default App;
