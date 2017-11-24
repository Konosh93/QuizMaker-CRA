import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:3001';

// const encode = encodeURIComponent;

const responseBody = res => res.body;

let token = null;

const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
};

const requests = {
  del: url => (
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody)),
  get: url => (
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody)),
  put: (url, body) => (
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)),
  post: (url, body) => (
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)),
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
  getQuizList: () => (
    requests.get('/api/quizes')),
  submitQuiz: (quiz) => (
    requests.post('/api/quizes', { quiz })),
};

export default {
  accounts,
  quizes,
  setToken: _token => { token = _token;console.log(token) },
};
