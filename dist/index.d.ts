import * as react_jsx_runtime from 'react/jsx-runtime';

type ButtonProps = {
    buttonStyle?: object;
    containerStyle?: object;
    icon?: object;
    iconPosition?: 'left' | 'right' | 'top' | 'bottom';
    onPress?: () => void;
    radius?: string;
    size?: 'sm' | 'md' | 'lg';
    title: string;
    titleStyle?: object;
    uppercase?: boolean;
};
declare const Button: ({ buttonStyle, containerStyle, icon, iconPosition, onPress, radius, size, title, titleStyle, uppercase }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { Button };
