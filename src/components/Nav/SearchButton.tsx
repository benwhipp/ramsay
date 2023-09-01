import { AnimatePresence, motion } from 'framer-motion';

interface Props {
    dropdownOpen: boolean;
    handleClick: () => void;
    large?: boolean;
}

export const SearchButton = (props: Props) => {
    return (
        <button
            className="flex items-center"
            onClick={props.handleClick}
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
                        className={props?.large ? 'h-[35px] w-[37px]' : 'h-[22px] w-[22px]'}
                        key={'xmark'}
                    >
                        <path
                            d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z"
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
                        className={props?.large ? 'h-[35px] w-[37px]' : 'h-[22px] w-[22px]'}
                        key="magnifiyingGlass"
                    >
                        <path
                            d="M507.3 484.7l-141.5-141.5C397 306.8 415.1 259.7 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c51.68 0 98.85-18.96 135.2-50.15l141.5 141.5C487.8 510.4 491.9 512 496 512s8.188-1.562 11.31-4.688C513.6 501.1 513.6 490.9 507.3 484.7zM208 384C110.1 384 32 305 32 208S110.1 32 208 32S384 110.1 384 208S305 384 208 384z"
                            className="fill-dark-blue"
                        />
                    </motion.svg>
                )}
            </AnimatePresence>
        </button>
    );
};
