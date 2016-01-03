import React from 'react';
import _ from 'lodash';
import {Router, Link} from 'react-router';
import styles from './main.css';
import 'normalize.css/normalize.css';

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
