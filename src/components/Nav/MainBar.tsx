import Image from 'next/image';
import MagnifyingGlass from 'public/icons/magnifying-glass.svg';

import { NavLink } from '@/components/Nav/NavLink';

interface Navlink {
    content: string;
    dropdownMenu?: string[];
}

export const MainBar = () => {
    const navlinks: Navlink[] = [
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
            />
        ));

    return (
        <div className="flex w-full justify-center bg-white py-[25px]">
            <div className="flex max-w-[1640px] flex-1 justify-between">
                <Image
                    width={80}
                    height={70}
                    src="/ramsay-logo.png"
                    alt="Ramsay Health Care Logo"
                />
                <div className="flex items-center gap-8">
                    {renderNavlinks()}
                    <MagnifyingGlass className="h-[22px] w-[22px] fill-dark-blue" />
                </div>
            </div>
        </div>
    );
};
