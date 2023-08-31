interface Props {
    children: string | JSX.Element | number;
    className: string;
    onClick: () => void;
}

export const Button = (props: Props) => {
    return (
        <button
            className={`flex aspect-square h-[47px] w-[47px] items-center justify-center ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};
