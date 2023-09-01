import { motion, useAnimate } from 'framer-motion';
import { colors } from 'tailwind.config';

export interface NavlinkProps {
    content: string;
    dropdownMenu?: string[];
}

export const NavLink = (props: NavlinkProps) => {
    const [lineRef, lineAnimate] = useAnimate();

    const animateHoverStart = () => {
        void lineAnimate(lineRef.current, { width: '100%' }, { duration: 0.2, ease: 'easeIn' });
    };

    const animateHoverEnd = () => {
        void lineAnimate(lineRef.current, { width: 0 }, { duration: 0.1, ease: 'easeOut' });
    };

    return (
        <motion.button
            className="relative flex items-center gap-[3px] p-4 text-[17px] font-medium"
            onHoverStart={animateHoverStart}
            onHoverEnd={animateHoverEnd}
        >
            {props.content}
            {props?.dropdownMenu && (
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-[8px]"
                >
                    <motion.path
                        d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
                        initial={{ fill: colors['dark-blue'] }}
                    />
                </motion.svg>
            )}
            <motion.div
                ref={lineRef}
                className="absolute bottom-0 left-0 z-10 h-1 bg-light-blue"
                initial={{ width: 0 }}
            />
        </motion.button>
    );
};
