import React from 'react'
export default function Sections({props}) {
  return (
  <article
    className=" w-full rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
  >
    <span className="inline-block rounded bg-blue-600 p-2 text-white">
     {props.icon}
    </span>
  
    <a href="#">
      <h3 className="mt-0.5 text-lg font-medium text-gray-900">
        {props.title}
      </h3>
    </a>
  
    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     {props.description}
    </p>
  
    <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Find out more
  
      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </a>
  </article>
  )
}
