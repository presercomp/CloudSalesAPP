import React from 'react';

const Login = () => {
    return(<div className="hold-transition login-page">
    <div className="login-box">
      <div className="login-logo">
        <a href='/'><b>Admin</b>LTE</a>
      </div>
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Sign in to start your session</p>
    
          <form>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="row">              
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-block">Acceder</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
   </div>);
}

export default Login;
