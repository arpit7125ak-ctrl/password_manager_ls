import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import generator from "generate-password-browser";
import { ToastContainer, toast } from 'react-toastify';
import SiteData from './SiteData';
import EditMode from './editMode';


const Manager = () => {
    const stats = [
        { label: 'Saved entries', value: '00' },
        { label: 'Last updated', value: 'No data yet' },
        { label: 'Password strength', value: 'High' },
        { label: 'Secure vault', value: 'Enabled' },
    ]
    const [form, setform] = useState({ id: "", site: "", userName: "", password: "" })

    const [isShow, setisShow] = useState(false)
    const [editId, setiseditID] = useState("")
    const [passwordArray, setpasswordArray] = useState([])

    const [editform, seteditform] = useState({ id: "", site: "", userName: "", password: "" })


    useEffect(() => {
        let password = localStorage.getItem("passwords")

        if (password) {
            setpasswordArray(JSON.parse(password));
        }

        // console.log(passwordArray)
    }, [])
    // useEffect(() => {

    //     console.log(passwordArray)
    // }, [passwordArray])

    const handleGenerate = () => {
        const uniquePassword = generator.generate({
            length: Math.floor(Math.random() * (20 - 10 + 1)) + 10,
            lowercase: true,
            uppercase: true,
            symbols: true,
            numbers: true
        });
        // console.log(uniquePassword);
        setform({ ...form, password: uniquePassword })
    }
    const handleEditGenerate = () => {
        const uniquePassword = generator.generate({
            length: Math.floor(Math.random() * (20 - 10 + 1)) + 10,
            lowercase: true,
            uppercase: true,
            symbols: true,
            numbers: true
        });
        // console.log(uniquePassword);
        seteditform({ ...editform, password: uniquePassword })
    }
    const savePassword = () => {
        // setform({ ...form, id: uuidv4() })
        if (!form.site || !form.userName || !form.password) {
            toast.error("Please fill all fields");
            return;
        }

        const newPassword = {
            ...form,
            id: uuidv4(),
        };
        const updatedPassword = [...passwordArray, newPassword]
        setpasswordArray(updatedPassword)
        localStorage.setItem("passwords", JSON.stringify(updatedPassword))
        // console.log(passwordArray)
        setform({ id: "", site: "", userName: "", password: "" })
    }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })

    }

    const handleClear = (e) => {
        setform({ id: "", site: "", userName: "", password: "" })

    }
    const toogleShow = () => {
        setisShow(!isShow)
    }
    const handleDelete = (e) => {
        console.log(e.target.name)
        const idToDelete = e.target.name
        const index = passwordArray.findIndex(item => item.id === idToDelete)
        console.log(index)
        const newPasswordArray = [...passwordArray]
        newPasswordArray.splice(index, 1)
        setpasswordArray(newPasswordArray)
        localStorage.setItem("passwords", JSON.stringify(newPasswordArray))
    }
    const handleEditChange = (e) => {
        seteditform({ ...editform, [e.target.name]: e.target.value })

    }
    const handleEdit = (e) => {
        console.log(e.target.name)
        const id = e.target.name
        setiseditID(id)
        const index = passwordArray.findIndex(item => item.id === id)
        console.log(index)
        // const editform = { ...passwordArray[index] };
        // seteditform({...passwordArray[index] })
        // console.log(editform)
        seteditform({ ...passwordArray[index] })

    }
    const handleSaveChanges = () => {
        
        const id = editform.id
        const index = passwordArray.findIndex(item => item.id === id)
        
        const updatedPasswordArray = [...passwordArray];
        updatedPasswordArray[index] = { ...editform };

        setpasswordArray(updatedPasswordArray);
        localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray) );
        seteditform({ id: "", site: "", userName: "", password: "" })
        setiseditID("")

    }


    // const notify = () => toast("Copied!");
    const copyText = (text) => {
        console.log(text)
        navigator.clipboard.writeText(text)
        toast('Copied!', {
            position: "top-right",
            autoClose: 600,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",


        });
    }


    return (
        <section className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_30%)]" />

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"


            />

            <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
                {/* <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur">
                            <p className="text-sm text-slate-400">{stat.label}</p>
                            <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                        </div>
                    ))}
                </div> */}

                <div className=" flex flex-col gap-6">
                    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 backdrop-blur">
                        <div className="mb-6">
                            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
                                Password manager
                            </p>
                            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                                Store and organize credentials in one place.
                            </h2>
                            <span className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                                Create secure passwords, save login details, and keep your important
                                accounts ready to copy whenever you need them.
                            </span>
                        </div>

                        <form className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <input value={form.site} onChange={handleChange} name='site'
                                    placeholder="Website / App name"
                                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
                                />
                                <input value={form.userName} onChange={handleChange} name='userName'
                                    placeholder="Username / Email"
                                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
                                />
                            </div>

                            <div className=" flex gap-5 ">
                                <input value={form.password} onChange={handleChange} name='password'
                                    type={isShow ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
                                />
                                <button type='button' onClick={toogleShow} className="rounded-2xl border border-violet-400/40 bg-violet-500/20 px-5 py-3 text-sm font-medium text-violet-100 transition hover:bg-violet-500/30">
                                    show
                                </button>

                                <button type="button" onClick={handleGenerate}
                                    className="rounded-2xl border border-violet-400/40 bg-violet-500/20 px-5 py-3 text-sm font-medium text-violet-100 transition hover:bg-violet-500/30">
                                    Generate
                                </button>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <button onClick={savePassword} type="button" className="rounded-2xl bg-linear-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]">
                                    Save password
                                </button>
                                <button type="button" onClick={handleClear} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10">
                                    Clear
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
                        <div className="mb-5 flex items-center justify-between gap-3">
                            <div>
                                <h2 className="text-xl font-semibold text-white">Saved credentials</h2>
                                <p className="mt-1 text-sm text-slate-400">Copy or remove entries anytime.</p>
                            </div>
                            <div className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                                {passwordArray.length} items
                            </div>
                        </div>

                        <div className="space-y-3">
                            {passwordArray.length === 0 && <div className="rounded-2xl border border-dashed border-white/10 bg-slate-950/50 p-8 text-center text-sm text-slate-400">
                                No saved passwords yet. Add your first entry on the left.
                            </div>}

                            {passwordArray.map((items) => editId === items.id ? <EditMode
                                key={items.id}
                                
                                handleEditGenerate={handleEditGenerate}
                                editform={editform}
                                handleEditChange={handleEditChange}
                                handleSaveChanges={handleSaveChanges}
                                 /> : <SiteData key={items.id}
                                    props={items}
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}
                                    copyText={copyText} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Manager
