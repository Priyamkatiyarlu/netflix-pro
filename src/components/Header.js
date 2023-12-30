import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch =useDispatch();
  const navigate=useNavigate();
  const user = useSelector(store=>store.user);
const handleSignOut=()=>{
signOut(auth).then(() => {
}).catch((error) => {
  navigate("/error");
});
  }

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL}=user;
        dispatch(addUser({uid: uid,email: email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return() => unsubscribe();
  },[]);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10 flex justify-between">
        <img className="w-44" src={LOGO} alt='logo'/>
        {user && (<div className='flex p-2'>
        <img className="w-12 h-12" src={user.photoURL?user.photoURL:'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e'} alt='user-icon'/>
        <button onClick={handleSignOut} className='ml-3 font-bold text-white'>Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header;