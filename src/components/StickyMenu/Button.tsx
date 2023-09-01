import Envelope from 'public/icons/envelope.svg';
import LocationDot from 'public/icons/location-dot.svg';
import Phone from 'public/icons/phone.svg';

interface Props {
    href: string;
    icon: 'phone' | 'location' | 'envelope';
}

export const Button = (props: Props) => {
    const iconStyles =
        'h-full max-h-[20px] w-full max-w-[20px] fill-dark-blue group-hover:fill-light-blue';

    const renderIcon = () => {
        switch (props.icon) {
            case 'phone': {
                return <Phone className={iconStyles} />;
            }
            case 'location': {
                return <LocationDot className={iconStyles} />;
            }
            case 'envelope': {
                return <Envelope className={iconStyles} />;
            }
            default: {
                return null;
            }
        }
    };

    return (
        <a
            className="group flex h-[41px] w-[41px] items-center justify-center"
            href={props.href}
        >
            {renderIcon()}
        </a>
    );
};
