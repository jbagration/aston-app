import { Component } from 'react';

import { Props } from '../types/types';

class ErrorBoundary extends Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <p className='error-message'>Oops! Something went wrong.</p>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
