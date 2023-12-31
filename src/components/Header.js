import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { BellIcon, SearchIcon } from '@heroicons/react/solid';

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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
    // <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10 flex justify-between">
    //     <img className="w-44" src={LOGO} alt='logo'/>
    //     <ul className='hidden space-x-4 md:flex'>
    //       <li className='headerlink'>Home</li>
    //       <li className='headerlink'>Tv Shows</li>
    //       <li className='headerlink'>Movies</li>
    //       <li className='headerlink'>New & Popular</li>
    //       <li className='headerlink'>My List</li>
    //     </ul>
    //     {user && (<div className='flex p-2'>
    //     <img className="w-12 h-12" src={user.photoURL?user.photoURL:'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e'} alt='user-icon'/>
    //     <button onClick={handleSignOut} className='ml-3 font-bold text-white'>Sign Out</button>
    //     </div>)}
    // </div>
    <header className={user ? `${isScrolled && 'bg-[#141414]'}` : "bg-gradient-to-b from-black"}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src= {LOGO}
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        {/* <BasicMenu /> */}

       
        
       {user && <ul className="hidden space-x-4 md:flex">
          <li className="headerlink">Home</li>
          <li className="headerlink">TV Shows</li>
          <li className="headerlink">Movies</li>
          <li className="headerlink">New & Popular</li>
          <li className="headerlink">My List</li>
        </ul>}
      </div>

     {user && <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        {/* <Link href="/account"> */}
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        {/* </Link> */}
      </div>}
    </header>
  )
}

export default Header;