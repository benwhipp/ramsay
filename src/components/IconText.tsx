import { motion, useAnimate } from 'framer-motion';

interface Props {
    color?: 'white' | 'grey';
    href?: string;
    icon: JSX.Element;
    text: string;
    textClassName?: string;
}

export const IconText = (props: Props) => {
    const [lineRef, lineAnimate] = useAnimate();

    const animateHoverStart = () => {
        void lineAnimate(lineRef.current, { width: '100%' }, { duration: 0.2, ease: 'easeIn' });
    };

    const animateHoverEnd = () => {
        void lineAnimate(lineRef.current, { width: 0 }, { duration: 0.1, ease: 'easeOut' });
    };

    return (
        <motion.a
            className="flex flex-col gap-1"
            href={props?.href}
            target="_blank"
            onHoverStart={animateHoverStart}
            onHoverEnd={animateHoverEnd}
        >
            <div className="flex items-center gap-[10px]">
                {props.icon}
                <p
                    className={`${
                        props?.color
                            ? props.color === 'white'
                                ? 'text-white'
                                : 'text-blue-grey'
                            : 'text-light-blue'
                    } ${props?.textClassName}`}
                >
                    {props.text}
                </p>
            </div>
            <motion.div
                ref={lineRef}
                className={`h-[2px] ${
                    props?.color
                        ? props.color === 'white'
                            ? 'bg-white'
                            : 'bg-blue-grey'
                        : 'bg-light-blue'
                }`}
                initial={{ width: 0 }}
            />
        </motion.a>
    );
};
