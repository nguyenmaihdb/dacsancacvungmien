import React, { useState } from 'react';

function ShoppingCart() {
    // Trạng thái của hộp thoại thông báo
    const [showNotification, setShowNotification] = useState(false);

    return (
        <div className="d-inline-block">
            <form className="form-inline">
                {/* Biểu tượng giỏ hàng */}
                <div 
                    className="cart-icon mr-2"
                    onMouseEnter={() => setShowNotification(true)} // Hiển thị thông báo khi di chuột vào
                    onMouseLeave={() => setShowNotification(false)} // Ẩn thông báo khi di chuột ra
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="65" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                </div>
                
                {/* Hộp thoại thông báo */}
                {showNotification && (
                    <div className="alert alert-light cart-notification-horizontal position-absolute start-55 bottom-30 p-0 bg-white rounded-end" role="alert">
                        Không có sản phẩm trong giỏ hàng.
                    </div>
                )}
            </form>
        </div>
    );
}

export default ShoppingCart;
