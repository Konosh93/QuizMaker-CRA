import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';



class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      errorInfo: null,
    };
  }
  componentDidCatch(error, errorInfo) {console.log('some')
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Something Went Wrong</h1>
          <p>{this.state.errorInfo}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.node,
};

export default ErrorBoundary;
