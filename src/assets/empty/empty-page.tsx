import React from 'react';

export const emptyPage = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="44 21 128 151">
        <path className="fill-100" d="M60 111a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8v53a8 8 0 0 1-8 8H68a8 8 0 0 1-8-8v-53Z" />
        <g filter="url(#filter-page)">
            <path
                className="fill-white"
                d="M44 52a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8H52a8 8 0 0 1-8-8V52Z"
            />
            <path
                className="stroke-400"
                d="M44.5 52a7.5 7.5 0 0 1 7.5-7.5h96a7.5 7.5 0 0 1 7.5 7.5v96a7.5 7.5 0 0 1-7.5 7.5H52a7.5 7.5 0 0 1-7.5-7.5V52Z"
            />
            <rect width="44" height="37" x="52" y="52" className="fill-100" rx="4" />
            <path className="fill-200" d="M52 96a3 3 0 0 1 3-3h18a3 3 0 1 1 0 6H55a3 3 0 0 1-3-3Z" />
            <path className="fill-100" d="M52 104a3 3 0 0 1 3-3h18a3 3 0 1 1 0 6H55a3 3 0 0 1-3-3Z" />
            <rect width="44" height="37" x="52" y="111" className="fill-200" rx="4" />
            <path className="fill-100" d="M104 55a3 3 0 0 1 3-3h26a3 3 0 1 1 0 6h-26a3 3 0 0 1-3-3Z" />
            <path className="fill-200" d="M104 63a3 3 0 0 1 3-3h38a3 3 0 1 1 0 6h-38a3 3 0 0 1-3-3Z" />
            <rect width="44" height="74" x="104" y="74" className="fill-200" rx="4" />
        </g>
        <path
            className="fill-white stroke-400"
            strokeWidth="2"
            d="M141.902 23.5c1.155-2 4.041-2 5.196 0l14.29 24.75c1.154 2-.289 4.5-2.599 4.5h-28.578c-2.31 0-3.753-2.5-2.598-4.5l14.289-24.75Z"
        />
        <path
            className="fill-400"
            d="m145.625 35-.222 8.148h-2.079L143.097 35h2.528Zm-1.261 11.784c-.375 0-.697-.133-.966-.398a1.297 1.297 0 0 1-.398-.966c-.004-.37.129-.689.398-.954s.591-.398.966-.398c.36 0 .676.133.949.398a1.303 1.303 0 0 1 .215 1.642c-.125.205-.289.37-.494.494a1.29 1.29 0 0 1-.67.182Z"
        />
        <defs>
            <filter
                id="filter-page"
                width="128"
                height="128"
                x="36"
                y="39"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5857_63996" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5857_63996" result="shape" />
            </filter>
        </defs>
    </svg>
);
