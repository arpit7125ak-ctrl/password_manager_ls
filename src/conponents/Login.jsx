import React from 'react'

const Login = ({login,handleloginchange ,handlelogin ,falseuser }) => {
  return (
    <>
    <div>{localStorage.getItem("logininfo")?"user exist sign in":"user not exist sign up"}</div>
    <div>

      username:<input className="rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400" type="text" name="user" value={login.user} onChange={handleloginchange} />
      password:<input className="rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400" type="text" name="password" value={login.password}  onChange={handleloginchange} />
      
      <button onClick={handlelogin} className="rounded-xl border border-rose-400/20 bg-rose-500/10 px-3 py-1 text-xs font-medium  transition hover:bg-rose-500/20">{localStorage.getItem("logininfo")?"login":"save user"}</button>
    </div>
    {falseuser && <div>chal bhag yahan se dusro ka password dekhne aata h </div> }
    </>
  )
}

export default Login
