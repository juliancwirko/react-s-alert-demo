import React from 'react';
import Alert from 'react-s-alert';
import MyCustomContentTemplate from './MyCustomContentTemplate';

const CustomTmemplateDemo = () => {
  const handleWarning = (e) => {
    e.preventDefault();
    const customerName = 'Stefan Kowalski';
    Alert.warning('Customer confirmation needed:', {
      position: 'top-right',
      customFields: {
        customerName: customerName
      }
    });
  }
  const handleInfo = (e) => {
    e.preventDefault();
    const customerName = 'Stefan Kowalski';
    Alert.info('Customer confirmation needed:', {
      position: 'bottom-right',
      customFields: {
        customerName: customerName
      }
    });
  }
  const handleError = (e) => {
    e.preventDefault();
    const customerName = 'Stefan Kowalski';
    Alert.error('Customer confirmation needed:', {
      position: 'bottom-left',
      customFields: {
        customerName: customerName
      }
    });
  }
  const handleSuccess = (e) => {
    e.preventDefault();
    const customerName = 'Stefan Kowalski';
    Alert.success('Customer confirmation needed:', {
      position: 'top-right',
      customFields: {
        customerName: customerName
      }
    });
  }
  const handleCloseAll = (e) => {
    e.preventDefault();
    Alert.closeAll();
  }
  return (
    <div>
      <div className="info">
        Here we have used a custom content template. See source code and docs for more details.<br /><br />
        You'll find source code of this demo here: <a href="https://github.com/juliancwirko/react-s-alert-demo" className="link">github.com/juliancwirko/react-s-alert-demo</a> <br />
        You'll find docs and source code of the react-s-alert component here: <a href="https://github.com/juliancwirko/react-s-alert" className="link">github.com/juliancwirko/react-s-alert</a> <br />
        If you want to contact me: <a href="http://julian.io" className="link">julian.io</a>
      </div>
      <div className="cf">
        <h3>Different conditions with custom content template: </h3>
        <a className="button buttonWarning" onClick={handleWarning}>Warning</a>
        <a className="button buttonInfo" onClick={handleInfo}>Info</a>
        <a className="button buttonError" onClick={handleError}>Error</a>
        <a className="button buttonSuccess" onClick={handleSuccess}>Success</a>
        <a className="button buttonDefault" onClick={handleCloseAll}>Close All</a>
      </div>
      <div className="info">
        Check out: <br />
        <a href="http://www.psd2meteor.com" className="link">Meteor/React/GrpahQL apps development</a> <br />
        <a href="https://www.simplechat.support/">Open Source Live Chat App built with Meteor</a>
      </div>
      <Alert stack={true} timeout='none' contentTemplate={MyCustomContentTemplate} />
    </div>
  );
};

export default CustomTmemplateDemo;
