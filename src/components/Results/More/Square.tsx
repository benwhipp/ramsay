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
            className="group relative aspect-square flex-1 overflow-hidden p-[30px]"
            href={props.href}
        >
            <p className="relative z-[1] text-2xl font-medium text-dark-blue transition-colors group-hover:text-light-blue">
                {props.content}
            </p>
            <Image
                src={props.image}
                fill
                alt={`Image of ${props.content}.`}
                className="transition-all group-hover:scale-105"
            />
        </Link>
    );
};
