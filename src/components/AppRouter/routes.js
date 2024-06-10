import Main from "../Main/Main";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import AdminProfile from "../Profiles/AdminProfile/AdminProfile";
import CustomerProfile from "../Profiles/CustomerProfile/CustomerProfile";
import Cart from "../Cart/Cart";
import WorkerProfile from "../Profiles/WorkerProfile/WorkerProfile";

export const publicRoutes = [
    {path: '/', element: <Main />, exact: true},
    {path: '*', element: <NotFoundPage />, exact: true},
    {path: '/cart', element: <Cart/>, exact: true}
];

export const adminRoutes = [
    {path: '/', element: <Main />, exact: true},
    {path: '*', element: <NotFoundPage />, exact: true},
    {path: '/admin_profile/orders', element: <AdminProfile />, exact: true},
    {path: '/admin_profile/cart', element: <Cart />, exact: true},

]

export const customerRoutes = [
    {path: '/', element: <Main />, exact: true},
    {path: '*', element: <NotFoundPage />, exact: true},
    {path: '/customer_profile/orders', element: <CustomerProfile />, exact: true},
    {path: '/customer_profile/cart', element: <Cart />, exact: true},
    {path: '/customer_profile/favourite', element: <Cart />, exact: true},
    {path: '/customer_profile/personal_data', element: <Cart />, exact: true},
    {path: '/customer_profile/bonuses', element: <Cart />, exact: true},

]

export const workerRoutes = [
    {path: '/worker_profile/orders', element: <WorkerProfile />, exact: true}
]

