import Image from 'next/image';
import ExternalLink from 'public/icons/external-link.svg';
import HospitalPin from 'public/icons/hospital-pin.svg';
import Phone from 'public/icons/phone.svg';

import { Button } from '@/components/Button';
import { Divider } from '@/components/Results/Divider';
import { IconText } from '@/components/Results/IconText';
import type { Person } from '@/types/result';

export const Result = (props: Person) => {
    const content = `Mr Aldam is a Consultant Orthopaedic Surgeon specialising in joint replacements, revision hip and knee surgery, arthroscopy, back problems, sciatica plus shoulder, ankle and elbow surgery.

	This copy can be taken from ‘academic background’ etc. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
	
	Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. `;

    return (
        <div className="flex w-full flex-col gap-[50px]">
            <div className="flex w-full gap-[113px]">
                <div className="flex flex-1 flex-col gap-[30px]">
                    <div className="flex w-full items-start gap-[33px]">
                        <Image
                            src={props.ProfileImage}
                            width={86}
                            height={86}
                            alt={`Image of ${props.Title}`}
                        />
                        <div className="flex flex-col gap-2.5">
                            <h3 className="text-2xl font-medium text-dark-blue">{props.Title}</h3>
                            <div className="flex items-center gap-[10px]">
                                <HospitalPin className="fill-light-blue" />
                                <p className="text-dark-blue">
                                    Based at: {props.Hospital}{' '}
                                    <span className="text-light-blue">•</span> 9 miles
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
                    <p className="text-grey">{props.ProfessionalBackground}</p>
                </div>
                <div className="flex flex-col justify-stretch gap-[15px]">
                    <Button
                        content="View Full Profile"
                        variant="outlined"
                    />
                    <Button
                        content="Book An Appointment"
                        variant="filled"
                    />
                </div>
            </div>
            <Divider />
        </div>
    );
};
