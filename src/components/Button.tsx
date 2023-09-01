import { type AnimationProps, motion } from 'framer-motion';
import { colors } from 'tailwind.config';

interface Props {
    className?: string;
    content: string;
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
    variant: 'filled' | 'outlined';
}

export const Button = (props: Props) => {
    const returnStyles = () => {
        if (props.variant === 'outlined') {
            return `border-[1px] border-light-blue hover:border-lighter-blue text-dark-blue bg-white hover:bg-lighter-blue/10 transition-colors`;
        }

        return `text-white bg-light-blue hover:bg-lighter-blue transition-colors`;
    };

    const outlinedVariants: AnimationProps['variants'] = {
        initial: {},
    };

    const filledVariants: AnimationProps['variants'] = {
        initial: {},
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
                variants={props?.variant === 'filled' ? filledVariants : outlinedVariants}
                disabled={props?.disabled}
            >
                {props.content}
            </motion.button>
        </a>
    );
};
