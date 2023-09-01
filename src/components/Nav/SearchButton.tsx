import { AnimatePresence, type AnimationProps, motion } from 'framer-motion';
import MaginifyingGlass from 'public/icons/magnifying-glass.svg';
import XMark from 'public/icons/xmark.svg';

interface Props {
    dropdownOpen: boolean;
    setDropdownOpen: (open: boolean) => void;
}

export const SearchButton = (props: Props) => {
    const variants: AnimationProps['variants'] = {
        initial: {
            d: 'M507.3 484.7l-141.5-141.5C397 306.8 415.1 259.7 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c51.68 0 98.85-18.96 135.2-50.15l141.5 141.5C487.8 510.4 491.9 512 496 512s8.188-1.562 11.31-4.688C513.6 501.1 513.6 490.9 507.3 484.7zM208 384C110.1 384 32 305 32 208S110.1 32 208 32S384 110.1 384 208S305 384 208 384z',
        },
        animate: {
            d: 'M317.7 402.3c3.125 3.125 3.125 8.188 0 11.31c-3.127 3.127-8.186 3.127-11.31 0L160 267.3l-146.3 146.3c-3.127 3.127-8.186 3.127-11.31 0c-3.125-3.125-3.125-8.188 0-11.31L148.7 256L2.344 109.7c-3.125-3.125-3.125-8.188 0-11.31s8.188-3.125 11.31 0L160 244.7l146.3-146.3c3.125-3.125 8.188-3.125 11.31 0s3.125 8.188 0 11.31L171.3 256L317.7 402.3z',
        },
    };

    return (
        <button
            className="flex items-center"
            onClick={() => props.setDropdownOpen(!props.dropdownOpen)}
        >
            <AnimatePresence
                initial={false}
                mode="wait"
            >
                {props.dropdownOpen ? (
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1, ease: 'easeOut' }}
                        className="h-[22px] w-[22px]"
                        key={'xmark'}
                    >
                        <path
                            d="M317.7 402.3c3.125 3.125 3.125 8.188 0 11.31c-3.127 3.127-8.186 3.127-11.31 0L160 267.3l-146.3 146.3c-3.127 3.127-8.186 3.127-11.31 0c-3.125-3.125-3.125-8.188 0-11.31L148.7 256L2.344 109.7c-3.125-3.125-3.125-8.188 0-11.31s8.188-3.125 11.31 0L160 244.7l146.3-146.3c3.125-3.125 8.188-3.125 11.31 0s3.125 8.188 0 11.31L171.3 256L317.7 402.3z"
                            className="fill-dark-blue"
                        />
                    </motion.svg>
                ) : (
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1, ease: 'easeOut' }}
                        className="h-[22px] w-[22px]"
                        key="magnifiyingGlass"
                    >
                        <path
                            d="M507.3 484.7l-141.5-141.5C397 306.8 415.1 259.7 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c51.68 0 98.85-18.96 135.2-50.15l141.5 141.5C487.8 510.4 491.9 512 496 512s8.188-1.562 11.31-4.688C513.6 501.1 513.6 490.9 507.3 484.7zM208 384C110.1 384 32 305 32 208S110.1 32 208 32S384 110.1 384 208S305 384 208 384z"
                            className="h-[22px] w-[22px] fill-dark-blue"
                        />
                    </motion.svg>
                )}
            </AnimatePresence>
        </button>
    );
};
