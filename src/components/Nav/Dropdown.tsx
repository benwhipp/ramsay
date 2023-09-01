import { AnimatePresence, motion } from 'framer-motion';

import type { NavlinkProps } from '@/types/nav';

interface Props {
    content: null | NavlinkProps;
}

export const Dropdown = (props: Props) => {
    return (
        <AnimatePresence>
            {props.content !== null && (
                <motion.div
                    className="absolute bottom-0 z-20 w-full translate-y-full bg-dark-blue"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    Dropdown Menu
                </motion.div>
            )}
        </AnimatePresence>
    );
};
