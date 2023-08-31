import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';

import { ViewMore } from '@/components/Results/ViewMore';

interface Props {
    content: string | string[];
}

export const ProfessionalBackground = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const firstParagraphRef = useRef();

    // Only display View More if the background contains more than one paragraph
    if (Array.isArray(props.content)) {
        if (props.content.length > 1) {
            return (
                <motion.div layout>
                    <p className="text-grey">{props.content[0]}</p>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                layout
                            >
                                {props.content.slice(1).map((para, index) => (
                                    <p
                                        key={index}
                                        className="mt-4 text-grey"
                                    >
                                        {para}
                                    </p>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <ViewMore
                        open={isOpen}
                        setIsOpen={setIsOpen}
                    />
                </motion.div>
            );
        }

        return <p className="text-grey">{props.content[0]}</p>;
    }

    return <p className="text-grey">{props.content}</p>;
};
