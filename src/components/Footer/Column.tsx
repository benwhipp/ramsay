interface Props {
    children: JSX.Element | JSX.Element[];
    className?: string;
    title: string;
}

export const Column = (props: Props) => {
    return (
        <div className={`flex flex-col gap-[15px] ${props?.className}`}>
            <h4 className="mb-1.5 font-medium uppercase tracking-wider text-white">
                {props.title}
            </h4>
            {props.children}
        </div>
    );
};
