import Envelope from 'public/icons/envelope.svg';
import ExternalLink from 'public/icons/external-link.svg';
import Phone from 'public/icons/phone.svg';

interface Props {
    color?: 'white' | 'grey';
    href?: string;
    icon: 'phone' | 'link' | 'envelope';
    iconClassName?: string;
    text: string;
    textClassName?: string;
}

export const IconText = (props: Props) => {
    const renderIcon = () => {
        switch (props.icon) {
            case 'phone': {
                return (
                    <Phone className={`fill-blue-grey transition-colors ${props?.iconClassName}`} />
                );
            }
            case 'link': {
                return (
                    <ExternalLink
                        className={`fill-blue-grey transition-colors ${props?.iconClassName}`}
                    />
                );
            }
            case 'envelope': {
                return (
                    <Envelope
                        className={`fill-blue-grey transition-colors ${props?.iconClassName}`}
                    />
                );
            }
            default: {
                return null;
            }
        }
    };

    return (
        <a
            className="group flex flex-col gap-1"
            href={props?.href}
            target="_blank"
        >
            <div className="flex items-center gap-[10px]">
                {renderIcon()}
                <p
                    className={`transition-colors group-hover:underline ${
                        props?.color
                            ? props.color === 'white'
                                ? 'text-white'
                                : 'text-blue-grey'
                            : 'text-light-blue'
                    } ${props?.textClassName}`}
                >
                    {props.text}
                </p>
            </div>
        </a>
    );
};
