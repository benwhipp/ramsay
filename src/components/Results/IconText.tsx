interface Props {
    href?: string;
    icon: JSX.Element;
    text: string;
}

export const IconText = (props: Props) => (
    <a
        className="flex items-center gap-[10px]"
        href={props?.href}
        target="_blank"
    >
        {props.icon}
        <p>{props.text}</p>
    </a>
);
