import { AnimatePresence, motion } from 'framer-motion';
import ArrowRight from 'public/icons/arrow-right.svg';

import { Divider } from '@/components/Divider';
import { Columns } from '@/components/Nav/Dropdown/Columns';
import type { NavlinkProps } from '@/types/nav';

interface Props {
    content: null | NavlinkProps;
}

export const Dropdown = (props: Props) => {
    return (
        <AnimatePresence>
            {props.content !== null && (
                <motion.div
                    className="absolute bottom-0 left-0 z-10 flex w-full translate-y-full flex-col items-center bg-dark-blue pb-7 pt-[42px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="flex w-full max-w-[1030px] flex-col items-center gap-[30px]">
                        <Columns links={props.content.dropdownMenu as string[]} />
                        <Divider color="bg-white/20" />
                        <button className="group relative text-white">
                            View all {props.content.content}{' '}
                            <ArrowRight className="absolute right-0 top-1/2 w-3 translate-x-[17px] translate-y-[-50%] fill-white transition-all group-hover:translate-x-[22px]" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
