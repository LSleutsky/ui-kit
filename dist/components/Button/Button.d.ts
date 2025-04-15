import React from "react";
export type ButtonProps = {
    buttonStyle?: object;
    containerStyle?: object;
    icon?: object;
    iconPosition?: "left" | "right" | "top" | "bottom";
    onPress?: () => void;
    radius?: string;
    size?: "sm" | "md" | "lg";
    title: string;
    titleStyle?: object;
    uppercase?: boolean;
};
export declare const Button: ({ buttonStyle, containerStyle, icon, iconPosition, onPress, radius, size, title, titleStyle, uppercase, }: ButtonProps) => React.JSX.Element;
export default Button;
