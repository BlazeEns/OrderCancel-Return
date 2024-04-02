import React from 'react'
import Sidebar from './sidebar';
import Header from './header';

function Layout({ children }) {
    return (
        <div>

            <Header />
            <div className='d-flex'>
                <Sidebar />
                <div className='w-100' style={{ background: "#f6f6f7" }}>
                    {children}
                </div>
            </div>


        </div>
    )
}

export default Layout;