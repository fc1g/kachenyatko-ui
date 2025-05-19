'use client';

import { Children } from '@/types';
import React from 'react';
import CustomError from './CustomError';

type CustomErrorBoundaryProps = Children;

type CustomErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};

export class CustomErrorBoundary extends React.Component<
  CustomErrorBoundaryProps,
  CustomErrorBoundaryState
> {
  constructor(props: CustomErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error): CustomErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('💥 Error caught in CustomErrorBoundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: undefined,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <CustomError
          className="h-full w-full flex-col"
          errorMessage={
            this.state.error?.message || 'An unexpected error occurred'
          }
        />
      );
    }

    return this.props.children;
  }
}
