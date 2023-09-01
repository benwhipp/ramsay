import { AnimatePresence, motion } from 'framer-motion';
// Issues with getting search-icon svg to display correctly - leaving as a font-awesome icon for now
import MagnifyingGlass from 'public/icons/magnifying-glass.svg';

interface Props {
    open: boolean;
}

export const SearchDropdown = (props: Props) => {
    return (
        <AnimatePresence>
            {props.open && (
                <motion.div
                    className="absolute bottom-0 left-0 z-20 flex w-full translate-y-full justify-center border-b-[1px] border-b-light-grey bg-white px-6 sm:border-b-0"
                    initial={{ height: 0, paddingTop: 0, paddingBottom: 0 }}
                    animate={{ height: 'auto', paddingTop: 64, paddingBottom: 64 }}
                    exit={{ height: 0, paddingTop: 0, paddingBottom: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    <motion.div
                        className="relative flex w-full max-w-[673px] justify-between gap-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <input
                            type="text"
                            placeholder="Type words and hit enter"
                            className="flex-1 border-b-[1px] border-b-dark-blue/50 pb-[30px] pr-10 text-lg text-grey focus-visible:outline-none lg:text-[30px]"
                        />
                        <button className="absolute right-0 top-0">
                            <MagnifyingGlass className="h-7 w-7 fill-dark-blue" />
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
