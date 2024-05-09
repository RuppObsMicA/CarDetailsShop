import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import {AuthContext} from "./components/context/auth-context";
import {useEffect, useState} from "react";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("logged"))
            setIsLoggedIn(true)
    }, [])

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn
            }}>
            <div className="container">
                <BrowserRouter>
                    <Header/>
                    <AppRouter/>
                    <Footer/>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

export default App;