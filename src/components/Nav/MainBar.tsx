import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
// Issues with getting search-icon svg to display correctly - leaving as a font-awesome icon for now
import MagnifyingGlass from 'public/icons/magnifying-glass.svg';
import { useState } from 'react';

import { Dropdown } from '@/components/Nav/Dropdown';
import { NavLink } from '@/components/Nav/NavLink';
import type { NavlinkProps } from '@/types/nav';

export const MainBar = () => {
    const [dropdownContent, setDropdownContent] = useState<null | NavlinkProps>(null);

    const navlinks: NavlinkProps[] = [
        {
            content: 'About',
        },
        {
            content: 'Hospitals',
        },
        {
            content: 'Treatments',
            dropdownMenu: [
                'Bone and Joint Pain',
                'Eye Surgery',
                'Diagnostics',
                'Cancer Care',
                'Gastroenterology',
                'Pain Relief',
                'Cosmetic Surgery',
                'General Surgery',
                'Physiotherapy',
                'Endoscopy',
                'Heart Surgery',
                'Weight Loss Surgery',
                'ENT Surgery',
                'Mens Health',
                'Womens Health',
            ],
        },
        {
            content: 'Specialists',
        },
        {
            content: 'For Patients',
            dropdownMenu: [
                'Bone and Joint Pain',
                'Eye Surgery',
                'Diagnostics',
                'Cancer Care',
                'Gastroenterology',
                'Pain Relief',
                'Cosmetic Surgery',
                'General Surgery',
                'Physiotherapy',
                'Endoscopy',
                'Heart Surgery',
                'Weight Loss Surgery',
                'ENT Surgery',
                'Mens Health',
                'Womens Health',
            ],
        },
        {
            content: 'Events',
        },
        {
            content: 'Journal',
        },
        {
            content: 'Covid-19',
        },
    ];

    const renderNavlinks = () =>
        navlinks.map((link) => (
            <NavLink
                content={link.content}
                dropdownMenu={link.dropdownMenu}
                key={`navlink${link.content}`}
                setDropdownContent={setDropdownContent}
            />
        ));

    return (
        <div className="relative flex w-full justify-center bg-white">
            <div className="flex max-w-[1640px] flex-1 justify-between">
                <div className="py-[25px]">
                    <Image
                        width={80}
                        height={70}
                        src="/ramsay-logo.png"
                        alt="Ramsay Health Care Logo"
                    />
                </div>
                <div className="flex gap-8">
                    {renderNavlinks()}
                    <button
                        className="flex items-center"
                        // onClick={() => focus search bar}
                    >
                        <MagnifyingGlass className="h-[22px] w-[22px] fill-dark-blue" />
                    </button>
                </div>
            </div>
            <Dropdown content={dropdownContent} />
        </div>
    );
};
