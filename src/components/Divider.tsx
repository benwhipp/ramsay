interface Props {
    lighter?: boolean;
}

export const Divider = (props: Props) => (
    <div className={`${props?.lighter ? 'bg-blue-grey' : 'bg-light-grey'} h-[1px] w-full`} />
);
