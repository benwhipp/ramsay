import Image from 'next/image';
import { useRef } from 'react';

import { Bar } from '@/components/Search/Bar';

export const Search = () => {
    return (
        <div className="relative flex w-full flex-col gap-[50px] bg-black px-[140px] py-20">
            <h1 className="z-10 text-center text-6xl font-light text-white">
                Search for a Specialist
            </h1>
            <Bar />
            <Image
                src="/hero-banner-background.jpg"
                fill
                alt="Ramsay Health Care - Search for a Specialist"
                className="opacity-[0.7]"
            />
        </div>
    );
};
