import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oooops. I'm so sorry about this</h1>
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true})
  }

}

export default ErrorBoundry;