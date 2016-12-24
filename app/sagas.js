import { takeLatest } from 'redux-saga';
import axios from 'axios';

// Import all individual sagas
import login from './containers/Login/sagas';

const api = axios;

export default function * root() {
  yield [
    takeLatest()
  ]
}