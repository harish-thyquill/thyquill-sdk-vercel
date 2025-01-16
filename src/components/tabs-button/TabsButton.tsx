/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import "./tabsButton.scss";
import { Chevron_left, Chevron_right } from "../../assets/QuillIcons";
import _ from 'lodash';

interface TabsInterface {
    label: string,
    value: string,
}

export const Tabs = ({
    landingRef,
    tabs,
    onClick,
    value,
    brandColor
}: {
    landingRef: any,
    tabs: TabsInterface[],
    onClick: (value: string) => void,
    value: string,
    brandColor: string
}) => {
    const tabsRef = useRef<HTMLDivElement>(null);
    const [hideBtns, setHideBtns] = useState(false);

    const scrollLeft = () => {
        tabsRef?.current?.scrollBy({
            left: -150,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        tabsRef?.current?.scrollBy({
            left: 150,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        if (tabsRef.current && landingRef.current) {
            const tabWidth = _.sumBy(Array.from(tabsRef.current.querySelectorAll('.tab')), 'offsetWidth');
            if (landingRef.current.offsetWidth <= tabWidth) {
                setHideBtns(true)
            }
        }
    }, [tabsRef])

    return (
        <div className="scrollable_tabs_container">
            {hideBtns && <button onClick={scrollLeft} className="scroll_left_btn">
                <Chevron_left width={20} height={20} />
            </button>}
            <div className="tabs_wrapper" style={{
                margin: hideBtns ? '0 35px' : 'auto'
            }} ref={tabsRef}>
                {tabs.map((tab: TabsInterface, index: number) => (
                    <div
                        key={index}
                        onClick={() => {
                            onClick(tab.value)
                        }}
                        className={`tab ${value === tab.value ? 'active' : ''}`}
                        style={{
                            ...(value === tab.value && {
                                borderBottom: `2px solid ${brandColor || '#7F56D9'}`,
                                transition: 'border-bottom .4s ease',
                            })
                        }}
                    >
                        <p>{tab.label}</p>
                    </div>
                ))}
            </div>
            {hideBtns && <button onClick={scrollRight} className="scroll_right_btn">
                <Chevron_right width={20} height={20} />
            </button>}
        </div>
    );
};