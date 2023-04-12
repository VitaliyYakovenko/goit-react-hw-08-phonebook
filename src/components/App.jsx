import { Routes, Route } from "react-router-dom";
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "redux/user/operation";
import Layout from "./Loayout/Layout";
import Home from "pages/Home/Home";
const RestrictedRoute = lazy(() => import("./RestrictedRoute"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage"));



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


