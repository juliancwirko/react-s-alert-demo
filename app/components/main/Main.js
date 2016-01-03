import React from 'react';
import _ from 'lodash';
import {Router, Link} from 'react-router';
import styles from './main.css';
import 'normalize.css/normalize.css';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <header className={styles.header}>
                    <span className={styles.title}>react-s-alert <small>(demo)</small></span>
                    <Link to="/">Main Demo</Link> <span>|</span> <Link to="/custom">Custom Template Demo</Link>
                </header>
                <div className={styles.wrapper}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main;
