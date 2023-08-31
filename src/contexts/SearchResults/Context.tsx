import { createContext } from 'react';

import type { Person } from '@/types/result';

export interface SearchResultsAttributes {
    error: string | null;
    isFetching: boolean;
    results: Person[] | null;
    setError: (error: string | null) => void;
    setIsFetching: (isFetching: boolean) => void;
    setResults: (results: Person[] | null) => void;
}

export const SearchResultsContext = createContext<SearchResultsAttributes>({
    results: null,
    setResults: () => {},
    isFetching: false,
    setIsFetching: () => {},
    error: null,
    setError: () => {},
});
