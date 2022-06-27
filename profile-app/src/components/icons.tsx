import React from "react";

export const LogoIcon = (props: { 
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}) => {
    const { className, style, onClick } = props;      
    return (
    <svg className={className} style={style} onClick={onClick}  width="40" height="40" viewBox="0 0 40 40" fill="none" >
        <rect width="20" height="20" fill="#46BCFF" />
        <path d="M20 20H40V40H20V20Z" fill="#FF5A5F" />
        <path d="M0 20H20V40H0V20Z" fill="#605DEC" />
        <rect x="20" width="20" height="20" fill="#D7FF00" />
    </svg>  
    );
}
