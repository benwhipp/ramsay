import { MainBar } from '@/components/Nav/MainBar';
import { TopBar } from '@/components/Nav/TopBar';

export const Nav = () => {
    return (
        <nav className="flex w-full flex-col">
            <TopBar />
            <MainBar />
        </nav>
    );
};
