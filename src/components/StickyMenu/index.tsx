import { Divider } from '@/components/Divider';
import { Button } from '@/components/StickyMenu/Button';

export const StickyMenu = () => {
    return (
        <div
            className="fixed bottom-[138px] left-0 z-50 hidden flex-col border-[1px] border-blue-grey bg-white lg:flex"
            style={{ boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)' }}
        >
            <Button
                icon="phone"
                href="tel:08082582079"
            />
            <Divider color="bg-blue-grey" />
            <Button
                icon="envelope"
                href="mailto:enquiries@ashsteadhospital.co.uk"
            />
            <Divider color="bg-blue-grey" />
            <Button
                icon="location"
                href="https://maps.google.com"
            />
        </div>
    );
};
