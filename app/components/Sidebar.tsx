'use client'
import React from 'react';
import { usePathname } from 'next/navigation'
import { useMemo } from 'react';
import SidebarItem from './SidebarItem';
import Library from './Library';
import {HiHome} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import Box from './Box';

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const pathname = usePathname()

    const route = useMemo(()=>[
    {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
    },
    {
        icon: BiSearch,
        label: 'Search',
        active: pathname !== '/',
        href: '/search',
    }
],[pathname])
    return (
        <div className='flex w-full h-screen'>
            <div className=' hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-3'>
                <Box><div className='flex flex-col gap-y-4 px-5 py-4'>{route.map((items)=>(
                    <SidebarItem
                    key={items.label}
                    {...items}
                    />
                ))}</div>
                </Box>
                <Box className='overflow-y-auto h-full'><Library/></Box>
            </div>
            <main className='w-full h-full p-3'>{children}</main>
        </div>
    );
}

export default Sidebar;
