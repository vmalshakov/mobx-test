import React, { Component } from "react";

class Loader extends Component {
    render() {
        return <div className="loader">Loading...</div>
    }
}

class Error extends Component {
    render() {
        return <div className="error">Error!</div>
    }
}

export default function asyncComponent(getComponent) {
    class Async extends Component {
        static Component = null;
        state = {
            Component: this.Component
        };

        setComponent(Component) {
            this.Component = Component
            this.setState({ Component })
        }

        componentWillMount() {
            if (!this.state.Component) {
                getComponent()
                    .then(Component => this.setComponent(Component))
                    .catch(() => this.setComponent(Error))
            }
        }

        render() {
            const { Component } = this.state
            if (Component) {
                return <Component {...this.props} />
            }
            return <Loader />
        }
    }
    return Async;
}