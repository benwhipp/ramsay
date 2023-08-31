import Link from 'next/link';

interface Props {
    content: string;
}

export const ColumnLink = (props: Props) => {
    return (
        <Link
            href={`/${props.content}`}
            className="text-blue-grey transition-all hover:text-white"
        >
            {props.content}
        </Link>
    );
};
