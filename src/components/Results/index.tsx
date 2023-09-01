import { useContext } from 'react';

import { Header } from '@/components/Results/Header';
import { More } from '@/components/Results/More';
import { Pagnation } from '@/components/Results/Pagination';
import { Result } from '@/components/Results/Result';
import { Spinner } from '@/components/Spinner';
import { SearchResultsContext } from '@/contexts/SearchResults/Context';

export const Results = () => {
    const { results, isFetching, error, page, searchTermPostcode, clearSearch } =
        useContext(SearchResultsContext);

    const renderContent = () => {
        if (isFetching) {
            return (
                <div className="flex w-full justify-center p-20">
                    <Spinner />
                </div>
            );
        }

        if (results === null) {
            return (
                <div className="flex w-full justify-center px-4 py-20">
                    <p className="text-center text-xl font-medium text-light-blue">
                        Enter a search term to begin.
                    </p>
                </div>
            );
        }

        if (error !== null) {
            return (
                <div className="flex w-full justify-center p-20">
                    <p className="text-xl font-medium text-light-blue">{error}</p>
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
            <>
                <Header
                    postcode={searchTermPostcode.postcode}
                    searchTerm={searchTermPostcode.searchTerm}
                    clearSearch={clearSearch}
                />
                {renderResults()}
                <Pagnation />
            </>
        );
    };

    return (
        <div className="flex w-full justify-center px-5 py-16">
            <div className="flex max-w-[1170px] flex-1 flex-col items-center justify-center gap-12 gap-[50px]">
                {renderContent()}
                <More />
            </div>
        </div>
    );
};
