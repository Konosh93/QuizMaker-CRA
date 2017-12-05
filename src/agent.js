import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT= 'http://localhost:3001';
//const API_ROOT = 'https://murmuring-retreat-29238.herokuapp.com';

// const encode = encodeURIComponent;
let token = null;

const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
};

const requests = {
  del: url => (
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).end()),
  get: url => (
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).end()),
  put: (url, body) => (
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).end()),
  post: (url, body) => (
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).end()),
};


const accounts = {
  login: (email, password) => (
    requests.post('/api/accounts/login', { user: { email, password } })),
  recall: () => (
    requests.get('/api/accounts/recall')),
  signup: (name, email, password) => (
    requests.post('/api/accounts/signup', { user: { name, email, password } })),
};

const quizes = {
  getQuiz: (id) => (
    requests.get('/api/quizes', { id })),
  fetchQuizes: () => (
    requests.get('/api/quizes')),
  submitQuiz: (quiz) => (
    requests.post('/api/quizes', { quiz })),
};

export default {
  accounts,
  quizes,
  setToken: _token => { token = _token},
};