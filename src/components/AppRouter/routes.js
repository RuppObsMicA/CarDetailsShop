import Main from "../Main/Main";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import AdminProfile from "../Profiles/AdminProfile/AdminProfile";
import CustomerProfile from "../Profiles/CustomerProfile/CustomerProfile";
import Cart from "../Cart/Cart";
import Login from "../Profiles/Login/Login";


export const publicRoutes = [
    {path: '/', element: <Main />, exact: true},
    {path: '*', element: <NotFoundPage />, exact: true},
    {path: '/admin_profile', element: <Login />, exact: true},
    {path: '/customer_profile', element: <Login />, exact: true},
    {path: '/cart', element: <Login/>, exact: true}
];


export const privateRoutes = [
    {path: '/', element: <Main />, exact: true},
    {path: '*', element: <NotFoundPage />, exact: true},
    {path: '/admin_profile', element: <AdminProfile />, exact: true},
    {path: '/customer_profile', element: <CustomerProfile />, exact: true},
    {path: '/cart', element: <Cart/>, exact: true},
];

