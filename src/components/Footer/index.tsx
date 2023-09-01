import Image from 'next/image';
import Envelope from 'public/icons/envelope.svg';
import Phone from 'public/icons/phone.svg';

import { Divider } from '@/components/Divider';
import { Columns } from '@/components/Footer/Columns';
import { SocialLinks } from '@/components/Footer/SocialLinks';
import { IconText } from '@/components/IconText';

export const Footer = () => {
    const date = new Date();

    return (
        <footer className="flex w-full flex-col items-center bg-dark-blue pb-[50px] pt-20">
            <div className="flex w-full max-w-[1640px] flex-col gap-[50px]">
                <div className="flex w-full justify-between">
                    <div className="flex max-w-[276px] flex-col items-start gap-[30px]">
                        <div className="relative aspect-[268/77] w-full">
                            <Image
                                src={'/footer-logos.png'}
                                fill
                                alt="Footer logos"
                                objectFit="contain"
                            />
                        </div>
                        <p className="text-sm text-blue-grey">
                            Ramsay Health Care UK Operations Limited
                            <br />
                            Registered in England No.1532937
                        </p>
                        <p className="text-sm text-blue-grey">
                            Registered office: Level 18, Tower 42, 25 Old Broad Street, London, EC2N
                            1HQ
                            <br />
                            Registered in England No.1532937
                        </p>
                        <IconText
                            textClassName="text-sm"
                            color="grey"
                            icon="phone"
                            iconClassName="h-[15px]"
                            text="0808 258 2079"
                            href="tel:08082582079"
                        />
                        <IconText
                            textClassName="text-sm"
                            color="grey"
                            iconClassName="h-[15px]"
                            icon="envelope"
                            text="enquiries@ashsteadhospital.co.uk"
                            href="mailto:enquiries@ashsteadhospital.co.uk"
                        />
                    </div>
                    <Columns />
                </div>
                <div className="flex flex-col gap-[30px]">
                    <Divider color="bg-lighter-grey opacity-[0.2]" />
                    <div className="flex w-full justify-between">
                        <SocialLinks />
                        <p className="text-sm text-blue-grey">
                            Copyright {date.getFullYear()} © Ramsay Health Care UK
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
