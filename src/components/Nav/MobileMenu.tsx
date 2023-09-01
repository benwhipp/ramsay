import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

import { MobileNavLink } from '@/components/Nav/MobileNavLink';
import type { NavlinkProps } from '@/types/nav';

interface Props {
    navLinks: NavlinkProps[];
    open: boolean;
}

export const MobileMenu = (props: Props) => {
    useEffect(() => {
        if (props.open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [props.open]);

    const renderNavlinks = () =>
        props.navLinks.map((link) => (
            <MobileNavLink
                {...link}
                key={`mobileNavLink${link.content}`}
            />
        ));

    return (
        <AnimatePresence>
            {props.open && (
                <motion.div
                    className="flex max-h-screen w-full flex-col gap-4 overflow-scroll bg-white px-4 py-7"
                    initial={{ height: 0, paddingTop: 0, paddingBottom: 0 }}
                    animate={{ height: 'auto', paddingTop: 30, paddingBottom: 30 }}
                    exit={{ height: 0, paddingTop: 0, paddingBottom: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    {renderNavlinks()}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
