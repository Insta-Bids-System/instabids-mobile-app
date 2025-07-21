import React from 'react';
import { View, ViewProps } from 'react-native';
import { styled } from 'nativewind';

interface CardProps extends ViewProps {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const StyledView = styled(View);

export function Card({
  variant = 'default',
  padding = 'md',
  children,
  className = '',
  ...props
}: CardProps) {
  const getVariantStyles = (): string => {
    switch (variant) {
      case 'default':
        return 'bg-white dark:bg-secondary-800';
      case 'outlined':
        return 'bg-transparent border border-secondary-200 dark:border-secondary-700';
      case 'elevated':
        return 'bg-white dark:bg-secondary-800 shadow-lg';
      default:
        return '';
    }
  };

  const getPaddingStyles = (): string => {
    switch (padding) {
      case 'none':
        return '';
      case 'sm':
        return 'p-2';
      case 'md':
        return 'p-4';
      case 'lg':
        return 'p-6';
      default:
        return '';
    }
  };

  return (
    <StyledView
      className={`
        ${getVariantStyles()}
        ${getPaddingStyles()}
        rounded-xl
        ${className}
      `}
      {...props}
    >
      {children}
    </StyledView>
  );
}