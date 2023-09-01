import { motion, useAnimate } from 'framer-motion';

import type { NavlinkProps } from '@/types/nav';

interface Props extends NavlinkProps {
    setDropdownContent: (content: NavlinkProps | null) => void;
}

export const NavLink = (props: Props) => {
    const [lineRef, lineAnimate] = useAnimate();

    const animateHoverStart = () => {
        if (props?.dropdownMenu) {
            props.setDropdownContent({ content: props.content, dropdownMenu: props.dropdownMenu });
        } else {
            props.setDropdownContent(null);
        }

        void lineAnimate(lineRef.current, { width: '100%' }, { duration: 0.2, ease: 'easeIn' });
    };

    const animateHoverEnd = () => {
        void lineAnimate(lineRef.current, { width: 0 }, { duration: 0.1, ease: 'easeOut' });
    };

    return (
        <motion.button
            className="lg:text-regular group relative flex items-center gap-[3px] p-4 text-[17px] font-medium xl:text-[17px]"
            onHoverStart={animateHoverStart}
            onHoverEnd={animateHoverEnd}
        >
            {props.content}
            {props?.dropdownMenu && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-[8px]"
                >
                    <path
                        d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
                        className="fill-dark-blue transition-colors group-hover:fill-light-blue"
                    />
                </svg>
            )}
            <motion.div
                ref={lineRef}
                className="absolute bottom-0 left-0 z-10 h-1 bg-light-blue"
                initial={{ width: 0 }}
            />
        </motion.button>
    );
};
