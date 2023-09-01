import { useState } from 'react';

import { Button } from '@/components/Button';
import { IconText } from '@/components/IconText';
import { Tab } from '@/components/Nav/Tab';

export const TopBar = () => {
    const tabs = ['Patients', 'Health Professionals', 'Careers'];

    const [activeTab, setActiveTab] = useState('Patients');

    const renderTabs = () =>
        tabs.map((tab) => (
            <Tab
                content={tab}
                // activeTab in key forces re-render, correctly resetting variant styles on change
                key={`topBarTab${tab}${activeTab}`}
                active={tab === activeTab}
                setActiveTab={setActiveTab}
            />
        ));

    return (
        <div className="flex w-full justify-center bg-dark-blue">
            <div className="flex max-w-[1640px] flex-1 justify-between">
                <div className="flex">{renderTabs()}</div>
                <div className="hidden items-center gap-9 md:flex">
                    <IconText
                        icon="phone"
                        iconClassName="w-[15px] fill-white"
                        color="white"
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
