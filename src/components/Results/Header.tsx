import CloseIcon from 'public/icons/close.svg';

import { Divider } from '@/components/Divider';

interface Props {
    clearSearch: () => void;
    postcode: string;
    searchTerm: string;
}

export const Header = (props: Props) => {
    return (
        <div className="flex w-full flex-col gap-[50px]">
            <div className="flex flex-col">
                <h2 className="text-[40px] text-dark-blue">Search Results</h2>
                <div className="flex items-center gap-5">
                    <p className="text-xl text-grey">
                        Displaying results for: {props.searchTerm}, Near: {props.postcode}
                    </p>
                    <button
                        onClick={props.clearSearch}
                        className="group flex items-center gap-1.5"
                    >
                        <CloseIcon className="group-hover:fill-lighter-blue h-[20px] w-[20px] fill-light-blue transition-colors" />
                        <span className="transition-all group-hover:text-light-blue group-hover:underline">
                            Clear Search
                        </span>
                    </button>
                </div>
            </div>
            <Divider />
        </div>
    );
};
