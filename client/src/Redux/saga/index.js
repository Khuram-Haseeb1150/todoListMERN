import { all } from 'redux-saga/effects';
import postsSaga from './todo';

export default function* () {
  yield all([postsSaga()]);
}