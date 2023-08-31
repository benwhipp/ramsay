import { type AnimationProps, motion } from 'framer-motion';
import { colors } from 'tailwind.config';

interface Props {
    href: string;
    icon: JSX.Element;
}

export const Button = (props: Props) => {
    const variants: AnimationProps['variants'] = {
        initial: {
            backgroundColor: colors['white'],
        },
        hover: {
            backgroundColor: colors['blue-grey'],
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.a
            className="flex h-[41px] w-[41px] items-center justify-center"
            href={props.href}
            variants={variants}
            initial="initial"
            whileHover="hover"
        >
            {props.icon}
        </motion.a>
    );
};
