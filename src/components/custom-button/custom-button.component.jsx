import React from 'react'

const CustomButton = ({ children, ...otherProps}) => {
    return (
        <div className='custom-button' {...otherProps}>
            {children}
        </div>
    )
}

export default CustomButton