import { Link } from '@/components/Nav/Dropdown/Link';

interface Props {
    links: string[];
}

export const Columns = (props: Props) => {
    const renderLinks = () =>
        props.links.map((link) => (
            <Link
                link={link}
                key={`dropdownLink${link}`}
            />
        ));

    return <div className="grid w-full grid-cols-5 gap-y-[25px]">{renderLinks()}</div>;
};
