import { MainBar } from '@/components/Nav/MainBar';

export const Nav = () => {
    return (
        <nav className="sticky top-0 z-10 flex w-full flex-col overflow-scroll lg:relative">
            <MainBar />
        </nav>
    );
};
