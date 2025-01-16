import React from "react"
import { SVGProps } from "react"

export const Chevron_left = (props?: SVGProps<SVGSVGElement>) => {
    return <svg {...props} width={props?.width || 20} height={props?.height || 20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 15L7.5 10L12.5 5" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
}

export const Chevron_right = (props?: SVGProps<SVGSVGElement>) => {
    return <svg {...props} width={props?.width || 20} height={props?.height || 20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 15L12.5 10L7.5 5" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
}

export const NoImage = (props?: SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 80" x="0px" y="0px">
        <g data-name="Layer 3">
            <path d="M59,47.15V18.85A4.861,4.861,0,0,0,54.15,14H14.657L7.734,7.078A1,1,0,1,0,6.32,8.492L11.829,14H9.85A4.861,4.861,0,0,0,5,18.85v28.3A4.861,4.861,0,0,0,9.85,52H49.829l6.606,6.606a1,1,0,0,0,1.414-1.414L52.657,52H54.15A4.861,4.861,0,0,0,59,47.15ZM54.15,16A2.855,2.855,0,0,1,57,18.85v28.3A2.855,2.855,0,0,1,54.15,50h-.9L39.35,28.58a2.8,2.8,0,0,0-4.95,0l-2.03,3.13v0L16.657,16ZM50.657,50,33.813,33.156,36.08,29.67a.835.835,0,0,1,1.59,0L50.87,50ZM7,47.15V18.85A2.855,2.855,0,0,1,9.85,16h3.979l17.43,17.431L27,39.98l-2.26-3.14a2.154,2.154,0,0,0-3.65,0L11.63,50H9.85A2.855,2.855,0,0,1,7,47.15ZM22.88,50H14.09l8.62-12c.18-.24.23-.24.41,0l2.72,3.78,1.25,1.74L31.74,50ZM34.2,50l-5.95-8.27L32.7,34.871,47.829,50ZM15.5,31A4.5,4.5,0,1,0,11,26.5,4.507,4.507,0,0,0,15.5,31Zm0-7A2.5,2.5,0,1,1,13,26.5,2.5,2.5,0,0,1,15.5,24Z" />
        </g>
    </svg>
}

export const Search = (props?: SVGProps<SVGSVGElement>) => {
    return <svg {...props} width={props?.width || 20} height={props?.height || 20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
}

export const Link_black = (props?: SVGProps<SVGSVGElement>) => {
    return <svg {...props} width={props?.width || 20} height={props?.height || 20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_210_502)">
            <path d="M8.33338 10.833C8.69125 11.3114 9.14784 11.7073 9.67217 11.9938C10.1965 12.2802 10.7763 12.4506 11.3723 12.4933C11.9682 12.5359 12.5664 12.45 13.1262 12.2411C13.686 12.0323 14.1943 11.7055 14.6167 11.283L17.1167 8.78298C17.8757 7.99714 18.2957 6.94463 18.2862 5.85214C18.2767 4.75965 17.8385 3.7146 17.066 2.94207C16.2934 2.16953 15.2484 1.73133 14.1559 1.72184C13.0634 1.71234 12.0109 2.13232 11.225 2.89131L9.79171 4.31631M11.6667 9.16631C11.3088 8.68787 10.8522 8.29199 10.3279 8.00553C9.80359 7.71906 9.22379 7.54871 8.62784 7.50603C8.03188 7.46335 7.43372 7.54934 6.87392 7.75816C6.31412 7.96698 5.80578 8.29375 5.38338 8.71631L2.88338 11.2163C2.12439 12.0022 1.70441 13.0547 1.7139 14.1472C1.7234 15.2396 2.1616 16.2847 2.93413 17.0572C3.70667 17.8298 4.75172 18.268 5.84421 18.2775C6.93669 18.2869 7.9892 17.867 8.77504 17.108L10.2 15.683" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_210_502">
                <rect width={20} height={20} fill="white" />
            </clipPath>
        </defs>
    </svg>

}

export const Link_white = (props?: SVGProps<SVGSVGElement>) => {
    return <svg {...props} width={props?.width || 20} height={props?.height || 20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="link-03" clipPath="url(#clip0_898_7911)">
            <path id="Icon" d="M8.3335 10.834C8.69138 11.3124 9.14796 11.7083 9.67229 11.9947C10.1966 12.2812 10.7764 12.4516 11.3724 12.4942C11.9683 12.5369 12.5665 12.4509 13.1263 12.2421C13.6861 12.0333 14.1944 11.7065 14.6168 11.284L17.1168 8.78396C17.8758 7.99811 18.2958 6.9456 18.2863 5.85312C18.2768 4.76063 17.8386 3.71558 17.0661 2.94304C16.2935 2.17051 15.2485 1.73231 14.156 1.72281C13.0635 1.71332 12.011 2.1333 11.2252 2.89229L9.79183 4.31729M11.6668 9.16729C11.309 8.68885 10.8524 8.29297 10.328 8.00651C9.80371 7.72004 9.22391 7.54969 8.62796 7.50701C8.032 7.46433 7.43384 7.55032 6.87405 7.75914C6.31425 7.96796 5.8059 8.29473 5.3835 8.71729L2.8835 11.2173C2.12451 12.0031 1.70453 13.0556 1.71402 14.1481C1.72352 15.2406 2.16172 16.2857 2.93426 17.0582C3.70679 17.8307 4.75184 18.2689 5.84433 18.2784C6.93681 18.2879 7.98932 17.8679 8.77517 17.109L10.2002 15.684" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_898_7911">
                <rect width={props?.width || 20} height={props?.height || 20} fill="white" />
            </clipPath>
        </defs>
    </svg>
}

export const XIcon = (props?: SVGProps<SVGSVGElement>) => {
    return <svg {...props} width={props?.width || 24} height={props?.height || 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.8551 10.6884L21.1145 2.25H19.3942L13.091 9.57691L8.05658 2.25H2.25L9.86299 13.3296L2.25 22.1785H3.97032L10.6267 14.441L15.9434 22.1785H21.75L13.8547 10.6884H13.8551ZM11.4989 13.4272L10.7276 12.3239L4.59018 3.54503H7.23249L12.1854 10.6299L12.9568 11.7332L19.395 20.9424H16.7527L11.4989 13.4276V13.4272Z" fill={props?.color || 'black'} />
    </svg>
}

export const FacebookIcon = (props?: SVGProps<SVGSVGElement>) => {
    return <svg {...props} width={props?.width || 24} height={props?.height || 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10.5" fill="url(#paint0_linear_210_15202)" />
        <path d="M15.9103 15.2112L16.3767 12.2476H13.4589V10.3252C13.4589 9.51428 13.8657 8.7233 15.1726 8.7233H16.5V6.20024C16.5 6.20024 15.2959 6 14.1452 6C11.7411 6 10.1712 7.4197 10.1712 9.98883V12.2476H7.5V15.2112H10.1712V22.3759C10.7075 22.458 11.2562 22.5 11.8151 22.5C12.374 22.5 12.9226 22.458 13.4589 22.3759V15.2112H15.9103Z" fill="white" />
        <defs>
            <linearGradient id="paint0_linear_210_15202" x1="12" y1="1.5" x2="12" y2="22.4377" gradientUnits="userSpaceOnUse">
                <stop stopColor="#18ACFE" />
                <stop offset="1" stopColor="#0163E0" />
            </linearGradient>
        </defs>
    </svg>
}

export const LinkedInIcon = (props?: SVGProps<SVGSVGElement>) => {
    return <svg {...props} width={props?.width || 24} height={props?.height || 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.5" y="1.5" width="21" height="21" rx="10.5" fill="#1275B1" />
        <path d="M9.46392 7.26911C9.46392 7.97002 8.85639 8.53822 8.10696 8.53822C7.35753 8.53822 6.75 7.97002 6.75 7.26911C6.75 6.5682 7.35753 6 8.10696 6C8.85639 6 9.46392 6.5682 9.46392 7.26911Z" fill="white" />
        <path d="M6.93557 9.47107H9.25515V16.5H6.93557V9.47107Z" fill="white" />
        <path d="M12.9897 9.47107H10.6701V16.5H12.9897C12.9897 16.5 12.9897 14.2872 12.9897 12.9036C12.9897 12.0732 13.2732 11.2392 14.4046 11.2392C15.6833 11.2392 15.6756 12.3259 15.6696 13.1678C15.6618 14.2683 15.6804 15.3914 15.6804 16.5H18V12.7903C17.9804 10.4215 17.3631 9.33006 15.3325 9.33006C14.1265 9.33006 13.379 9.87754 12.9897 10.3729V9.47107Z" fill="white" />
    </svg>
}