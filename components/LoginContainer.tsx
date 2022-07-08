import React, { useState, useRef } from "react";

const LoginContainer = (props : {loginVisible: boolean, setLoginVisible: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const {loginVisible, setLoginVisible} = props;
    const [isLoggedIn, setLogin]  = useState(false);
    const usernameInput = useRef(null);
    
    const loginUser = () => {
        const usernameElem : HTMLInputElement = usernameInput.current!;
        const username = usernameElem.value;
        localStorage.setItem("username", username);
        setLoginVisible(false);
        setLogin(true);
    }

    const logoutUser = () => {
        localStorage.clear();
        setLoginVisible(false);
        setLogin(false);
    }

    if(!loginVisible){
        return <div className="absolute hidden"></div>
    }


    return (
        <div className="w-72 h-56 border-slate-900 border-2 rounded-lg flex flex-col p-6 bg-gray-900 text-white m-0 absolute right-4 top-20">
            {
                isLoggedIn && (
                    <div className="flex flex-col justify-around items-center">
                        <p className="text-xl p-6">Already logged in</p>
                        <button onClick={logoutUser}>Logout</button>
                    </div>
                )
            }
            {
                !isLoggedIn && (
                    <div className="flex flex-col justify-around">
                        <h1 className="m-auto text-3xl ">Login</h1>
                        <label htmlFor="username">Username:</label>
                        <input name="username" className="border-black focus:outline-none w-auto text-black rounded-sm h-8 py-4 px-2" ref={usernameInput} />
                        <button className="w-max text-lg bg-slate-800 border-1 border-slate-800 m-auto my-2 p-2" onClick={loginUser}>Login</button>
                    </div>
                )
            }
        </div>
    )
}

export default LoginContainer;