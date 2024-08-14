import Link from 'next/link';
import { CiBookmarkCheck, CiLogout } from 'react-icons/ci';
const SidebarItem = () => {
    return (
        <>
            <ul className="space-y-2 tracking-wide mt-8">
                {/* TODO: src/components <SidebarItem /> */}
                {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
                <li>
                    <Link
                        href="/dashboard/rest-todos" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                        <CiBookmarkCheck size={30} />
                        <span className="-mr-1 font-medium">Dashboard</span>
                    </Link>
                </li>

            </ul>
        </>
    );
};

export default SidebarItem;
