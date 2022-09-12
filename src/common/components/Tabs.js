import React, { useState } from "react";
import '../../styles/tab.css'
export function Tabs({ children }) {
    function findActiveTab(a) {
        return a?.reduce((accumulator, currentValue, i) => {
            if (currentValue.props.active) {
                return i;
            }
            return accumulator;
        }, 0);
    }

    function tabValidator(tab) {
        return tab.type.displayName === "Tab" ? true : false;
    }

    const [activeTab, setActiveTab] = useState(findActiveTab(children));

    return (
        <>
            <div className="tabs">
                {children?.map((item, i) => {
                    return (
                        <>
                            {tabValidator(item) && (
                                <Tab
                                    key={`tab-${i}`}
                                    currentTab={i}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}>
                                    {item.props.children}
                                </Tab>
                            )}
                        </>
                    );
                })}
            </div>
            <div className="p-5">
                {children?.map((item, i) => {
                    return (
                        <div key={i} className={` ${i === activeTab ? "visible" : "hidden"}`}>
                            {item.props.component}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export function Tab({ children, activeTab, currentTab, setActiveTab }) {
    return (
        <>
            <div
                className={`px-5 py-3 rounded cursor-pointer
                 ${activeTab === currentTab ? "bg-white" : "bg-black text-white"}`}
                onClick={() => setActiveTab(currentTab)}>
                {children}
            </div>
        </>
    );
}

Tab.displayName = "Tab";