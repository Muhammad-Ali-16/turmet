import React from 'react'

function Button({ text, path, additionalClass }) {
    return (
        <>
            <button className={`${additionalClass} cursor-pointer px-5 py-4 rounded-full min-w-[150px] relative z-2 overflow-hidden 
            before:transition-all before:duration-350 before:content-[] before:absolute before:inset-0 before:w-[100%] before:h-[100%] before:rounded-full before:-z-1 before:scale-x-0 hover:before:scale-x-100 before:origin-left`}
            >
                <a href={path} className='font-semibold text-sm lg:text-[16px]'>
                    {text}
                    <i className="ms-1 bi bi-arrow-right"></i>
                </a>
            </button>
        </>
    )
}

export default Button