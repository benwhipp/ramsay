import { type AnimationProps, motion } from 'framer-motion';
import tailwindConfig from 'tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';

interface Props {
    content: string;
    href?: string;
    onClick?: () => void;
    variant: 'filled' | 'outlined';
}

export const Button = (props: Props) => {
    const fullConfig = resolveConfig(tailwindConfig);

    const returnStyles = () => {
        if (props.variant === 'outlined') {
            return `border-[1px] border-light-blue`;
        }

        return `text-white`;
    };

    console.log('theme', fullConfig.theme);

    const outlinedVariants: AnimationProps['variants'] = {
        initial: {
            backgroundColor: 'rgba(0, 115, 187, 0)',
            color: fullConfig.theme.colors['dark-blue'],
        },
        hover: {
            backgroundColor: 'rgba(0, 115, 187, 0.7)',
            color: 'white',
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };

    const filledVariants: AnimationProps['variants'] = {
        initial: {
            backgroundColor: '#0073BB',
        },
        hover: {
            backgroundColor: '#0B2F50',
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
                className={`flex flex-1 items-center justify-center px-[15px] py-[17px] font-semibold uppercase ${returnStyles()}`}
                initial="initial"
                whileHover="hover"
                variants={props?.variant === 'filled' ? filledVariants : outlinedVariants}
            >
                {props.content}
            </motion.button>
        </a>
    );
};
