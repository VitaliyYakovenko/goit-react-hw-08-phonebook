import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./Loayout/Layout";
import Home from "pages/Home/Home";
import RestrictedRoute from './RestrictedRoute'
import PrivateRoute from './PrivateRoute';
import RegisterPage from "pages/RegisterPage/RegisterPage";
import LoginPage from "pages/LoginPage/LoginPage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import { refreshUser } from "redux/user/operation";


export default function App() {
  
  const isRefreshing = useSelector(state => state.user.isRefreshing);

  const dispath = useDispatch();
   
  useEffect(() => {
    dispath(refreshUser())
  }, [dispath])
 
  return (
    isRefreshing ? (
      '...Loading'
    )
    : (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/register"
        element={<RestrictedRoute
        edirectTo="/contacts"
        component={<RegisterPage />} />
        }/>
        <Route path="/login"
        element={<RestrictedRoute
        redirectTo="/contacts"
        component={<LoginPage />}
        />}
        />
        <Route path="contacts"
        element={<PrivateRoute
        component={<ContactsPage />}
        redirectTo="/login"    
        />} />
      </Route>
        </Routes>
    )
  )
}


