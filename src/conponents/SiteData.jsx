import React from 'react'

const SiteData = ({ props,
    handleEdit,
    handleDelete,
    copyText }) => {
    return (
        <article className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className='flex min-w-0  gap-6 sm:pl-1'>
                    <a href={props.site.startsWith("http") ? props.site : `https://${props.site}`} target='_blank' rel='noreferrer'> <h3 className="break-words text-base font-semibold text-white">{props.site}</h3></a>
                    <p className="text-sm text-slate-400 break-words">{props.userName}</p>
                    <p className="break-all font-mono text-sm text-violet-200">
                        {"*".repeat(props.password.length)}
                        
                    </p>
                </div>
                <div className='flex flex-wrap gap-3 sm:justify-end' >

                    <button onClick={handleEdit} name={props.id}
                        type="button"
                        className="rounded-xl border border-rose-400/20 bg-rose-500/10 px-3 py-2 text-xs font-medium text-rose-200 transition hover:bg-rose-500/20"
                    >
                        edit
                    </button>
                    <button onClick={handleDelete} name={props.id}
                        type="button"
                        className="rounded-xl border border-rose-400/20 bg-rose-500/10 px-3 py-2 text-xs font-medium text-rose-200 transition hover:bg-rose-500/20"
                    >
                        Delete
                    </button>
                </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                <button
                    type="button" onClick={() => copyText(props.site)}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10"
                >
                    Copy website
                </button>
                <button
                    type="button" onClick={() => copyText(props.userName)}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10"
                >
                    Copy username
                </button>
                <button
                    type="button" onClick={() => copyText(props.password)}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10"
                >
                    Copy password
                </button> 

            </div>
        </article>
    )
}

export default SiteData
