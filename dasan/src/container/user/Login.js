import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const redirect = '/'; // Chỉ định nơi bạn muốn chuyển hướng sau khi đăng nhập

    const submitHandler = (e) => {
        e.preventDefault();
        // Thực hiện logic xử lý đăng nhập ở đây
        navigate(redirect); // Chuyển hướng sau khi đăng nhập thành công
    }

    return (
        <Fragment>
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-3">Đăng Nhập</h1>
                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password_field">Mật khẩu</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            id="login_button"
                            type="submit"
                            className="btn btn-block py-3"
                        >
                            ĐĂNG NHẬP
                        </button>

                        <Link to="/register" relative="path" className="float-right mt-3">Bạn chưa có tài khoản?</Link>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;
