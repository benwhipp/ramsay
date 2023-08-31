import { Header } from '@/components/Results/Header';
import { Result } from '@/components/Results/Result';
import { Spinner } from '@/components/Spinner';
import type { Person } from '@/types/result';

interface Props {
    errorMessage?: string;
    loading: boolean;
    results: Person[] | null;
}

export const Results = (props: Props) => {
    if (props.results === null) {
        return (
            <div className="flex w-full">
                <p>Enter a search term to begin.</p>
            </div>
        );
    }

    if (props?.loading) {
        return <Spinner />;
    }

    if (props?.errorMessage) {
        return (
            <div className="flex w-full">
                <p>{props.errorMessage}</p>
            </div>
        );
    }

    const renderResults = () =>
        props.results.map((result) => (
            <Result
                {...result}
                key={`result${result.Title}`}
            />
        ));

    return (
        <div className="flex flex-col gap-[50px]">
            <Header
                postcode="CT20 2UH"
                searchTerm="hip"
                clearSearch={() => {}}
            />
            {renderResults()}
        </div>
    );
};
