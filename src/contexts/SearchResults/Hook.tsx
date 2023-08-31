import { useEffect, useRef, useState } from 'react';

import type { SearchResultsAttributes } from '@/contexts/SearchResults/Context';
import type { Person } from '@/types/result';

export const useSearchResultsData = (): SearchResultsAttributes => {
    const [results, setResults] = useState<Person[] | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState<string | null>(null);

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

                    setResults(data);
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
        setResults,
        isFetching,
        setIsFetching,
        error,
        setError,
    };
};
