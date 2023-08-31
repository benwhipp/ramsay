import { Button } from '@/components/Button';

export const Bar = () => {
    const Input = ({ label, placeholder }: { label: string; placeholder: string }) => (
        <div className="flex flex-1 flex-col gap-3 px-10 py-6">
            <label className="text-deep-blue text-sm font-medium">{label}*</label>
            <input
                placeholder={placeholder}
                className="text-xl font-medium text-grey"
            />
        </div>
    );

    return (
        <div className="z-10 flex bg-white">
            <Input
                label="Enter treatment name"
                placeholder="Hip"
            />
            <div className="bg-lighter-grey w-[1px]" />
            <Input
                label="Enter postcode or city"
                placeholder="Stansted CM24 1RW, UK"
            />
            <Button
                variant="filled"
                content="Find Specialist"
                className="px-[52px] py-10"
            />
        </div>
    );
};
