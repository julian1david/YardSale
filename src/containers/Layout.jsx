import React from 'react'
import Header from './Header'
//Esta estructura va a recibir un hijo

const Layaout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layaout