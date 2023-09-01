import { useContext, useRef } from 'react';

import { Button } from '@/components/Button';
import { SearchResultsContext } from '@/contexts/SearchResults/Context';

export const Bar = () => {
    const treatmentName = useRef('');
    const postcodeCity = useRef('');
    const { setSearchTermPostcode } = useContext(SearchResultsContext);

    const Input = ({
        label,
        placeholder,
        refValue,
    }: {
        label: string;
        placeholder: string;
        refValue: React.MutableRefObject<string>;
    }) => (
        <div className="flex flex-1 flex-col gap-3 px-10 py-6">
            <label className="text-deep-blue text-sm font-medium">{label}*</label>
            <input
                placeholder={placeholder}
                className="text-xl font-medium text-grey focus-visible:outline-none"
                onChange={(e) => (refValue.current = e.target.value)}
            />
        </div>
    );

    const handleClick = () => {
        if (
            treatmentName?.current &&
            treatmentName.current?.length > 0 &&
            postcodeCity.current &&
            postcodeCity.current?.length > 0
        ) {
            setSearchTermPostcode({
                searchTerm: treatmentName.current,
                postcode: postcodeCity.current,
            });
            treatmentName.current = '';
            postcodeCity.current = '';
        }
    };

    return (
        <div className="z-[1] flex flex-col bg-white lg:flex-row">
            <Input
                label="Enter treatment name"
                placeholder="Hip"
                refValue={treatmentName}
            />
            <div className="h-[1px] w-full bg-lighter-grey lg:h-auto lg:w-[1px]" />
            <Input
                label="Enter postcode or city"
                placeholder="Stansted CM24 1RW, UK"
                refValue={postcodeCity}
            />
            <Button
                variant="filled"
                content="Find Specialist"
                className="px-[52px] py-10"
                onClick={handleClick}
                // Client-side validation would be added and a disabled state controller here
                // disabled={}
            />
        </div>
    );
};
