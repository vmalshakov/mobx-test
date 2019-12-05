import React, { Component } from 'react';
import { inject } from 'mobx-react';
import PayDataForm from 'components/Forms/PayDataForm';

@inject('appStore')
export default class PayDataPage extends Component {
    render() {
        return <div className="pay-data-page">
            <PayDataForm form={this.props.appStore.payDataForm} />
        </div>
    }
};