import React from 'react';
import logo from "../assets/logo_31.png";
import ShoppingCart from './ShoppingCart';
import { Link } from "react-router-dom";


class Header extends React.Component {
  render() {
    return (
      <div path-fontpage mm-wrapper>
        <div className="header">
          <div className="header-top">
            <div className="container">
              <div>
                <div id="block-blockfixtext" className="alla-block">
                  <div className="block-content">
                    <ul className="header-infomation">
                      <li>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        Lô A52 khu 3h, P. Phúc Diễn, Q. Bắc Từ Liêm, Hà Nội
                      </li>
                      <li>
                        <a href="tel:0378828686">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                          Hotline: 037 882 8686
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="block-accountblock" className="alla-block">
                  <div className="block-content">
                    <div className="account-prof">
                      <i className="fa fa-user"></i>
                      &nbsp;
                      <span>
                        <b>
                      <Link to="/login" relative="path">Đăng nhập </Link>
                      </b>
                        hoặc
                        <b>
                        <Link to="/register" relative="path">Đăng ký</Link>
                          </b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='header-center bg-white '>
            <div className="container ">
              <div className="row ">
                <div className="logo-wrapper ">
                  <a className="logo navbar-btn" href="/" title="Trang chủ" rel="home">
                    <img className="img-fluid" src={logo} alt="" />
                  </a>
                </div>

                <div id="block-headercenterblock" className="hidden-sm hidden-xs alla-block">
                  <div className="block-content ">
                    <div className="block-support-user ">
                      <ul>
                        <li className="van-chuyen">
                          <b>Hỗ trợ vận chuyển</b>
                          <p>Toàn quốc</p>
                        </li>
                        <li className="support">
                          <b>Hỗ trợ 24/7</b>
                          <p>
                            Hotline:
                            <a href="tel:0972545402" className=' text-black text-decoration-none'>
                              <b> 0972546002</b>
                            </a>
                          </p>
                        </li>
                        <li className="timer">
                          <b>Giờ làm việc</b>
                          <p>Tất cả các ngày trong tuần</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
               <div id="block-iconblock" className="alla-block">
               <a className="cart-btn" href="/">
                        <ShoppingCart />
                  </a>
                     
                </div> 
              </div>
            </div>
          </div>

          <div className="header-end">
            <div className="alla-navigator">
              <div className="container">
                <div>
                  <div id="block-responsivemenumobileicon-2" className="responsive-menu-toggle-wrapper responsive-menu-toggle alla-block">
                    <div className="block-content">
                      <a id="toggle-icon" className="toggle responsive-menu-toggle-icon" title="Menu" href="#off-canvas">
                        <span className="icon"></span>
                        <span className="label">Menu</span>
                      </a>
                    </div>
                  </div>
                  <div id="block-horizontalmenu-2" className="block-horizontal-menu alla-block">
                    <div className="block-content">
                      <nav className="responsive-menu-block-wrapper">
                       <ul className="horizontal-menu text-white text-decoration-none lh-1-5">
                        <li className="menu-item">
                          <Link to="/" className="is-active">Trang chủ</Link>
                        </li>
                        <li className="menu-item menu-item--expanded">
                          <Link to="/ve-hht">Giới thiệu</Link>
                        </li>
                        <li className="menu-item menu-item--expanded">
                          <Link to="/san-pham">Sản phẩm</Link>
                          <ul className="menu sub-nav">
                            <li className="menu-item">
                              <Link to="/gio-qua-tet">Giỏ quà Tết</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/dac-san-nui-rung">Đặc sản núi rừng</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/dac-san-song-bien">Đặc sản sông biển</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/hai-san-bach-long-vi">Hải sản Miền Bắc</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/dac-san-banh-keo">Đặc sản Miền Trung</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/thao-duoc-quy">Đặc sản Miền Nam</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <Link to="/tin-tuc">Tin tức</Link>
                        </li>
                        <li className="menu-item">
                          <Link to="/he-thong-cua-hang" title="( Click để đến của cửa hàng bạn muốn )">Hệ thống cửa hàng</Link>
                        </li>
                      </ul>
                      </nav>
                    </div>
                  </div>
                  <div id="block-searchinputblock" className="alla-block">
                    <div className="block-content">
                      <form method="GET" action="/tim-kiem" className="search-custom-form">
                        <input type="text" name="title" value="" className="form-control form-text-search-custom" placeholder="Tìm sản phẩm" />
                        <input type="submit" value="" className="btn-search" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

