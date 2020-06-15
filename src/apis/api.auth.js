import Http from './http';

const authentication = ({ email, password }) => Http.post('/token', { email, password });

const forgotPassword = ({ email }) => Http.post('/user/forgot/pass', { email });

export default {
    authentication,
    forgotPassword
}