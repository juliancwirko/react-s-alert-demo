/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import MainDemo from './MainDemo';
import CustomTemplateDemo from './CustomTemplateDemo';
import './App.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';

class App extends React.Component {
    state = {
      customTmplView: false,
    }
    mainDemo = () => {
      this.setState({ customTmplView: false });
    }
    customTemplateDemo = () => {
      this.setState({ customTmplView: true });
    }
    render() {
        return (
          <div>
            <header className="header">
              <span className="title">react-s-alert <small>(demo)</small></span>
              <a onClick={this.mainDemo}>Main Demo</a> <span>|</span> <a onClick={this.customTemplateDemo}>Custom Template Demo</a>
            </header>
            <div className="wrapper">
              {this.state.customTmplView
                ? <CustomTemplateDemo />
                : <MainDemo />}
            </div>
          </div>
        )
    }
}

export default App;
