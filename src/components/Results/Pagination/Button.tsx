interface Props {
    children: string | JSX.Element | number;
    className: string;
    disabled?: boolean;
    onClick: () => void;
}

export const Button = (props: Props) => {
    return (
        <button
            className={`flex aspect-square h-[47px] w-[47px] items-center justify-center transition-colors  ${props.className}`}
            onClick={props.onClick}
            disabled={props?.disabled}
        >
            {props.children}
        </button>
    );
};
