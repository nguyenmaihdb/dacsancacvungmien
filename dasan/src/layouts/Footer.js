import React from 'react';
import zalo from '../assets/zalo2.png';
import fb from '../assets/facebook.png';

const Footer = () => {
    return(
        <div >
  <div id="footer">
            <div className="footer-top container">
                 <div className="row">
                    <div>
                         <div id="block-vechungtoi" className="col-md-3 col-sm-6 col-xs-12 alla-block">
                             <div className="title-block">
                                <h2>Về chúng tôi</h2>
                                </div>
                             <div className="block-content">
                              <div className="node-field-item">
                                 <div>
                                 <ul>
                                    <li>
                                        <strong>Hotline đặt hàng</strong>
                                        <br/>
                                        Gọi ngay <a href="tel:0378828686">0972546002</a>
                                    </li>
                                        <li>
                                        <strong>Tổng kho</strong>
                                            <br/>165 Tây Sơn, Trung Liệt, Đống Đa, Hà Nội
                                                </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="block-hotro" className="col-md-3 col-sm-6 col-xs-12 block-menu-footer alla-block">
                                    <div className="title-block">
                                        <h2>Chính sách</h2>
                                    </div>
                                    <div className="block-content">
                                        <ul>
                                            <li>
                                                <a href="/chinh-sach-bao-mat" data-drupal-link-system-path="node/154">Chính sách bảo mật</a>
                                            </li>
                                            <li>
                                                <a href="/chinh-sach-thanh-toan" data-drupal-link-system-path="node/155">Chính sách thanh toán</a>
                                            </li>
                                            <li>
                                                <a href="/chinh-sach-van-chuyen" data-drupal-link-system-path="node/157">Chính sách vận chuyển</a>
                                            </li>
                                            <li>
                                                <a href="/chinh-sach-doi-tra" data-drupal-link-system-path="node/156">Chính sách đổi trả</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div id="block-menutimhieuvechungtoifooter" class="col-md-3 col-sm-6 col-xs-12 block-menu-footer alla-block">
                                    <div class="title-block">
                                        <h2>Tìm hiểu về HHT</h2>
                                    </div>
                                    <div class="block-content">
                                        <ul>
                                            <li>
                                                <a href="/gioi-thieu" data-drupal-link-system-path="taxonomy/term/416">Giới thiệu</a>
                                            </li>
                                            <li>
                                                <a href="/doi-tac" data-drupal-link-system-path="taxonomy/term/417">Đối tác</a>
                                            </li>
                                            <li>
                                                <a href="/tuyen-dung" data-drupal-link-system-path="taxonomy/term/419">Tuyển dụng</a>
                                            </li>
                                            <li>
                                                <a href="/the-thanh-vien" data-drupal-link-system-path="taxonomy/term/418">Thẻ thành viên</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
                                <div id="block-hotlineblock" className="col-md-3 col-sm-6 col-xs-12 alla-block">
                                    <div className="title-block">
                                        <h2>Liên hệ với chúng tôi</h2>
                                    </div>
                                    <div className="block-content">
                                        <div className="block block-hotline">
                                            <ul className="social-buttons">
                                                <li>
                                                    <a target="_blank" href="https://zalo.me/0972546002" class="brandico-zalo" rel="nofollow noreferrer">
                                                        <i className="fa fa-zalo" aria-hidden="true">
                                                        <img className="img-fluid" src={zalo} alt="" />
                                                        </i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="https://www.facebook.com/dacsanvn0/" class="brandico-zalo" rel="nofollow noreferrer">
                                                        <i className="fa fa-facebook" aria-hidden="true">
                                                        <img className="img-fluid" src={fb} alt="" />
                                                        </i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container"></div>
                    </div>
                </div>
            </div>
    )
}
    

export default Footer;
