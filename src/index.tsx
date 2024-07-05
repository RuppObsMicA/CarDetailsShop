import React from 'react';
import ReactDOM from 'react-dom/client';

// Redux toolkit
import {Provider} from "react-redux";
import {store} from "./store/store";

// Router
import {router} from "./components/AppRouter/AppRouter";
import {RouterProvider} from "react-router-dom";

// Styles
import "./reset.css"
import "./RootLayout.scss"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}></RouterProvider>
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
);
