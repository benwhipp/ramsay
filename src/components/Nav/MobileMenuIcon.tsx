import { motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

interface Props {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export const MobileMenuIcon = (props: Props) => {
    const [topBar, topBarAnimate] = useAnimate();
    const [middleBar, middleBarAnimate] = useAnimate();
    const [bottomBar, bottomBarAnimate] = useAnimate();

    useEffect(() => {
        if (props.isOpen) {
            void topBarAnimate(
                topBar.current,
                { rotate: 45, originX: '5%', originY: '35%' },
                { duration: 0.5 },
            );
            void middleBarAnimate(middleBar.current, { opacity: 0 }, { duration: 0.5 });
            void bottomBarAnimate(
                bottomBar.current,
                { rotate: -45, originX: '10%', originY: '65%' },
                { duration: 0.5 },
            );
        } else {
            void topBarAnimate(
                topBar.current,
                { rotate: 0, originX: '5%', originY: '35%' },
                { duration: 0.5 },
            );
            void middleBarAnimate(middleBar.current, { opacity: 1 }, { duration: 0.5 });
            void bottomBarAnimate(
                bottomBar.current,
                { rotate: 0, originX: '10%', originY: '65%' },
                { duration: 0.5 },
            );
        }
    }, [props.isOpen]);

    return (
        <button
            onClick={() => props.setIsOpen(!props.isOpen)}
            className="aspect-square w-[31px]"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <motion.path
                    d="M0 80C0 71.16 7.164 64 16 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H16C7.164 96 0 88.84 0 80zM"
                    className="fill-dark-blue"
                    ref={topBar}
                />
                <motion.path
                    d="M0 240C0 231.2 7.164 224 16 224H432C440.8 224 448 231.2 448 240C448 248.8 440.8 256 432 256H16C7.164 256 0 248.8 0 240zM"
                    className="fill-dark-blue"
                    ref={middleBar}
                />
                <motion.path
                    d="M432 416H16C7.164 416 0 408.8 0 400C0 391.2 7.164 384 16 384H432C440.8 384 448 391.2 448 400C448 408.8 440.8 416 432 416z"
                    className="fill-dark-blue"
                    ref={bottomBar}
                />
            </svg>
        </button>
    );
};
