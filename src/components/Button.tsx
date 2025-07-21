import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { styled } from 'nativewind';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);
const StyledActivityIndicator = styled(ActivityIndicator);

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  const getVariantStyles = (): string => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-600 active:bg-primary-700';
      case 'secondary':
        return 'bg-secondary-200 active:bg-secondary-300';
      case 'ghost':
        return 'bg-transparent border border-secondary-300';
      case 'danger':
        return 'bg-error active:bg-red-700';
      default:
        return '';
    }
  };

  const getSizeStyles = (): string => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2';
      case 'md':
        return 'px-4 py-3';
      case 'lg':
        return 'px-6 py-4';
      default:
        return '';
    }
  };

  const getTextVariantStyles = (): string => {
    switch (variant) {
      case 'primary':
      case 'danger':
        return 'text-white';
      case 'secondary':
        return 'text-secondary-900';
      case 'ghost':
        return 'text-secondary-700';
      default:
        return '';
    }
  };

  const getTextSizeStyles = (): string => {
    switch (size) {
      case 'sm':
        return 'text-sm';
      case 'md':
        return 'text-base';
      case 'lg':
        return 'text-lg';
      default:
        return '';
    }
  };

  return (
    <StyledTouchableOpacity
      className={`
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? 'opacity-50' : ''}
        rounded-lg flex-row items-center justify-center
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <StyledActivityIndicator
          color={variant === 'primary' || variant === 'danger' ? 'white' : 'black'}
          size={size === 'sm' ? 'small' : 'small'}
        />
      ) : (
        <StyledText
          className={`
            ${getTextVariantStyles()}
            ${getTextSizeStyles()}
            font-semibold text-center
          `}
        >
          {children}
        </StyledText>
      )}
    </StyledTouchableOpacity>
  );
}