import Image from 'next/image';
import ExternalLink from 'public/icons/external-link.svg';
import HospitalPin from 'public/icons/hospital-pin.svg';
import Phone from 'public/icons/phone.svg';

import { Button } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { IconText } from '@/components/IconText';
import { ProfessionalBackground } from '@/components/Results/ProfessionalBackground';
import type { Person } from '@/types/result';

export const Result = (props: Person) => {
    const iconClassName = 'fill-light-blue group-hover:fill-lighter-blue';
    const textClassName = 'text-light-blue group-hover:text-lighter-blue';

    // This is example content to demonstrate View More functionality, as the content from the mock API doesn't contain multiple paragraphs. This can be replaced by props.ProfessionalBackground in order to use that data
    const professionalBackground = `Mr Aldam is a Consultant Orthopaedic Surgeon specialising in joint replacements, revision hip and knee surgery, arthroscopy, back problems, sciatica plus shoulder, ankle and elbow surgery.
	
	This copy can be taken from ‘academic background’ etc. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
	
	Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`;

    const backgroundArray = professionalBackground
        // Split by new line
        .split(/\r?\n/)
        // Remove any empty lines and remove tab characters caused by hard-coded string value
        .filter((i) => i !== '' && i !== '\t')
        // Remove any other tab characters from the valid paragraph strings, again caused by hard-coded string value
        .map((e) => e.replace('\t', ''));

    return (
        <div className="flex w-full flex-col gap-[50px]">
            <div className="flex w-full flex-col gap-10 md:flex-row lg:gap-[113px]">
                <div className="flex flex-1 flex-col gap-[30px]">
                    <div className="flex w-full flex-wrap items-start gap-[33px] md:flex-nowrap">
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
                            <div className="flex flex-col flex-wrap gap-x-[35px] gap-y-3.5 sm:flex-row">
                                <IconText
                                    icon="phone"
                                    iconClassName={iconClassName}
                                    textClassName={textClassName}
                                    text={props.PhoneNo}
                                    href={`tel:${props.PhoneNo}`}
                                />
                                <IconText
                                    icon="link"
                                    iconClassName={iconClassName}
                                    textClassName={textClassName}
                                    text={'Go to hospital website'}
                                    href="/"
                                />
                                <IconText
                                    icon="link"
                                    iconClassName={iconClassName}
                                    textClassName={textClassName}
                                    text={'Get Directions'}
                                    href="/"
                                />
                            </div>
                        </div>
                    </div>
                    <ProfessionalBackground content={backgroundArray} />
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
