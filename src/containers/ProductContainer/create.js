import React, { Component } from 'react';
import { withRouter } from 'react-router';
import FormP from '../../components/ProductPage/FormP';
import { createProduct } from '../../actions/ProductActions';

export default class CreateP extends Component {

    handleSubmit(data) {
        createProduct(data);
        this.props.router.push('/').bind(this);
    }

    render() {
        return (
            <div>
                <FormP onSubmit={this.handleSubmit.bind(this)}></FormP>
            </div>
        );
    }
}
