import Image from 'next/image';
import { useState } from 'react';

import { Dropdown } from '@/components/Nav/Dropdown';
import { MobileMenu } from '@/components/Nav/MobileMenu';
import { MobileMenuIcon } from '@/components/Nav/MobileMenuIcon';
import { NavLink } from '@/components/Nav/NavLink';
import { SearchButton } from '@/components/Nav/SearchButton';
import { SearchDropdown } from '@/components/Nav/SearchDropdown';
import type { NavlinkProps } from '@/types/nav';

export const MainBar = () => {
    const [dropdownContent, setDropdownContent] = useState<null | NavlinkProps>(null);
    const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleSearchClick = () => {
        setSearchDropdownOpen(!searchDropdownOpen);
        setMobileMenuOpen(false);
    };

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
        <div className="relative flex w-full flex-col items-center border-b-[1px] border-b-blue-grey bg-white px-6 transition-all md:border-b-0 xl:px-12">
            <div className="flex w-full max-w-[1640px] items-center justify-between lg:items-stretch">
                <div className="lg:hidden">
                    <MobileMenuIcon
                        isOpen={mobileMenuOpen}
                        setIsOpen={setMobileMenuOpen}
                    />
                </div>
                <div className="py-[25px]">
                    <Image
                        width={80}
                        height={70}
                        src="/ramsay-logo.png"
                        alt="Ramsay Health Care Logo"
                        placeholder="blur"
                        // solid pixel of blue-grey color
                        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8/fjVfwAI8gOp9hzYCgAAAABJRU5ErkJggg=="
                    />
                </div>
                <div className="hidden gap-1 lg:flex xl:gap-6 2xl:gap-8">
                    {renderNavlinks()}
                    <SearchButton
                        handleClick={handleSearchClick}
                        dropdownOpen={searchDropdownOpen}
                    />
                </div>
                <div className="lg:hidden">
                    <SearchButton
                        handleClick={handleSearchClick}
                        dropdownOpen={searchDropdownOpen}
                        large
                    />
                </div>
            </div>
            <MobileMenu
                open={mobileMenuOpen}
                navLinks={navlinks}
            />
            <Dropdown content={dropdownContent} />
            <SearchDropdown open={searchDropdownOpen} />
        </div>
    );
};
