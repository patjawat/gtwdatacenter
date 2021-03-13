import React from 'react'
import Content from './content'
import Footer from './footer'
import Navbar from './navbar'
import Sidebar from './sidebar'
import SidebarControl from './sidebarControl'
import SidebarOverlay from './sidebarOverlay'

export default function BlankLayout({children}) {
    return (
        <div>
            {children}
        </div>
    )
}
