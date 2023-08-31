import { useContext } from 'react';

import { Header } from '@/components/Results/Header';
import { Pagnation } from '@/components/Results/Pagination';
import { Result } from '@/components/Results/Result';
import { Spinner } from '@/components/Spinner';
import { SearchResultsContext } from '@/contexts/SearchResults/Context';

export const Results = () => {
    const { results, isFetching, error, page } = useContext(SearchResultsContext);

    if (results === null) {
        return (
            <div className="flex w-full">
                <p>Enter a search term to begin.</p>
            </div>
        );
    }

    if (isFetching) {
        return <Spinner />;
    }

    if (error !== null) {
        return (
            <div className="flex w-full">
                <p>{error}</p>
            </div>
        );
    }

    const renderResults = () =>
        results[page].map((result) => (
            <Result
                {...result}
                key={`result${result.Title}`}
            />
        ));

    return (
        <div className="container flex flex-col items-center justify-center gap-12 gap-[50px] px-4 py-16">
            <Header
                postcode="CT20 2UH"
                searchTerm="hip"
                clearSearch={() => {}}
            />
            {renderResults()}
            <Pagnation />
        </div>
    );
};
