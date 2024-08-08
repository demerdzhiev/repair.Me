import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(err) {
    console.log("GetDerivedStateFromError");
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("componentDidCatch");
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1 className="errorTitle">Something went wrong.</h1>
          <p>We're sorry, but something went wrong. Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
