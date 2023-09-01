import ChevronRight from 'public/icons/chevron-right.svg';
import ChevronsRight from 'public/icons/chevrons-right.svg';
import { useContext } from 'react';

import { Button } from '@/components/Results/Pagination/Button';
import { SearchResultsContext } from '@/contexts/SearchResults/Context';

export const Pagnation = () => {
    const { page, setPage, numberOfPages, totalNumberOfResults, nextPage, lastPage, results } =
        useContext(SearchResultsContext);

    const inactiveButtonStyles =
        'bg-white hover:bg-lightest-grey border-[1px] border-lightest-grey text-light-blue';

    const NumberButton = ({ pageNumber }: { pageNumber: number }) => {
        const styles = pageNumber === page ? 'bg-light-blue text-white' : inactiveButtonStyles;

        return (
            <Button
                className={styles}
                onClick={() => setPage(pageNumber)}
                disabled={pageNumber === page}
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
        <div className="flex w-full">
            <div className="flex flex-col gap-[30px]">
                <p className="text-xl text-black">
                    Showing <span className="text-light-blue">{results[page]?.length}</span> of{' '}
                    <span className="text-light-blue">{totalNumberOfResults}</span> results
                </p>
                <div className="flex">
                    {renderButtons()}
                    <Button
                        className={inactiveButtonStyles}
                        onClick={nextPage}
                    >
                        <ChevronRight className="h-[10px] fill-light-blue" />
                    </Button>
                    <Button
                        className={inactiveButtonStyles}
                        onClick={lastPage}
                    >
                        <ChevronsRight className="h-[10px] fill-light-blue" />
                    </Button>
                </div>
            </div>
        </div>
    );
};
