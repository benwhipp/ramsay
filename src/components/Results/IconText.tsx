import { motion, useAnimate } from 'framer-motion';

interface Props {
    href?: string;
    icon: JSX.Element;
    text: string;
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
                <p className="text-light-blue">{props.text}</p>
            </div>
            <motion.div
                ref={lineRef}
                className="h-[2px] bg-light-blue"
                initial={{ width: 0 }}
            />
        </motion.a>
    );
};
