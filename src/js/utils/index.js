import jwtDecode from 'jwt-decode';

export function isValidToken() {
  let token = localStorage.getItem('token');
  if (token) {
    let decoded = jwtDecode(token);
    return decoded.exp > Date.now() / 1000;
  } else {
    return false;
  }
}
