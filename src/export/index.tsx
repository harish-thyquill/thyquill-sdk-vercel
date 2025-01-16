import HomePage from '../components/homePage/HomePage';
import React from 'react';
import { createRoot } from "react-dom/client";

interface ThyQuillWindow extends Window {
    ThyQuill: {
        init: (id: string) => void,
    };
}

declare const window: ThyQuillWindow;

const init = (id: string) => {
    const container = document.getElementById(id);
    if (container) {
        const root = createRoot(container);
        const domain = window.parent.location.href || '';
        root.render(<HomePage domain={domain} />);
    } else {
        console.error(`Container with ID '${id}' not found.`);
    }
};

window.ThyQuill = { init };