import React from 'react'

export default function Loader() {
  return (
    <>
     <div class="animate-pulse flex flex-col items-start gap-12 w-full ">
        <div class="h-12 bg-slate-400 w-1/2 rounded-md"></div>
        <div class="h-12 bg-slate-400 w-1/2 rounded-md"></div>
        <div class="h-12 bg-slate-400 w-full rounded-md"></div>
        <div class="h-12 bg-slate-400 w-full rounded-md"></div>
        <div class="h-12 bg-slate-400 w-full rounded-md"></div>
        <div class="h-12 bg-slate-400 w-full rounded-md"></div>
        <div class="h-12 bg-slate-400 w-full rounded-md"></div>
    </div>
    </>
  )
}
