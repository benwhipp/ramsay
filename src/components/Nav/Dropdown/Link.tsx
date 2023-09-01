import NextLink from 'next/link';

interface Props {
    link: string;
}

export const Link = (props: Props) => (
    <NextLink
        href={`/${props.link.toLowerCase()}`}
        className="text-[17px] text-white/80 transition-colors hover:text-white hover:underline"
    >
        {props.link}
    </NextLink>
);
