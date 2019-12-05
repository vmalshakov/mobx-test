import React, { Component } from 'react';
import { inject } from 'mobx-react';
import FinishForm from 'components/Forms/FinishForm';

@inject('appStore')
export default class FinishPage extends Component {
    render() {
        return <div className="finish-data-page">
            <FinishForm form={this.props.appStore.finishForm} />
        </div>
    }
};