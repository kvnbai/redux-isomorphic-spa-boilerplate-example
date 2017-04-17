
import * as config from '../../../config';
import fetch from 'isomorphic-fetch';
import Promise from 'bluebird';

import { userAttemptRegister } from './actions';
import { userRegisterSuccess } from './actions';
import { userRegisterFailed } from './actions';
import { userRegisterDone } from './actions';

export default function thunkAttemptRegister(data) {

  return (dispatch) => {
    dispatch(userAttemptRegister(true, false));
    dispatch(userRegisterFailed({}));

    fetch(`${ config.api.host }/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => {
      return response.json().then(json => {
        if (!response.ok) {
          throw json;
        }

        return json;
      });
    })
    .then(json => dispatch(userRegisterSuccess(true)))
    .catch(err => dispatch(userRegisterFailed(err)))
    .then(() => dispatch(userRegisterDone(false)));
  };
}