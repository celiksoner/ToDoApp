import React, { Component } from "react";
import axios from "axios";
import react from "react";

class ApiProgress extends Component {
  state = {
    pendingApiCall: false,
  };

  componentDidMount() {
    this.requestInterceptor = axios.interceptors.request.use((request) => {
      this.updateApiCallFor(request.url, true);
      return request;
    });

    this.responseInterceptor = axios.interceptors.response.use(
      (response) => {
        this.updateApiCallFor(response.config.url, false);
        return response;
      },
      (error) => {
        this.updateApiCallFor(error.config.url, false);
        throw error;
      }
    );
  }

  componentWillUnmount() {
    axios.interceptors.request.eject(this.requestInterceptor);
    axios.interceptors.response.eject(this.responseInterceptor);
  }

  updateApiCallFor = (url, inProgress) => {
    if (url === this.props.path) {
      this.setState({ pendingApiCall: inProgress });
    }
  };

  render() {
    const { pendingApiCall } = this.state;
    return (
      <div>
        {react.cloneElement(this.props.children, {
          pendingApiCall,
        })}
      </div>
    );
  }
}

export default ApiProgress;
