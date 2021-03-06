
import { applyMiddleware }  from 'redux';
import { createLogger }     from 'redux-logger'
import thunk                from 'redux-thunk';
import websocketMiddleware  from './websocket';
import promiseMiddleware    from './promise';

/**
 * NOTE:
 * redux-thunk should be the 1st.
 * Yes, it matters on SSR. If you don't put it
 * 1st, the dispatch method will not return a
  * promise
 */
const apply = (...middlewares) => {

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();

    return applyMiddleware(
      thunk,
      websocketMiddleware,
      ...middlewares,
      logger,
    );
  }

  return applyMiddleware(
    thunk,
    websocketMiddleware,
    ...middlewares,
  );
}

export default apply;
