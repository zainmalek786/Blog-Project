import React from 'react';
function Button({
    children,
    type = 'button',
    textColor = 'text-white',
    bgColor = 'bg-blue-400',
    className='',
    ...props
}) {
    return ( 
        <button className={`px-4 py-2 ${className} ${textColor} ${bgColor} `} ${...props} type={type}>{children}</button>
     );
}

export default Button;