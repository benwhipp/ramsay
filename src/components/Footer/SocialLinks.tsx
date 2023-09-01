import Facebook from 'public/icons/facebook-f.svg';
import LinkedIn from 'public/icons/linkedin-in.svg';
import Twitter from 'public/icons/twitter.svg';
import Youtube from 'public/icons/youtube.svg';

interface SocialLinkProps {
    href: string;
    icon: JSX.Element;
}

export const SocialLinks = () => {
    const socialLinkStyles = 'h-[20px] fill-white hover:fill-lighter-blue transition-colors';

    const socialLinks: SocialLinkProps[] = [
        {
            icon: <LinkedIn className={socialLinkStyles} />,
            href: 'https://linkedin.com',
        },
        {
            icon: <Twitter className={socialLinkStyles} />,
            href: 'https://twitter.com',
        },
        {
            icon: <Facebook className={socialLinkStyles} />,
            href: 'https://facebook.com',
        },
        {
            icon: <Youtube className={socialLinkStyles} />,
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
