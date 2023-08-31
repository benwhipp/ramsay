import { motion } from 'framer-motion';
import ChevronDown from 'public/icons/chevron-down.svg';

interface Props {
    open: boolean;
    setIsOpen: (open: boolean) => void;
}

export const ViewMore = (props: Props) => {
    const variants = {
        initial: { rotate: 0 },
        animate: { rotate: 180 },
    };

    return (
        <button
            className="mt-5 flex items-center gap-2.5 font-medium text-light-blue"
            onClick={() => props.setIsOpen(!props.open)}
        >
            {/* Original designs contain inconsistent capitalisation for this string - I've chosen to capitalise both words, however this would be discussed with the designer in a real world build */}
            {props.open ? 'View Less' : 'View More'}
            <motion.div
                variants={variants}
                initial="initial"
                animate={props?.open ? 'animate' : 'initial'}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex items-center"
            >
                <ChevronDown className="h-[8px] fill-light-blue" />
            </motion.div>
        </button>
    );
};
