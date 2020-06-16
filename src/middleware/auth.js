/* Authetifacation actions */
import { message } from 'antd';


// LOGIN
export const login = (props, d) => {
    if (d.username === 'user' && d.password === 'password') {
        localStorage.setItem('auth', d)
        props.history.push('/home');
        message.success('Login Success')
    }
    else {
        message.error('Login Failed')
    }
}

// LOGOUT
export const logout = () => {
    localStorage.removeItem('auth')
    message.success('Logout Success')
}

// LOGIN STATUS
export const isLogin = () => {
    if (localStorage.getItem('auth')) return true;
    return false;
}
