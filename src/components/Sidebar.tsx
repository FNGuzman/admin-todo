import Image from 'next/image';
import Link from 'next/link';
import { CiBookmarkCheck, CiLogout } from 'react-icons/ci';
import { SidebarItem } from './SidebarItem';
import { IoCalendar } from 'react-icons/io5';
import path from 'path';
import { IoIosList } from 'react-icons/io';

const menuItems = [
    {
        icon: <IoCalendar />,
        title: 'Dashboard',
        path: '/dashboard'
    },

    {
        icon: <CiBookmarkCheck />,
        title: 'Rest-Todos',
        path: '/dashboard/rest-todos'
    },

    {
        icon: <IoIosList />,
        title: 'Server Actions',
        path: '/dashboard/server-todos'
    }
]

export const Sidebar = () => {
    return (
        <>
            <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div className="-mx-6 px-6 py-4">

                        <Link href="/dashboard">
                            <Image
                                src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            >

                            </Image>

                        </Link>
                    </div>

                    <div className="mt-8 text-center">
                        {/* Next/Image */}
                        <Image
                            src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                        >

                        </Image>
                        <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Cynthia J. Watts</h5>
                        <span className="hidden text-gray-400 lg:block">Admin</span>
                    </div>
                    {menuItems.map(item => (
                        <SidebarItem
                            key={item.title}
                            {...item}
                        />
                    ))}

                </div>

                <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                    <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                        <CiLogout />
                        <span className="group-hover:text-gray-700">Logout</span>
                    </button>
                </div>
            </aside>
        </>
    );
};


