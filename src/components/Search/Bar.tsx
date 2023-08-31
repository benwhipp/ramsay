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
                className="text-xl font-medium text-grey"
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
        }
    };

    return (
        <div className="z-10 flex bg-white">
            <Input
                label="Enter treatment name"
                placeholder="Hip"
                refValue={treatmentName}
            />
            <div className="bg-lighter-grey w-[1px]" />
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
            />
        </div>
    );
};
