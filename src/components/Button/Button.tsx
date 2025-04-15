import React from 'react';
import { Button as NativeButton } from '@rneui/themed';

export type ButtonProps = {
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

export const Button = ({
  buttonStyle,
  containerStyle,
  icon,
  iconPosition = 'left',
  onPress,
  radius,
  size,
  title,
  titleStyle,
  uppercase = false
}: ButtonProps) => (
  <NativeButton
    buttonStyle={buttonStyle}
    containerStyle={containerStyle}
    icon={icon}
    iconPosition={icon && iconPosition}
    onPress={onPress}
    radius={radius}
    size={size}
    title={uppercase ? title.toUpperCase() : title}
    titleStyle={titleStyle}
  />
);

export default Button;
