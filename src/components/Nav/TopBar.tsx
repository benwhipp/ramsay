import Phone from 'public/icons/phone.svg';

import { Button } from '@/components/Button';
import { IconText } from '@/components/IconText';

export const TopBar = () => {
    return (
        <div className="flex w-full justify-center bg-dark-blue">
            <div className="flex max-w-[1640px] flex-1 justify-between">
                <div className="flex">
                    <Button
                        variant="filled"
                        content="Patients"
                    />
                    <Button
                        variant="filled"
                        content="Health Professionals"
                    />
                    <Button
                        variant="filled"
                        content="Careers"
                    />
                </div>
                <div className="flex items-center gap-9">
                    <IconText
                        icon={<Phone className="w-[15px] fill-white" />}
                        white
                        text="0808 258 2079"
                        href="tel:08082582079"
                    />
                    <Button
                        variant="filled"
                        content="Contact Us"
                        className="px-[30px]"
                    />
                </div>
            </div>
        </div>
    );
};
