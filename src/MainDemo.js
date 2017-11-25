/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import Alert from 'react-s-alert';

const MainDemo = () => {
  // conditions
  const handleWarning = (e) => {
    e.preventDefault();
    Alert.warning('Test message warning!', {
      position: 'top-right'
    });
  }
  const handleInfo = (e) => {
    e.preventDefault();
    Alert.info('Test message info!', {
      position: 'bottom-right'
    });
  }
  const handleError = (e) => {
    e.preventDefault();
    Alert.error('Test message error!', {
      position: 'bottom-left'
    });
  }
  const handleSuccess = (e) => {
    e.preventDefault();
    Alert.success('Test message success!', {
      position: 'top-right'
    });
  }
  // positions
  const handleTop = (e) => {
    e.preventDefault();
    Alert.success('Test message top!', {
      position: 'top'
    });
  }
  const handleBottom = (e) => {
    e.preventDefault();
    Alert.info('Test message bottom!', {
      position: 'bottom'
    });
  }
  const handleBottomRight = (e) => {
    e.preventDefault();
    Alert.warning('Test message bottom-right!', {
      position: 'bottom-right'
    });
  }
  const handleBottomLeft = (e) => {
    e.preventDefault();
    Alert.error('Test message bottom-left!', {
      position: 'bottom-left'
    });
  }
  const handleTopRight = (e) => {
    e.preventDefault();
    Alert.info('Test message top-right!', {
      position: 'top-right'
    });
  }
  const handleTopLeft = (e) => {
    e.preventDefault();
    Alert.success('Test message top-left!', {
      position: 'top-left'
    });
  }
  // effects
  const handleSlide = (e) => {
    e.preventDefault();
    Alert.success('Test message slide effect!', {
      position: 'top-right',
      effect: 'slide'
    });
  }
  const handleScale = (e) => {
    e.preventDefault();
    Alert.info('Test message scale effect!', {
      position: 'top-right',
      effect: 'scale'
    });
  }
  const handleFlip = (e) => {
    e.preventDefault();
    Alert.warning('Test message flip effect!', {
      position: 'top-right',
      effect: 'flip'
    });
  }
  const handleJelly = (e) => {
    e.preventDefault();
    Alert.error('Test message jelly effect!', {
      position: 'top-right',
      effect: 'jelly'
    });
  }
  const handleStackslide = (e) => {
    e.preventDefault();
    Alert.success('Test message stackslide effect!', {
      position: 'top-right',
      effect: 'stackslide'
    });
  }
  const handleGenie = (e) => {
    e.preventDefault();
    Alert.info('Test message genie effect!', {
      position: 'top-right',
      effect: 'genie'
    });
  }
  const handleBouncyflip = (e) => {
    e.preventDefault();
    Alert.warning('Test message bouncyflip effect!', {
      position: 'top-right',
      effect: 'bouncyflip'
    });
  }
  // offset
  const handleOffset = (e) => {
    e.preventDefault();
    Alert.warning('Test message offset!', {
      position: 'top-right',
      effect: 'flip',
      offset: 80
    });
  }
  // HTML
  const handleHtml = (e) => {
    e.preventDefault();
    Alert.info('<h4>Test message with HTML!</h4><ul><li>List item 1!</li><li>List item 2!</li></ul>', {
      position: 'top-right',
      effect: 'slide',
      html: true
    });
  }
  // beep
  const handleBeep = (e) => {
    e.preventDefault();
    Alert.error('Test message with beep!', {
      position: 'top-right',
      effect: 'flip',
      beep: 'http://s-alert-demo.meteorapp.com/beep.mp3'
    });
  }
  // callbacks
  const handleOnShow = (e) => {
    e.preventDefault();
    Alert.success('Test message onShow callback!', {
      position: 'top-right',
      effect: 'stackslide',
      onShow: function () {
        alert('onShow callback fired!');
      }
    });
  }
  const handleOnClose = (e) => {
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
  const handleCloseAll = (e) => {
    e.preventDefault();
    Alert.closeAll();
  }
  return (
    <div>
      <div className="cf">
        <div className="info">
          You can click multiple times to see stacking. Also all alerts has timeout. This could be disabled. <br /><br />
          You'll find source code of this demo here: <a href="https://github.com/juliancwirko/react-s-alert-demo" className="link">github.com/juliancwirko/react-s-alert-demo</a> <br />
          You'll find docs and source code of the react-s-alert component here: <a href="https://github.com/juliancwirko/react-s-alert" className="link">github.com/juliancwirko/react-s-alert</a> <br />
          If you want to contact me: <a href="http://julian.io" className="link">julian.io</a>
        </div>
        <div className="cf">
          <h3>Different conditions: </h3>
          <a href="#" className="button buttonWarning" onClick={handleWarning}>Warning</a>
          <a href="#" className="button buttonInfo" onClick={handleInfo}>Info</a>
          <a href="#" className="button buttonError" onClick={handleError}>Error</a>
          <a href="#" className="button buttonSuccess" onClick={handleSuccess}>Success</a>
          <a href="#" className="button buttonDefault" onClick={handleCloseAll}>Close All</a>
        </div>
        <div className="cf">
          <h3>Different positions: </h3>
          <a href="#" className="button buttonSuccess" onClick={handleTop}>top</a>
          <a href="#" className="button buttonInfo" onClick={handleBottom}>bottom</a>
          <a href="#" className="button buttonWarning" onClick={handleBottomRight}>bottom-right</a>
          <a href="#" className="button buttonError" onClick={handleBottomLeft}>bottom-left</a>
          <a href="#" className="button buttonSuccess" onClick={handleTopLeft}>top-left</a>
          <a href="#" className="button buttonInfo" onClick={handleTopRight}>top-right</a>
          <a href="#" className="button buttonDefault" onClick={handleCloseAll}>Close All</a>
        </div>
        <div className="cf">
          <h3>Different effects <small>(All here are 'top-right' - could be changed)</small>:</h3>
          <a href="#" className="button buttonSuccess" onClick={handleSlide}>slide</a>
          <a href="#" className="button buttonInfo" onClick={handleScale}>scale</a>
          <a href="#" className="button buttonWarning" onClick={handleFlip}>flip</a>
          <a href="#" className="button buttonError" onClick={handleJelly}>jelly</a>
          <a href="#" className="button buttonSuccess" onClick={handleStackslide}>stackslide</a>
          <a href="#" className="button buttonInfo" onClick={handleGenie}>genie</a>
          <a href="#" className="button buttonWarning" onClick={handleBouncyflip}>bouncyflip</a>
          <a href="#" className="button buttonDefault" onClick={handleCloseAll}>Close All</a>
        </div>
        <div className="cf">
          <h3>Offset demo <small>(Offset 80px from the top)</small>:</h3>
          <a href="#" className="button buttonSuccess" onClick={handleOffset}>offset 80px</a>
          <a href="#" className="button buttonDefault" onClick={handleCloseAll}>Close All</a>
        </div>
        <div className="cf">
          <h3>HTML demo <small>(Message with HTML formating)</small>:</h3>
          <a href="#" className="button buttonInfo" onClick={handleHtml}>message with HTML</a>
          <a href="#" className="button buttonDefault" onClick={handleCloseAll}>Close All</a>
        </div>
        <div className="cf">
          <h3>Alert with audio: </h3>
          <a href="#" className="button buttonError" onClick={handleBeep}>Beep alert</a>
          <a href="#" className="button buttonDefault" onClick={handleCloseAll}>Close All</a>
        </div>
        <div className="cf">
          <h3>Alert callbacks demo: </h3>
          <a href="#" className="button buttonSuccess" onClick={handleOnShow}>onShow callback</a>
          <a href="#" className="button buttonError" onClick={handleOnClose}>onClose callback</a>
          <a href="#" className="button buttonDefault" onClick={handleCloseAll}>Close All</a>
        </div>
        <div className="info">
          Check out: <br />
          <a href="http://www.psd2meteor.com" className="link">Meteor/React/GrpahQL apps development</a> <br />
          <a href="https://www.simplechat.support/">Open Source Live Chat App built with Meteor</a>
        </div>
      </div>
      <Alert stack={true} timeout={3000} />
    </div>
  );
};

export default MainDemo;
