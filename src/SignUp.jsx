import { useState } from "react"
import {createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./fribaseApp";
import { Navigate, useNavigate } from "react-router-dom";


function SignUp() {
    const navigate=useNavigate()
    const [user, setUser]=useState({
        email:'',
        password:'',
        tkpasword:''
    })
function Hendl(e){
    e.preventDefault();
    if (user.email=='') {
        alert('emailni kiriting')
        return;
    }
    if (user.password!=user.tkpasword && user.password.length>=6) {
        alert('pasword hoto kiritildi (ishoralar soni min 6ta)')
    }
    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
        const user = userCredential
        console.log(user);
        navigate('/book')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
}

  return (
    <div className="w-full bg-slate-300 h-[100vh] pt-24">
        <div className="mx-auto  w-[400px] flex flex-col items-center  gap-5 bg-slate-500 py-5 rounded-3xl">
        <h2 className="text-[28px] text-white">Sign up</h2>
        <form action="" className=" flex flex-col gap-1">
            <label htmlFor="" className="text-[18px] text-white">Email adres</label>
            <input type="email" className="px-3 py-1 rounded-md" value={user.email} placeholder="email" onChange={e=>setUser({...user, email:e.target.value})} />
            <br />
            <label htmlFor="ps" className="text-[18px] text-white">Pasword</label>
            <input type="password" htmlFor='ps' className="px-3 py-1 rounded-md" placeholder="password" value={user.password} onChange={e=>setUser({...user, password:e.target.value})} />
            <br />
            <label htmlFor="p1s" className="text-[18px] text-white">Confirm Pasword</label>
            <input type="password" htmlFor='p1s' className="px-3 py-1 rounded-md" placeholder="pasword" value={user.tkpasword}  onChange={e=>setUser({...user, tkpasword:e.target.value})}/>
            <button onClick={e=>Hendl(e)} className="px-5 py-2 bg-blue-600 text-white mt-3 rounded-full text-[20px]">send</button>
        </form>
        </div>
    </div>
  )
}

export default SignUp