import React from 'react';

export const emptyList = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="17 46 161 108">
        <path className="fill-100" d="M17 110a8 8 0 0 1 8-8h72a8 8 0 0 1 8 8v30a8 8 0 0 1-8 8H25a8 8 0 0 1-8-8v-30Z" />
        <path
            className="fill-200"
            d="M33 118a3 3 0 0 1 3-3h26a3 3 0 1 1 0 6H36a3 3 0 0 1-3-3ZM89 118a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"
        />
        <path className="fill-white" d="M33 137a3 3 0 0 1 3-3h50a3 3 0 1 1 0 6H36a3 3 0 0 1-3-3Z" />
        <path className="fill-100" d="M114 61a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v44a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8V61Z" />
        <path
            className="fill-200"
            d="M154 69a8 8 0 1 0-16 0 8 8 0 0 0 16 0ZM130 88a3 3 0 0 1 3-3h26a3 3 0 1 1 0 6h-26a3 3 0 0 1-3-3Z"
        />
        <path className="fill-white" d="M130 102a3 3 0 0 1 3-3h26a3 3 0 1 1 0 6h-26a3 3 0 0 1-3-3Z" />
        <path
            className="stroke-400"
            strokeLinecap="round"
            strokeWidth="2"
            d="M47 140.529V149a4 4 0 0 0 4 4h8.47M140.529 153H149a4 4 0 0 0 4-4v-8.471M59.47 47H51a4 4 0 0 0-4 4v8.47M153 59.47V51a4 4 0 0 0-4-4h-8.471"
        />
        <g filter="url(#filter-list)">
            <path
                className="fill-white"
                d="M47 90a8 8 0 0 1 8-8h90a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H55a8 8 0 0 1-8-8V90Z"
            />
            <path
                className="stroke-400"
                d="M47.5 90a7.5 7.5 0 0 1 7.5-7.5h90a7.5 7.5 0 0 1 7.5 7.5v20a7.5 7.5 0 0 1-7.5 7.5H55a7.5 7.5 0 0 1-7.5-7.5V90Z"
            />
            <path className="fill-400" d="M79 98a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z" />
            <path className="fill-200" d="M87 93a3 3 0 0 1 3-3h26a3 3 0 1 1 0 6H90a3 3 0 0 1-3-3Z" />
            <path className="fill-100" d="M87 107a3 3 0 0 1 3-3h44a3 3 0 1 1 0 6H90a3 3 0 0 1-3-3Z" />
        </g>
        <defs>
            <filter
                id="filter-list"
                width="122"
                height="52"
                x="39"
                y="77"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5857_63975" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5857_63975" result="shape" />
            </filter>
        </defs>
    </svg>
);
