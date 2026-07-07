import React from 'react'

const EditMode = ({ 
    editform,
    handleSaveChanges,
    handleEditChange,
    handleEditGenerate
    
    }) => {
    return (
        <article className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className='flex min-w-0 flex-col gap-3 sm:pl-1 md:flex-row md:flex-wrap'>
                    <input value={editform.site} name='site' onChange={handleEditChange} 
                        placeholder="Website / App name"
                        className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
                    />
                    <input value={editform.userName} name='userName' onChange={handleEditChange}
                        placeholder="Username / Email"
                        className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
                    />
                    <input value={editform.password} name='password'  onChange={handleEditChange}
                        type={"text"}
                        placeholder="Password"
                        className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
                    />
                    <button type="button" onClick={handleEditGenerate}
                                    className="w-full rounded-2xl border border-violet-400/40 bg-violet-500/20 px-5 py-3 text-sm font-medium text-violet-100 transition hover:bg-violet-500/30 md:w-auto">
                                    Generate
                                </button>
                </div>
                <div className='flex flex-wrap gap-3 sm:justify-end' >

                    <button onClick={handleSaveChanges} 
                        type="button"
                        className="w-full rounded-xl border border-rose-400/20 bg-rose-500/10 px-3 py-2 text-xs font-medium text-rose-200 transition hover:bg-rose-500/20 sm:w-auto"
                    >
                        Save Changes
                    </button>
                    
                </div>
            </div>


        </article>
    )
}

export default EditMode
