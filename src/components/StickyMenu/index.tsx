import Envelope from 'public/icons/envelope.svg';
import LocationDot from 'public/icons/location-dot.svg';
import Phone from 'public/icons/phone.svg';

import { Divider } from '@/components/Divider';
import { Button } from '@/components/StickyMenu/Button';

export const StickyMenu = () => {
    return (
        <div
            className="fixed bottom-[138px] left-0 z-10 flex flex-col border-[1px] border-blue-grey bg-white"
            style={{ boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)' }}
        >
            <Button
                icon={<Phone className="h-full max-h-[20px] w-full max-w-[20px] fill-dark-blue" />}
                href="tel:08082582079"
            />
            <Divider lighter />
            <Button
                icon={
                    <Envelope className="h-full max-h-[20px] w-full max-w-[20px] fill-dark-blue" />
                }
                href="mailto:ramsayhealthcare@gmail.com"
            />
            <Divider lighter />
            <Button
                icon={
                    <LocationDot className="h-full max-h-[20px] w-full max-w-[20px] fill-dark-blue" />
                }
                href="https://maps.google.com"
            />
        </div>
    );
};
