import Image from 'next/image';

import { Column } from '@/components/Footer/Column';
import { ColumnLink } from '@/components/Footer/ColumnLink';

interface LinkColumn {
    links: string[];
    title: string;
}

export const Columns = () => {
    const linkColumns: LinkColumn[] = [
        {
            title: 'About Us',
            links: ['About Us', 'Hospitals', 'Treatments', 'Specialists', 'Health Professionals'],
        },
        {
            title: 'Additional',
            links: ['For Patients', 'Events', 'Journal', 'Careers', 'Coronavirus'],
        },
        {
            title: 'Legal',
            links: [
                'Legal & Regulatory',
                'Terms & Conditions',
                'Privacy Policy',
                'Site Map',
                'Tax Strategy',
            ],
        },
    ];

    const renderLinkColumns = () =>
        linkColumns.map((column) => (
            <Column
                title={column.title}
                key={`column${column.title}`}
            >
                <>
                    {column.links.map((link) => (
                        <ColumnLink
                            content={link}
                            key={`columnLink${link}`}
                        />
                    ))}
                </>
            </Column>
        ));

    return (
        <div className="flex flex-1 justify-end gap-[50px]">
            {renderLinkColumns()}
            <Column
                title="Translate"
                // Width setting is a concession to accommodate the flat image - with a live widget this wouldn't be needed
                className="w-full max-w-[172px]"
            >
                <div className="relative aspect-[172/88] w-full">
                    <Image
                        src={'/google-translate-image.png'}
                        fill
                        alt="Google Translate"
                        objectFit="contain"
                    />
                </div>
            </Column>
        </div>
    );
};
