import React from 'react';

export const emptyResult = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="45.01 39 109.78 129.06">
        <path
            className="fill-100"
            d="M89.038 52.737a8 8 0 0 1 10.928-2.928l50.107 28.929a8 8 0 0 1 2.928 10.928l-42.953 74.396a8 8 0 0 1-10.928 2.929l-50.107-28.929a8.001 8.001 0 0 1-2.928-10.929l42.953-74.396Z"
        />
        <path
            className="fill-100"
            d="M74.605 56.807a8 8 0 0 1 9.798-5.656l55.887 14.974a8 8 0 0 1 5.657 9.798l-22.234 82.979a8 8 0 0 1-9.798 5.657l-55.887-14.975a8 8 0 0 1-5.657-9.798l22.234-82.978Z"
        />
        <g filter="url(#filter-result)">
            <path
                className="fill-white"
                d="M62.643 64.731a8 8 0 0 1 8-8h57.894a8 8 0 0 1 8 8v85.179a8 8 0 0 1-8 8H70.643a8 8 0 0 1-8-8V64.731Z"
                shapeRendering="crispEdges"
            />
            <path
                className="stroke-400"
                d="M63.143 64.731a7.5 7.5 0 0 1 7.5-7.5h57.894a7.5 7.5 0 0 1 7.5 7.5v85.179a7.5 7.5 0 0 1-7.5 7.5H70.643a7.5 7.5 0 0 1-7.5-7.5V64.731Z"
                shapeRendering="crispEdges"
            />
            <path className="fill-100" d="M45.559 73.123a3 3 0 0 1 3-3h26a3 3 0 0 1 0 6h-26a3 3 0 0 1-3-3Z" />
            <path className="fill-200" d="M45.559 81.123a3 3 0 0 1 3-3h34a3 3 0 0 1 0 6h-34a3 3 0 0 1-3-3Z" />
        </g>
        <rect width="24" height="8" x="127" y="123" className="fill-400" rx="4" />
        <rect width="40" height="12" x="111" y="133" className="fill-200" rx="4" />
        <path
            className="fill-white stroke-400"
            strokeWidth="2"
            d="M133.902 41.5c1.155-2 4.041-2 5.196 0l14.29 24.75c1.154 2-.289 4.5-2.599 4.5h-28.578c-2.31 0-3.753-2.5-2.598-4.5l14.289-24.75Z"
        />
        <path
            className="fill-400"
            d="M135.229 60.65v-.177c.004-.61.058-1.097.161-1.46.108-.363.264-.656.468-.88a3.62 3.62 0 0 1 .738-.606c.215-.14.407-.285.577-.435.17-.15.305-.315.405-.497.101-.185.151-.39.151-.617 0-.241-.057-.452-.171-.634a1.15 1.15 0 0 0-.463-.418 1.37 1.37 0 0 0-.634-.147c-.225 0-.438.05-.639.152a1.222 1.222 0 0 0-.494.44c-.128.191-.197.43-.208.716H133c.017-.697.184-1.273.499-1.726a2.862 2.862 0 0 1 1.252-1.02 4.255 4.255 0 0 1 1.72-.341c.69 0 1.3.115 1.83.345.53.227.945.557 1.247.99.301.432.452.954.452 1.564 0 .408-.068.771-.203 1.089a2.643 2.643 0 0 1-.556.837c-.239.24-.521.459-.847.654a3.43 3.43 0 0 0-.675.513 1.726 1.726 0 0 0-.39.617 2.67 2.67 0 0 0-.13.864v.178h-1.97Zm1.029 3.35c-.346 0-.642-.122-.888-.366a1.209 1.209 0 0 1-.359-.89 1.185 1.185 0 0 1 .359-.88c.246-.243.542-.365.888-.365.329 0 .619.122.868.366a1.205 1.205 0 0 1 .198 1.512c-.115.189-.265.34-.452.456a1.179 1.179 0 0 1-.614.167Z"
        />
        <defs>
            <filter
                id="filter-result"
                width="106.978"
                height="117.178"
                x="37.559"
                y="51.731"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5857_64016" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5857_64016" result="shape" />
            </filter>
        </defs>
    </svg>
);
