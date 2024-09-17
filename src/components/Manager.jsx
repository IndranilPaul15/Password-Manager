import React, { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LottieButton from './LottieButton';
import { v4 as uuidv4 } from 'uuid';
import Footer from './Footer';

const Manager = () => {
    const ref = useRef()
    const passref = useRef()
    const [form, setform] = useState({ site: "", user: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])

    const showPassword = () => {
        passref.current.type = "text"
        if (ref.current.src.includes("visibility_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg")) {
            ref.current.src = "visibility_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
            passref.current.type = "text"
        }
        else {
            ref.current.src = "visibility_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
            passref.current.type = "password"
        }
    }

    const savePassword = () => {
        if (form.site.length > 3 && form.user.length > 3 && form.password.length > 3) {
            const newPasswordArray = [...passwordArray, { ...form, id: uuidv4() }];
            setpasswordArray(newPasswordArray);
            localStorage.setItem('passwords', JSON.stringify(newPasswordArray));
            setform({ site: "", user: "", password: "" })
            toast('🦄 PassWord Saved !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
        } else {
            toast('❌Not Valid Input !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
        }
    };
    const deletePassword = (id) => {

        console.log("deleting password with id", id)
        confirm("Sure you want to delete???")
        if (confirm) {
            setTimeout(() => {
                setpasswordArray(passwordArray.filter(item => item.id !== id));
                localStorage.setItem('passwords', JSON.stringify(passwordArray.filter(item => item.id !== id)));
                toast.error('Deleted Successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }, 1500);
        }
    };
    const editPassword = (id) => {
        console.log("editing password with id", id)
        confirm("Are you sure you want to edit this?🤔")
        if (confirm) {
            setform(passwordArray.filter(item => item.id === id)[0])
            setpasswordArray(passwordArray.filter(item => item.id !== id));
        }
    };
    const handelchange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        toast('🦄 Copied to clipboard !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text)
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />

            <ToastContainer />

            <div className=''>
                <div className=" absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>
            <h1 className="container cursor-pointer p-7 pb-0 mx-auto max-w-4xl text-center font-bold text-[#00CCDD] text-3xl">
                <span className='text-blue-500'> &lt; </span>
                &nbsp;iPassWord&nbsp;
                <span className='text-blue-500'> /&gt;</span>
            </h1>
            <p className='text-center p-5'>Your Personal Password Saver Protective and trusted</p>
            
            <div className="container mx-auto max-w-4xl ">
                <div className=" mx-auto w-[90vw] md:w-[67vw] bg-gradient-to-br from-[aliceblue] to-blue-300 flex flex-col p-3 my-1 rounded-lg">
                    <input value={form.site} onChange={handelchange} className='rounded-full my-1  px-11 md:px-10 md:pl-20 border border-[#7695FF] focus:ring-blue-500 focus:outline-none focus:ring-1' type="text" name="site" id="1" placeholder="Enter Website Name" />
                    <div className="flex flex-col md:flex-row w-full justify-between md:gap-2 ">
                        <input value={form.user} onChange={handelchange} className='rounded-full my-1 w-full  px-11 md:px-20 border border-[#7695FF] focus:ring-blue-500 focus:outline-none focus:ring-1 ' type="text" name="user" id="2" placeholder='Enter Username' />
                        <div className="relative w-full">
                            <input value={form.password} onChange={handelchange} ref={passref} className='rounded-full my-1 w-full  px-11 border border-[#7695FF] focus:ring-blue-500 focus:outline-none focus:ring-1 ' type="password" name="password" id="3" placeholder='Enter Password' />
                            <span className='left-3 top-1 absolute flex items-center cursor-pointer ' onClick={showPassword}>
                                <img ref={ref} src="visibility_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className=" mx-auto w-fit inline-flex items-center justify-center p-0.5 mt-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-500">
                        <span className="relative flex justify-center items-center px-5  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                            <span className='text-xl font-[700] font-[poppins] mr-2'>Save</span>
                            <div className="size-10 ">
                                <LottieButton src="https://lottie.host/f8755ae5-f9b8-4919-9cad-d14ba9a21abb/Li567hwfHL.json" />
                            </div>
                        </span>

                    </button>
                </div>
                <div className="passwords overflow-hidden md:overflow-visible mx-auto">
                    <h2 className='bg-[#7695FF] text-white font-medium text-lg px-3 my-2 rounded-lg w-1/2 text-center mx-auto'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div className='font-bold underline'>No Passwords to show</div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto  mx-auto bg-blue-50 border border-green-200">
                            <thead className='bg-[#C7FFD8] border border-green-300 text-center '>
                                <tr>
                                    <th className=' mx-4'>Website </th>
                                    <th className=''>User</th>
                                    <th className=''>PassWord</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody >
                                {passwordArray.map((item, index) => {
                                    return <tr className='border border-b' key={index}>
                                        <td >
                                            <div className='  flex justify-between md:mx-4 items-center'>
                                                <a className='underline w-10 md:w-80 overflow-hidden text-ellipsis' href={item.site} target='_blank'>{item.site}</a>
                                                <button onClick={() => copyText(item.site)} className=" md:pl-4 md:m-0.5">
                                                    <div className="size-12 hover:bg-slate-300 hover:rounded-lg">
                                                        <LottieButton src="https://lottie.host/4101b55e-2f52-48f1-ade0-94738db57b03/HbMUz5OWTv.json" />
                                                    </div>
                                                </button>
                                            </div>
                                        </td>
                                        <td >
                                            <div className='  flex justify-end md:mx-4 items-center md:w-40'>
                                                <span className="w-8 ml-3 md:m-0  md:w-full overflow-hidden text-ellipsis"> {item.user}</span>
                                                <button onClick={() => copyText(item.user)} className=" md:pl-4 md:m-0.5">
                                                    <div className="size-12 hover:bg-slate-300 hover:rounded-lg">
                                                        <LottieButton src="https://lottie.host/4101b55e-2f52-48f1-ade0-94738db57b03/HbMUz5OWTv.json" />
                                                    </div>
                                                </button>
                                            </div>
                                        </td>
                                        <td >
                                            <div className=' flex justify-end md:mx-4 items-center md:w-40'>
                                                <span className="w-8 ml-3 md:m-0  md:w-full overflow-hidden text-ellipsis"> {item.password}</span>
                                                <button onClick={() => copyText(item.password)} className=" md:pl-4 md:m-0.5">
                                                    <div className="size-12 hover:bg-slate-300 hover:rounded-lg">
                                                        <LottieButton src="https://lottie.host/4101b55e-2f52-48f1-ade0-94738db57b03/HbMUz5OWTv.json" />
                                                    </div>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className=" flex justify-center items-center ">
                                                <button onClick={() => deletePassword(item.id)} className='md:mx-1' >
                                                    <div className=" hover:border hover:rounded-full hover:border-slate-300 size-10 mt-1">
                                                        <LottieButton src="https://lottie.host/165a4261-0ccf-427e-bbf2-a69bd9d42f8f/1rqjXwZ2qX.json" />

                                                    </div>
                                                </button>
                                                <button onClick={() => { editPassword(item.id) }} className=''>
                                                    <div className="hover:bg-slate-300 size-9 border rounded-lg md:mx-2">
                                                        <LottieButton src="https://lottie.host/fca0dc1e-7039-476b-a1ad-c33b59f742f2/JU8VMeA95o.json" />
                                                    </div>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                })}

                            </tbody>
                        </table>}
                </div>
            </div >
            {/* <Footer/> */}
        </>
    )
}

export default Manager
