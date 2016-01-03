import React from 'react';
import Alert from 'react-s-alert';
import styles from './customTmpl.css';

class MyCustomContentTemplate extends React.Component {
    constructor(props) {
        super(props);
    }
    handleConfirm() {
        alert('Customer confirmation!');
        Alert.close(this.props.id);
    }
    render() {
        return (
            <div className={this.props.classNames} id={this.props.id} style={this.props.styles}>
                <div className='s-alert-box-inner'>
                    {this.props.message}
                </div>
                <h3 className={styles.customer}>{this.props.customFields.customerName}</h3>
                <button className={styles.customButton} onClick={this.handleConfirm.bind(this)}>Confirm</button>
                <span className='s-alert-close' onClick={this.props.handleClose}></span>
            </div>
        )
    }
}

export default MyCustomContentTemplate;