import React from 'react';
import Logo from 'images/logo.png';
import Product1 from 'images/product1.png';
import LogoSmall from 'images/logo-colored-small.png';
import Product2 from 'images/product2.png';
// import FontAwesome from 'react-fontawesome';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header--standard header--standard-landing" id="header--standard">
        
        <div className="container">
          <div className="header--standard-wrap">
            <a href="#" className="logo">
              <div className="img-wrap">
                <img src={Logo} alt="Olympus"/>
                <img src={LogoSmall} alt="Olympus" className="logo-colored"/>
                {/* <img src={Product1} alt="Olympus"/>
                <img src={Product2} alt="Olympus" className="logo-colored"/> */}


              </div>
              <div className="title-block">
                <h6 className="logo-title">olympus</h6>
                <div className="sub-title">SOCIAL NETWORK</div>
              </div>
            </a>

            <a href="#" className="open-responsive-menu js-open-responsive-menu">
              <svg className="olymp-menu-icon">
                {/* <use xlink:href="svg-icons/sprites/icons.svg#olymp-menu-icon"></use> */}
                </svg>

            </a>

            <div className="nav nav-pills nav1 header-menu">
              <div className="mCustomScrollbar">
                <ul>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false" tabindex='1'>Profile</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Profile Page</a>
                      <a className="dropdown-item" href="#">Newsfeed</a>
                        <a className="dropdown-item" href="#">Post Versions</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown dropdown-has-megamenu">
                    <a href="#" className="nav-link dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false" tabIndex='1'>Forums</a>
                    <div className="dropdown-menu megamenu">
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="column-tittle">Main Links</h6>
                          <a className="dropdown-item" href="#">Profile Page<span className="tag-label bg-blue-light">new</span></a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                        </div>
                        <div className="col-sm-3">
                          <h6 className="column-tittle">BuddyPress</h6>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page<span className="tag-label bg-primary">HOT!</span></a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                        </div>
                        <div className="col-sm-3">
                          <h6 className="column-tittle">Corporate</h6>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                        </div>
                        <div className="col-sm-3">
                          <h6 className="column-tittle">Forums</h6>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                          <a className="dropdown-item" href="#">Profile Page</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Terms & Conditions</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Events</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Privacy Policy</a>
                  </li>
                  <li className="close-responsive-menu js-close-responsive-menu">
                    <svg className="olymp-close-icon">
                      {/* <use xlink:href="svg-icons/sprites/icons.svg#olymp-close-icon"></use> */}
                    </svg>
                  </li>
                  <li className="nav-item js-expanded-menu">
                    <a href="#" className="nav-link">
                      <svg className="olymp-menu-icon">
                        {/* <use xlink:href="svg-icons/sprites/icons.svg#olymp-menu-icon"></use> */}
                      </svg>
                      <svg className="olymp-close-icon">
                        {/* <use xlink:href="svg-icons/sprites/icons.svg#olymp-close-icon"></use> */}
                      </svg>
                    </a>
                  </li>
                  <li className="shoping-cart more">
                    <a href="#" className="nav-link">
                      <svg className="olymp-shopping-bag-icon">
                        {/* <use xlink:href="svg-icons/sprites/icons.svg#olymp-shopping-bag-icon">
                        </use> */}
                      </svg>
                      <span className="count-product">2</span>
                    </a>
                    <div className="more-dropdown shop-popup-cart">
                      <ul>
                        <li className="cart-product-item">
                          <div className="product-thumb">
                            <img src={Product1} alt="product"/>
                          </div>
                          <div className="product-content">
                            <h6 className="title">White Enamel Mug</h6>
                            <ul className="rait-stars">
                              <li>
                              {/* <FontAwesome
                                name='rocket'
                                size='2x'
                                spin
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                              /> */}
                                {/* <i className="fa fa-star star-icon c-primary" aria-hidden="true"></i> */}
                              </li>
                              <li>
                                <i className="fa fa-star star-icon c-primary" aria-hidden="true"></i>
                              </li>

                              <li>
                                <i className="fa fa-star star-icon c-primary" aria-hidden="true"></i>
                              </li>
                              <li>
                                <i className="fa fa-star star-icon c-primary" aria-hidden="true"></i>
                              </li>
                              <li>
                                <i className="fa fa-star-o star-icon" aria-hidden="true"></i>
                              </li>
                            </ul>
                            <div className="counter">x2</div>
                          </div>
                          <div className="product-price">$20</div>
                          <div className="more">
                            <svg className="olymp-little-delete">
                              {/* <use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use> */}
                            </svg>
                          </div>
                        </li>
                        <li className="cart-product-item">
                          <div className="product-thumb">
                            <img src={Product2} alt="product"/>
                          </div>
                          <div className="product-content">
                            <h6 className="title">Olympus Orange Shirt</h6>
                            <ul className="rait-stars">
                              <li>
                                <i className="fa fa-star star-icon c-primary" aria-hidden="true"></i>
                              </li>
                              <li>
                                <i className="fa fa-star star-icon c-primary" aria-hidden="true"></i>
                              </li>

                              <li>
                                <i className="fa fa-star star-icon c-primary" aria-hidden="true"></i>
                              </li>
                              <li>
                                <i className="fa fa-star star-icon c-primary" aria-hidden="true"></i>
                              </li>
                              <li>
                                <i className="fa fa-star-o star-icon" aria-hidden="true"></i>
                              </li>
                            </ul>
                            <div className="counter">x1</div>
                          </div>
                          <div className="product-price">$40</div>
                          <div className="more">
                            <svg className="olymp-little-delete">
                              {/* <use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete">
                              </use> */}
                            </svg>
                          </div>
                        </li>
                      </ul>

                      <div className="cart-subtotal">Cart Subtotal:<span>$80</span></div>

                      <div className="cart-btn-wrap">
                        <a href="#" className="btn btn-primary btn-sm">Go to Your Cart</a>
                        <a href="#" className="btn btn-purple btn-sm">Go to Checkout</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;
