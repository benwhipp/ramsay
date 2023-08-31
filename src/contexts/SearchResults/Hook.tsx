import { useEffect, useRef, useState } from 'react';

import type { SearchResultsAttributes } from '@/contexts/SearchResults/Context';
import type { Person } from '@/types/result';

export const useSearchResultsData = (): SearchResultsAttributes => {
    const [searchTerm, setSearchTerm] = useState('');
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [results, setResults] = useState<Person[][] | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(0);
    const pageLength = 5;
    const totalNumberOfResults = useRef(0);

    const nextPage = () => {
        if (page < numberOfPages - 1) {
            setPage(page + 1);
        }
    };

    const lastPage = () => {
        setPage(numberOfPages - 1);
    };

    useEffect(() => {
        if (isFetching) {
            const fetchData = async () => {
                setResults(null);
                setError(null);
                try {
                    const response = await fetch(
                        'https://gc-interview-api.azurewebsites.net/api/consultants',
                    );

                    if (!response.ok) {
                        throw new Error('HTTP error ' + response.status);
                    }

                    const data = (await response.json()) as Person[];

                    totalNumberOfResults.current = data.length;

                    const splitPages = () => {
                        const paginatedArray = [];

                        for (let i = 0; i < data.length; i += pageLength) {
                            paginatedArray.push(data.slice(i, i + pageLength));
                        }

                        return paginatedArray;
                    };

                    const paginatedArray = splitPages();

                    console.log('paginatedArray', paginatedArray);

                    setResults(paginatedArray);
                    setNumberOfPages(paginatedArray.length);
                } catch (error) {
                    setError('Sorry, something went wrong. Please try again.');
                }
            };

            void fetchData();
        }
    }, [isFetching]);

    useEffect(() => {
        if (results !== null || error !== null) {
            setIsFetching(false);
        }
    }, [results, error]);

    useEffect(() => {
        setTimeout(() => setIsFetching(true), 500);
    }, []);

    return {
        results,
        isFetching,
        setIsFetching,
        error,
        page,
        setPage,
        numberOfPages,
        searchTerm,
        setSearchTerm,
        setError,
        pageLength,
        totalNumberOfResults: totalNumberOfResults.current,
        nextPage,
        lastPage,
    };
};
