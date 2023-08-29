import Image from 'next/image';
import ExternalLink from 'public/icons/external-link.svg';
import HospitalPin from 'public/icons/hospital-pin.svg';
import Phone from 'public/icons/phone.svg';

import { IconText } from '@/components/Results/IconText';
import type { Person } from '@/types/result';

export const Result = (props: Person) => {
    return (
        <div className="flex w-full flex-col">
            <div className="flex w-full gap-[33px]">
                <Image
                    src={props.ProfileImage}
                    width={86}
                    height={86}
                    alt={`Image of ${props.Title}`}
                />
                <div className="flex flex-col">
                    <h3>{props.Title}</h3>
                    <div className="flex items-center gap-[10px]">
                        <HospitalPin className="fill-light-blue" />
                        <p>
                            Based at: {props.Hospital} <span className="text-light-blue">•</span> 9
                            miles
                        </p>
                    </div>
                    <div className="flex gap-[35px]">
                        <IconText
                            icon={<Phone className="fill-light-blue" />}
                            text={props.PhoneNo}
                        />
                        <IconText
                            icon={<ExternalLink className="fill-light-blue" />}
                            text={'Go to hospital website'}
                            href="/"
                        />
                        <IconText
                            icon={<ExternalLink className="fill-light-blue" />}
                            text={'Get Directions'}
                            href="/"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
