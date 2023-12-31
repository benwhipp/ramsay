import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { TopBar } from '@/components/Nav/TopBar';
import { Results } from '@/components/Results';
import { Search } from '@/components/Search';
import { StickyMenu } from '@/components/StickyMenu';
import { SearchResultsContext } from '@/contexts/SearchResults/Context';
import { useSearchResultsData } from '@/contexts/SearchResults/Hook';

const Home = () => {
    return (
        <>
            <Head>
                <title>Ramsay Health Care - Search for a Specialist</title>
                <meta
                    name="Ramsay Health Care"
                    content="Ramsay Health Care"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            <main className="relative flex min-h-screen flex-col items-center justify-center bg-white">
                <TopBar />
                <Nav />
                <StickyMenu />
                <SearchResultsContext.Provider value={useSearchResultsData()}>
                    <Search />
                    <Results />
                </SearchResultsContext.Provider>
                <Footer />
            </main>
        </>
    );
};

export default Home;
