import { AnimatePresence, motion } from 'framer-motion';
import Minus from 'public/icons/minus.svg';
import Plus from 'public/icons/plus.svg';
import { useState } from 'react';

import type { NavlinkProps } from '@/types/nav';

export const MobileNavLink = (props: NavlinkProps) => {
    const [expandOpen, setExpandOpen] = useState(false);

    const renderButton = () => {
        if (props.dropdownMenu) {
            const buttonStyles = 'fill-light-blue w-4';

            if (expandOpen) {
                return <Minus className={buttonStyles} />;
            }

            return <Plus className={buttonStyles} />;
        }

        return null;
    };

    const renderExpandButtons = () => {
        if (props.dropdownMenu) {
            return props.dropdownMenu.map((expandButton) => (
                <motion.button
                    className="group relative flex items-center gap-4 text-2xl font-medium"
                    key={`expandButton${expandButton}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    {expandButton}
                </motion.button>
            ));
        }

        return null;
    };

    return (
        <div className="flex w-full flex-col gap-4">
            <button
                className="group relative flex items-center gap-4 text-2xl font-medium"
                onClick={() => setExpandOpen(!expandOpen)}
            >
                {props.content}
                {renderButton()}
            </button>
            <AnimatePresence>
                {props.dropdownMenu && expandOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="flex w-full flex-col gap-4"
                    >
                        {renderExpandButtons()}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
