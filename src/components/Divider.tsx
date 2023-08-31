interface Props {
    color?: string;
}

export const Divider = (props: Props) => (
    <div className={`${props?.color || 'bg-light-grey'} h-[1px] w-full`} />
);
