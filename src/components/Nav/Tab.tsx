import { type AnimationProps, motion } from 'framer-motion';
import { colors } from 'tailwind.config';

interface Props {
    active: boolean;
    content: string;
    setActiveTab: (tab: string) => void;
}

export const Tab = (props: Props) => {
    const activeVariants: AnimationProps['variants'] = {
        initial: {
            backgroundColor: colors['blue-grey'],
            color: colors['dark-blue'],
        },
        hover: {
            backgroundColor: colors['blue-grey'],
            color: colors['dark-blue'],
        },
    };

    const inactiveVariants: AnimationProps['variants'] = {
        initial: {
            backgroundColor: colors['dark-blue'],
            color: colors['white'],
        },
        hover: {
            backgroundColor: 'rgba(219, 227, 234, 0.5)',
            color: colors['white'],
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.button
            className="flex items-center justify-center px-4 py-3.5 font-medium"
            initial="initial"
            whileHover="hover"
            variants={props?.active ? activeVariants : inactiveVariants}
            disabled={props?.active}
            onClick={() => props.setActiveTab(props.content)}
        >
            {props.content}
        </motion.button>
    );
};
