import { useEffect, useState } from 'react';

interface Props {
    searchTerm: string;
}

export const Results = (props: Props) => {
    const [results, setResults] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    const fetchData = async () => {
        const data = await fetch('https://gc-interview-api.azurewebsites.net/api/consultants');

        console.log(data);
    };

    useEffect(() => {
        if (isFetching) {
            void fetchData();
        }
    }, [isFetching]);

    return <div className="flex flex-col">Results!</div>;
};
