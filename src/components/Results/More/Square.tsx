import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export interface SquareProps {
    content: string;
    href: string;
    image: string;
}

export const Square = (props: SquareProps) => {
    return (
        <Link
            className="relative aspect-square flex-1 p-[30px]"
            href={props.href}
        >
            <p className="relative z-10 text-2xl font-medium text-dark-blue">{props.content}</p>
            <Image
                src={props.image}
                fill
                alt={`Image of ${props.content}.`}
            />
        </Link>
    );
};
