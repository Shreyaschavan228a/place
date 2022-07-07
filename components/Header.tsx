import { useState } from 'react';
import LoginContainer from '../components/LoginContainer';

const Header = () => {
    const [loginVisible, setLoginVisible] = useState(false);
    return (
        <div className="h-16 bg-black text-white p-2 w-full flex flex-row space-between">
            <h1 className="m-auto text-4xl pl-6 ">Place</h1>
            <button className="w-24 text-lg text-white border-2 border-slate-900 bg-gray-900 m-0 right-2 top-5 hover:scale-110 mx-6" onClick={() => {setLoginVisible(!loginVisible)}}>Login</button>
            <LoginContainer loginVisible={loginVisible} setLoginVisible={setLoginVisible}/>
        </div>
    )
}

export default Header;