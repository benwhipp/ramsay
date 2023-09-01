import Image from 'next/image';

import { Bar } from '@/components/Search/Bar';

export const Search = () => {
    return (
        <header className="relative flex w-full flex-col gap-[50px] bg-black px-5 pb-5 pt-[50px] sm:pb-20 sm:pt-20 xl:px-[140px]">
            <h1 className="z-[1] text-center text-5xl font-light text-white sm:text-6xl">
                Search for a Specialist
            </h1>
            <Bar />
            <Image
                src="/hero-banner-background.jpg"
                fill
                alt="Ramsay Health Care - Search for a Specialist"
                className="opacity-[0.7]"
            />
        </header>
    );
};
