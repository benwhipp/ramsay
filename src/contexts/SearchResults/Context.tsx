import { createContext } from 'react';

import type { Person } from '@/types/result';

export interface SearchResultsAttributes {
    error: string | null;
    isFetching: boolean;
    lastPage: () => void;
    nextPage: () => void;
    numberOfPages: number;
    page: number;
    pageLength: number;
    results: Person[][] | null;
    searchTerm: string;
    setError: (error: string | null) => void;
    setIsFetching: (isFetching: boolean) => void;
    setPage: (page: number) => void;
    setSearchTerm: (searchTerm: string) => void;
    totalNumberOfResults: number;
}

export const SearchResultsContext = createContext<SearchResultsAttributes>({
    results: null,
    isFetching: false,
    setIsFetching: () => {},
    error: null,
    page: 0,
    setPage: () => {},
    numberOfPages: 0,
    searchTerm: '',
    setSearchTerm: () => {},
    setError: () => {},
    pageLength: 0,
    totalNumberOfResults: 0,
    nextPage: () => {},
    lastPage: () => {},
});
