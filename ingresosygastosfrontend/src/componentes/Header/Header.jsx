import React from 'react'
import BuscadorHeader from './BuscadorHeader'
import { SidebarToggleButton } from './SidebarToggleButton'
import Menu from './Menu'

export const Header = () => {
  return (
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    {/* Sidebar Toggle (Topbar) */}
                    <SidebarToggleButton></SidebarToggleButton>

                    
                    {/* Topbar Search */}
                    <BuscadorHeader></BuscadorHeader>

                    {/* Topbar Navbar */}
                    <Menu></Menu>

                </nav>
  )
}
