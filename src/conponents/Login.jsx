import React from 'react'

const Login = ({login,handleloginchange ,handlelogin ,falseuser }) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_30%)]" />
    <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-3 py-5 sm:px-4 md:px-6 lg:px-8">
    <div className="w-full max-w-md flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-4 sm:p-6 shadow-2xl shadow-black/20 backdrop-blur text-slate-100">
    <div className="text-center text-sm font-medium uppercase tracking-[0.25em] text-violet-300">{localStorage.getItem("logininfo")?"user exist sign in":"user not exist sign up"}</div>
    <div className="flex flex-col gap-3">

      <label className="flex flex-col gap-1 text-sm text-slate-300">username:<input className="rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400" type="text" name="user" value={login.user} onChange={handleloginchange} /></label>
      <label className="flex flex-col gap-1 text-sm text-slate-300">password:<input className="rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400" type="text" name="password" value={login.password}  onChange={handleloginchange} /></label>
      
      <button onClick={handlelogin} className="mt-1 rounded-2xl border border-violet-400/40 bg-violet-500/20 px-4 py-2 text-sm font-medium text-violet-100 transition hover:bg-violet-500/30">{localStorage.getItem("logininfo")?"login":"save user"}</button>
    </div>
    {falseuser && <div className="rounded-2xl border border-rose-400/20 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">chal bhag yahan se dusro ka password dekhne aata h </div> }
    </div>
    </div>
    </section>
  )
}

export default Login
