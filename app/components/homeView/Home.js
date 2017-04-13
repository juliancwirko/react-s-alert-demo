import React from 'react';
import buttonsStyles from '../main/buttons.css';
import styles from './home.css';
import Alert from 'react-s-alert';

class Home extends React.Component {
    // conditions
    handleWarning(e) {
        e.preventDefault();
        Alert.warning('Test message warning!', {
            position: 'top-right'
        });
    }
    handleInfo(e) {
        e.preventDefault();
        Alert.info('Test message info!', {
            position: 'bottom-right'
        });
    }
    handleError(e) {
        e.preventDefault();
        Alert.error('Test message error!', {
            position: 'bottom-left'
        });
    }
    handleSuccess(e) {
        e.preventDefault();
        Alert.success('Test message success!', {
            position: 'top-right'
        });
    }
    // positions
    handleTop(e) {
        e.preventDefault();
        Alert.success('Test message top!', {
            position: 'top'
        });
    }
    handleBottom(e) {
        e.preventDefault();
        Alert.info('Test message bottom!', {
            position: 'bottom'
        });
    }
    handleBottomRight(e) {
        e.preventDefault();
        Alert.warning('Test message bottom-right!', {
            position: 'bottom-right'
        });
    }
    handleBottomLeft(e) {
        e.preventDefault();
        Alert.error('Test message bottom-left!', {
            position: 'bottom-left'
        });
    }
    handleTopRight(e) {
        e.preventDefault();
        Alert.info('Test message top-right!', {
            position: 'top-right'
        });
    }
    handleTopLeft(e) {
        e.preventDefault();
        Alert.success('Test message top-left!', {
            position: 'top-left'
        });
    }
    // effects
    handleSlide(e) {
        e.preventDefault();
        Alert.success('Test message slide effect!', {
            position: 'top-right',
            effect: 'slide'
        });
    }
    handleScale(e) {
        e.preventDefault();
        Alert.info('Test message scale effect!', {
            position: 'top-right',
            effect: 'scale'
        });
    }
    handleFlip(e) {
        e.preventDefault();
        Alert.warning('Test message flip effect!', {
            position: 'top-right',
            effect: 'flip'
        });
    }
    handleJelly(e) {
        e.preventDefault();
        Alert.error('Test message jelly effect!', {
            position: 'top-right',
            effect: 'jelly'
        });
    }
    handleStackslide(e) {
        e.preventDefault();
        Alert.success('Test message stackslide effect!', {
            position: 'top-right',
            effect: 'stackslide'
        });
    }
    handleGenie(e) {
        e.preventDefault();
        Alert.info('Test message genie effect!', {
            position: 'top-right',
            effect: 'genie'
        });
    }
    handleBouncyflip(e) {
        e.preventDefault();
        Alert.warning('Test message bouncyflip effect!', {
            position: 'top-right',
            effect: 'bouncyflip'
        });
    }
    // offset
    handleOffset(e) {
        e.preventDefault();
        Alert.warning('Test message offset!', {
            position: 'top-right',
            effect: 'flip',
            offset: 80
        });
    }
    // HTML
    handleHtml(e) {
        e.preventDefault();
        Alert.info('<h4>Test message with HTML!</h4><ul><li>List item 1!</li><li>List item 2!</li></ul>', {
            position: 'top-right',
            effect: 'slide',
            html: true
        });
    }
    // beep
    handleBeep(e) {
        e.preventDefault();
        Alert.error('Test message with beep!', {
            position: 'top-right',
            effect: 'flip',
            beep: 'http://s-alert-demo.meteorapp.com/beep.mp3'
        });
    }
    // callbacks
    handleOnShow(e) {
        e.preventDefault();
        Alert.success('Test message onShow callback!', {
            position: 'top-right',
            effect: 'stackslide',
            onShow: function () {
                alert('onShow callback fired!');
            }
        });
    }
    handleOnClose(e) {
        e.preventDefault();
        Alert.error('Test message onClose callback!', {
            position: 'top-right',
            effect: 'slide',
            onClose: function () {
                alert('onClose callback fired!');
            }
        });
    }
    // close all
    handleCloseAll(e) {
        e.preventDefault();
        Alert.closeAll();
    }
    render() {
        return (
            <div className={styles.cf}>
                <div className={styles.info}>
                    You can click multiple times to see stacking. Also all alerts has timeout. This could be disabled. <br/><br/>
                    You'll find source code of this demo here: <a href="https://github.com/juliancwirko/react-s-alert-demo" className={styles.link}>github.com/juliancwirko/react-s-alert-demo</a> <br/>
                    You'll find docs and source code of the react-s-alert component here: <a href="https://github.com/juliancwirko/react-s-alert" className={styles.link}>github.com/juliancwirko/react-s-alert</a> <br/>
                    If you want to contact me: <a href="http://julian.io" className={styles.link}>julian.io</a> | <a href="http://www.psd2meteor.com" className={styles.link}>Meteor/React/GrpahQL apps development</a>
                </div>
                <div className={styles.cf}>
                    <h3>Different conditions: </h3>
                    <a href="#" className={buttonsStyles.buttonWarning} onClick={this.handleWarning}>Warning</a>
                    <a href="#" className={buttonsStyles.buttonInfo} onClick={this.handleInfo}>Info</a>
                    <a href="#" className={buttonsStyles.buttonError} onClick={this.handleError}>Error</a>
                    <a href="#" className={buttonsStyles.buttonSuccess} onClick={this.handleSuccess}>Success</a>
                    <a href="#" className={buttonsStyles.buttonDefault} onClick={this.handleCloseAll}>Close All</a>
                </div>
                <div className={styles.cf}>
                    <h3>Different positions: </h3>
                    <a href="#" className={buttonsStyles.buttonSuccess} onClick={this.handleTop}>top</a>
                    <a href="#" className={buttonsStyles.buttonInfo} onClick={this.handleBottom}>bottom</a>
                    <a href="#" className={buttonsStyles.buttonWarning} onClick={this.handleBottomRight}>bottom-right</a>
                    <a href="#" className={buttonsStyles.buttonError} onClick={this.handleBottomLeft}>bottom-left</a>
                    <a href="#" className={buttonsStyles.buttonSuccess} onClick={this.handleTopLeft}>top-left</a>
                    <a href="#" className={buttonsStyles.buttonInfo} onClick={this.handleTopRight}>top-right</a>
                    <a href="#" className={buttonsStyles.buttonDefault} onClick={this.handleCloseAll}>Close All</a>
                </div>
                <div className={styles.cf}>
                    <h3>Different effects <small>(All here are 'top-right' - could be changed)</small>:</h3>
                    <a href="#" className={buttonsStyles.buttonSuccess} onClick={this.handleSlide}>slide</a>
                    <a href="#" className={buttonsStyles.buttonInfo} onClick={this.handleScale}>scale</a>
                    <a href="#" className={buttonsStyles.buttonWarning} onClick={this.handleFlip}>flip</a>
                    <a href="#" className={buttonsStyles.buttonError} onClick={this.handleJelly}>jelly</a>
                    <a href="#" className={buttonsStyles.buttonSuccess} onClick={this.handleStackslide}>stackslide</a>
                    <a href="#" className={buttonsStyles.buttonInfo} onClick={this.handleGenie}>genie</a>
                    <a href="#" className={buttonsStyles.buttonWarning} onClick={this.handleBouncyflip}>bouncyflip</a>
                    <a href="#" className={buttonsStyles.buttonDefault} onClick={this.handleCloseAll}>Close All</a>
                </div>
                <div className={styles.cf}>
                    <h3>Offset demo <small>(Offset 80px from the top)</small>:</h3>
                    <a href="#" className={buttonsStyles.buttonSuccess} onClick={this.handleOffset}>offset 80px</a>
                    <a href="#" className={buttonsStyles.buttonDefault} onClick={this.handleCloseAll}>Close All</a>
                </div>
                <div className={styles.cf}>
                    <h3>HTML demo <small>(Message with HTML formating)</small>:</h3>
                    <a href="#" className={buttonsStyles.buttonInfo} onClick={this.handleHtml}>message with HTML</a>
                    <a href="#" className={buttonsStyles.buttonDefault} onClick={this.handleCloseAll}>Close All</a>
                </div>
                <div className={styles.cf}>
                    <h3>Alert with audio: </h3>
                    <a href="#" className={buttonsStyles.buttonError} onClick={this.handleBeep}>Beep alert</a>
                    <a href="#" className={buttonsStyles.buttonDefault} onClick={this.handleCloseAll}>Close All</a>
                </div>
                <div className={styles.cf}>
                    <h3>Alert callbacks demo: </h3>
                    <a href="#" className={buttonsStyles.buttonSuccess} onClick={this.handleOnShow}>onShow callback</a>
                    <a href="#" className={buttonsStyles.buttonError} onClick={this.handleOnClose}>onClose callback</a>
                    <a href="#" className={buttonsStyles.buttonDefault} onClick={this.handleCloseAll}>Close All</a>
                </div>
                <div className={styles.info}>
                    <hr/>
                    <strong>Also check out:</strong> <br/>
                    <a href="https://www.simplechat.support/">Open Source Live Chat App built with Meteor</a> <br/>
                    <a href="http://stylusgrid.com/">Stylus Flexbox Grid</a> <br/>
                    <a href="https://github.com/juliancwirko/react-boilerplate" className={styles.link}>React Boilerplate with Webpack</a> <br/>
                    <a href="https://github.com/juliancwirko/react-npm-boilerplate" className={styles.link}>Boilerplate for creating React Npm packages with ES2015</a>
                </div>
                <Alert stack={true} timeout={3000} />
            </div>
        )
    }
}

export default Home;
