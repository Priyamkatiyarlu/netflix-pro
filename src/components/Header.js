import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();
const handleSignOut=()=>{
signOut(auth).then(() => {
  navigate("/");
}).catch((error) => {
  navigate("/error");
});
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10 flex justify-between">
        <img className="w-44" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
        <div className='flex p-2'>
        <img className="w-12 h-12" src='https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e' alt='user-icon'/>
        <button onClick={handleSignOut} className='ml-3 font-bold text-white'>Sign Out</button>
        </div>
    </div>
  )
}

export default Header;