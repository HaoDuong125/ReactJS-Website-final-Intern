import React, { Component } from 'react';
import { withRouter } from 'react-router';
import FormC from '../../components/CategoryPage/FormC';
import { createCategories } from '../../actions/CategoryActions';

export default class CreateC extends Component {

    handleSubmit(data) {
        createCategories(data);
        this.props.router.push('/').bind(this);
    }

    render() {
        return (
            <div>
                <FormC onSubmit={this.handleSubmit.bind(this)}></FormC>
            </div>
        );
    }
}
