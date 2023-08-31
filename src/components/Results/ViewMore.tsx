import { motion, useAnimate } from 'framer-motion';
import ChevronDown from 'public/icons/chevron-down.svg';
import tailwindConfig from 'tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';

interface Props {
    open: boolean;
    setIsOpen: (open: boolean) => void;
}

export const ViewMore = (props: Props) => {
    const fullConfig = resolveConfig(tailwindConfig);
    const [buttonRef, buttonAnimate] = useAnimate();
    const [chevronRef, chevronAnimate] = useAnimate();

    const chevronVariants = {
        initial: { rotate: 0 },
        animate: { rotate: 180 },
    };

    const animateHoverStart = () => {
        void buttonAnimate(
            buttonRef.current,
            { color: fullConfig.theme.colors['dark-blue'] },
            { duration: 0.2, ease: 'easeIn' },
        );

        void chevronAnimate(
            chevronRef.current,
            { fill: fullConfig.theme.colors['dark-blue'] },
            { duration: 0.2, ease: 'easeIn' },
        );
    };

    const animateHoverEnd = () => {
        void buttonAnimate(
            buttonRef.current,
            { color: fullConfig.theme.colors['light-blue'] },
            { duration: 0.2, ease: 'easeOut' },
        );

        void chevronAnimate(
            chevronRef.current,
            { fill: fullConfig.theme.colors['light-blue'] },
            { duration: 0.2, ease: 'easeOut' },
        );
    };

    return (
        <motion.button
            className="mt-5 flex items-center gap-2.5 font-medium"
            onClick={() => props.setIsOpen(!props.open)}
            initial={{ color: fullConfig.theme.colors['light-blue'] }}
            ref={buttonRef}
            onHoverStart={animateHoverStart}
            onHoverEnd={animateHoverEnd}
        >
            {/* Original designs contain inconsistent capitalisation for this string - I've chosen to capitalise both words, however this would be discussed with the designer in a real world build */}
            {props.open ? 'View Less' : 'View More'}
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2"
                viewBox="0 0 448 512"
                variants={chevronVariants}
                initial="initial"
                animate={props?.open ? 'animate' : 'initial'}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >
                <motion.path
                    ref={chevronRef}
                    initial={{ fill: fullConfig.theme.colors['light-blue'] }}
                    d="M4.251 181.1C7.392 177.7 11.69 175.1 16 175.1c3.891 0 7.781 1.406 10.86 4.25l197.1 181.1l197.1-181.1c6.5-6 16.64-5.625 22.61 .9062c6 6.5 5.594 16.59-.8906 22.59l-208 192c-6.156 5.688-15.56 5.688-21.72 0l-208-192C-1.343 197.7-1.749 187.6 4.251 181.1z"
                />
            </motion.svg>
        </motion.button>
    );
};
