import { type AnimationProps, motion } from 'framer-motion';
import { colors } from 'tailwind.config';

interface Props {
    className?: string;
    content: string;
    href?: string;
    onClick?: () => void;
    variant: 'filled' | 'outlined';
}

export const Button = (props: Props) => {
    const returnStyles = () => {
        if (props.variant === 'outlined') {
            return `border-[1px] border-light-blue`;
        }

        return `text-white`;
    };

    const outlinedVariants: AnimationProps['variants'] = {
        initial: {
            backgroundColor: 'rgba(0, 115, 187, 0)',
            color: colors['dark-blue'],
        },
        hover: {
            backgroundColor: 'rgba(0, 115, 187, 0.7)',
            color: colors['white'],
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };

    const filledVariants: AnimationProps['variants'] = {
        initial: {
            backgroundColor: colors['light-blue'],
        },
        hover: {
            backgroundColor: colors['dark-blue'],
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };

    return (
        <a
            href={props?.href}
            target="_blank"
            className="flex"
        >
            <motion.button
                onClick={props.onClick}
                className={`flex flex-1 items-center justify-center px-[15px] py-[17px] font-semibold uppercase ${returnStyles()} ${props?.className} tracking-wider`}
                initial="initial"
                whileHover="hover"
                variants={props?.variant === 'filled' ? filledVariants : outlinedVariants}
            >
                {props.content}
            </motion.button>
        </a>
    );
};
