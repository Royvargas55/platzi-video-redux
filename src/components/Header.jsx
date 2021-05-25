import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

// Action
import * as Actions from '../actions/videosActions';

const { logoutRequest } = Actions;

const Header = (props) => {
  const { user, logoutRequest, isLogin, isRegister } = props;
  const handleLogout = () => {
    logoutRequest({});
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  const hasUser = Object.keys(user).length > 0;
  return (
    <header className={headerClass}>
      <Link to='/'><img className='header__img' src={logo} alt='Platzi Video' /></Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='' />}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ?
            <li><Link to='/'>{user.name}</Link></li> :
            null
          }
          {hasUser ? (
            <li>
              <Link to='/login' onClick={handleLogout}>Cerrar Sesión</Link>
            </li>
          ) : (
            <li>
              <Link to='/login'>Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.videosReducer;
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
