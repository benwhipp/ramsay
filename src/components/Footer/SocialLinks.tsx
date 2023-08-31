import Facebook from 'public/icons/facebook-f.svg';
import LinkedIn from 'public/icons/linkedin-in.svg';
import Twitter from 'public/icons/twitter.svg';
import Youtube from 'public/icons/youtube.svg';

interface SocialLinkProps {
    href: string;
    icon: JSX.Element;
}

export const SocialLinks = () => {
    const socialLinks: SocialLinkProps[] = [
        {
            icon: <LinkedIn className="h-[20px] fill-white" />,
            href: 'https://linkedin.com',
        },
        {
            icon: <Twitter className="h-[20px] fill-white" />,
            href: 'https://twitter.com',
        },
        {
            icon: <Facebook className="h-[20px] fill-white" />,
            href: 'https://facebook.com',
        },
        {
            icon: <Youtube className="h-[20px] fill-white" />,
            href: 'https://youtube.com',
        },
    ];

    const SocialLink = (props: SocialLinkProps) => (
        <a
            href={props.href}
            target="_blank"
        >
            {props.icon}
        </a>
    );

    const renderSocialLinks = () =>
        socialLinks.map((link) => (
            <SocialLink
                {...link}
                key={`socialMediaLink${link.href}`}
            />
        ));

    return <div className="flex items-center gap-5">{renderSocialLinks()}</div>;
};
