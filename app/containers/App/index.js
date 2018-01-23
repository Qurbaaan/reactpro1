/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import SignUp from 'components/SignUp'
// import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import FontAwesome from 'react-fontawesome';

// import Footer from 'components/Footer';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

class App extends React.Component {
  componentDidMount(){
    WebFont.load({
			google: {
				families: ['Roboto:300,400,500,700:latin']
			}
		});
  }

  render(){
    return (
    <AppWrapper className="landing-page">
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <div className="content-bg-wrap">
        <div className="content-bg"></div>
      </div>
      
      <Header />
     
      <div className="header-spacer--standard"></div>
      <div className="container">
        <div className="row display-flex">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="landing-content">
              <h1>Welcome to the Biggest Social Network in the World</h1>
              <p>We are the best and biggest social network with 5 billion active users all around the world. Share you
                thoughts, write blog posts, show your favourite music via Stopify, earn badges and much more!
              </p>
              <a href="#" className="btn btn-md btn-border c-white">Register Now!</a>
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <SignUp></SignUp>
          </div>
        </div>
      </div>
      
        <Switch>
          <Route exact path="/" component={HomePage} />
        
          {/* <Route path="" component={NotFoundPage} /> */}
        </Switch>
      {/* <Footer /> */}
    </AppWrapper>
  );
}
}

export default App;