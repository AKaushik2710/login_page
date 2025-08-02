import { useEffect, useRef, useState, type ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css'
import { faEye } from '@fortawesome/free-regular-svg-icons';

function App() {
  const [inputType, setInputType] = useState<"password" | "text">('password');
  const nameRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  // const messageRef = useRef<string>('I am message handler');
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const handleSubmission = async (val : string)=>{
    // e.preventDefault();
    try{
      console.log(import.meta.env.VITE_server)
      const response = await fetch(`${import.meta.env.VITE_server}/${val}`,{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({username : nameRef.current?.value, password : passRef.current?.value})
    });
    const data = await response.json();
    console.log(data, response);
    setMessage(data.message);
    nameRef.current!.value = '';
    passRef.current!.value = '';
    setFadeOut(true);
    }
    catch(err){
      console.error(err);
    }
  }
  useEffect(()=>{
    if(!fadeOut) return ;
    const messageFade = setTimeout(()=>{setFadeOut(false);},2000)
    return ()=> clearTimeout(messageFade);
  },[fadeOut])
  return (
    <>
      <div className='w-full h-screen bg-linear-65 from-white to-black/25 flex justify-center items-center'>
        <form className='mb-2 w-2/5 h-100 bg-linear-to-b from-indigo-600 to-indigo-50  shadow-lg shadow-white/50 flex flex-col justify-center items-center border-1 border-white' onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
          <div className='w-9/10 flex flex-col justify-center items-center h-30'>
            <label className='text-white block w-2/2 mb-3 h-7 cav'>Username</label>
            <input className='border-white/50 w-2/2 mb-1 border-4 text-white p-2 outline-none h-10' ref={nameRef} type='text'></input>
            <span className='invalid:text-red-800 w-2/2 mb-1 text-sm text-center h-5 text-red-900'>{fadeOut ? message : ""}</span>
          </div>
          <div className='mb-2 w-9/10 flex flex-col justify-center items-center h-30'>
            <label className='text-white block w-2/2 mb-3 h-7 paci'>Password</label>
            <div className='w-full flex border-cyan-500 h-10'>
              <input className='border-white/50 border-y-4 border-l-4 h-full text-white w-5/6 outline-none mb-1' ref={passRef} type={inputType}></input>
              <span className=' text-white w-1/6 border-white/50 border-y-4 border-r-4 h-full flex items-center justify-center cursor-pointer' onClick={()=> setInputType(prev => prev==="text" ? "password" : "text")}><FontAwesomeIcon icon={faEye} className='text-indigo-600 hover:text-indigo-900 focus:text-indigo-900'></FontAwesomeIcon></span>
            </div>
            <span className='invalid:text-red-800 w-2/2 mb-1 text-sm text-center h-5 text-red-900'>{fadeOut ? message : ""}</span>
          </div>
          <div className='flex justify-between w-9/10 px-4'>
            <button className='text-white pt-1 pb-2 px-2 hover:bg-indigo-900 hover:text-white/75 hover:cursor-pointer rounded-xl bg-indigo-600' onClick={()=>handleSubmission('login')}>Log In</button>
            <button className='text-white pt-1 pb-2 px-2 hover:bg-indigo-900 hover:text-white/75 hover:cursor-pointer rounded-xl bg-indigo-600' onClick={()=>handleSubmission('register')}>Register</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
