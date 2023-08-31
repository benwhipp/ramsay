import ChevronRight from 'public/icons/chevron-right.svg';
import ChevronsRight from 'public/icons/chevrons-right.svg';
import { useContext } from 'react';

import { Button } from '@/components/Results/Pagination/Button';
import { SearchResultsContext } from '@/contexts/SearchResults/Context';

export const Pagnation = () => {
    const { page, setPage, numberOfPages, pageLength, totalNumberOfResults, nextPage, lastPage } =
        useContext(SearchResultsContext);

    const NumberButton = ({ pageNumber }: { pageNumber: number }) => {
        const styles =
            pageNumber === page
                ? 'bg-light-blue text-white'
                : 'border-[1px] border-lighter-grey text-light-blue';

        return (
            <Button
                className={styles}
                onClick={() => setPage(pageNumber)}
            >
                {pageNumber + 1}
            </Button>
        );
    };

    // In a real-world scenario, this would have sensible limits on the number of pages visible at one time with internal pagination of page number buttons controlled by arrows
    const renderButtons = () => {
        const buttonArray = [];

        for (let i = 0; i < numberOfPages; i++) {
            buttonArray.push(
                <NumberButton
                    pageNumber={i}
                    key={`numberButton${i}`}
                />,
            );
        }

        return buttonArray;
    };

    return (
        <div className="flex flex-col">
            <p className="text-xl text-black">
                Showing <span className="text-light-blue">{pageLength}</span> of{' '}
                <span className="text-light-blue">{totalNumberOfResults}</span> results
            </p>
            <div className="flex">
                {renderButtons()}
                <Button
                    className="border-lighter-grey border-[1px]"
                    onClick={nextPage}
                >
                    <ChevronRight className="h-[10px] fill-light-blue" />
                </Button>
                <Button
                    className="border-lighter-grey border-[1px]"
                    onClick={lastPage}
                >
                    <ChevronsRight className="h-[10px] fill-light-blue" />
                </Button>
            </div>
        </div>
    );
};