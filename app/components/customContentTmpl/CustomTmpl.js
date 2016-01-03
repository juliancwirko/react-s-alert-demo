import React from 'react';
import MyCustomContentTemplate from './MyCustomContentTemplate';
import Alert from 'react-s-alert';
import buttonsStyles from '../main/buttons.css';
import styles from './customTmpl.css';

class CustomTmpl extends React.Component {
    handleWarning(e) {
        e.preventDefault();
        const customerName = 'Stefan Kowalski';
        Alert.warning('Customer confirmation needed:', {
            position: 'top-right',
            customFields: {
                customerName: customerName
            }
        });
    }
    handleInfo(e) {
        e.preventDefault();
        const customerName = 'Stefan Kowalski';
        Alert.info('Customer confirmation needed:', {
            position: 'bottom-right',
            customFields: {
                customerName: customerName
            }
        });
    }
    handleError(e) {
        e.preventDefault();
        const customerName = 'Stefan Kowalski';
        Alert.error('Customer confirmation needed:', {
            position: 'bottom-left',
            customFields: {
                customerName: customerName
            }
        });
    }
    handleSuccess(e) {
        e.preventDefault();
        const customerName = 'Stefan Kowalski';
        Alert.success('Customer confirmation needed:', {
            position: 'top-right',
            customFields: {
                customerName: customerName
            }
        });
    }
    handleCloseAll(e) {
        e.preventDefault();
        Alert.closeAll();
    }
    render() {
        return (
            <div>
                <div className={styles.info}>
                    Here we have used a custom content template. See source code and docs for more details.<br/><br/>
                    You'll find source code of this demo here: ... <br/>
                    You'll find docs and source code of the react-s-alert component here: <a href="https://github.com/juliancwirko/react-s-alert" className={styles.link}>github.com/juliancwirko/react-s-alert</a> <br/>
                    If you want to contact me: <a href="http://julian.io" className={styles.link}>julian.io</a>
                </div>
                <div className={styles.cf}>
                    <h3>Different conditions with custom content template: </h3>
                    <a href="#" className={buttonsStyles.buttonWarning} onClick={this.handleWarning}>Warning</a>
                    <a href="#" className={buttonsStyles.buttonInfo} onClick={this.handleInfo}>Info</a>
                    <a href="#" className={buttonsStyles.buttonError} onClick={this.handleError}>Error</a>
                    <a href="#" className={buttonsStyles.buttonSuccess} onClick={this.handleSuccess}>Success</a>
                    <a href="#" className={buttonsStyles.buttonDefault} onClick={this.handleCloseAll}>Close All</a>
                </div>
                <Alert stack={true} timeout='none' contentTemplate={MyCustomContentTemplate} />
            </div>
        )
    }
}

export default CustomTmpl;
