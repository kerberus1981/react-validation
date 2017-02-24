import React, { PropTypes } from 'react';
import { makeCustomInput } from './../CustomInput/CustomInput';

export default makeCustomInput(React.createClass({
    render() {
        const { containerClassName, hint, ...rest } = this.props;

        return (
            <div className={containerClassName}>
                <input
                  {...rest}
                  className={this.props.className}
                  onChange={this.props.onChange}
                  onBlur={this.props.onBlur}
                  value={this.props.value}
                />
                {hint}
            </div>
        );
    }
}));
