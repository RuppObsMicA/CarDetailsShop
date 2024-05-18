import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import {AuthContext} from "./components/context/auth-context";
import {useEffect, useState} from "react";
import SignUpSignInModalWindow from "./components/Profiles/SignUp-signIn-modal-window/SignUp-signIn-modal-window";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [modalActive, setModalActive] = useState(false);

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
                    <Header modalActive={modalActive} setModalActive={setModalActive}/>
                    <AppRouter/>
                    <Footer/>
                    <SignUpSignInModalWindow modalActive={modalActive} setModalActive={setModalActive}/>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

export default App;