import { Middleware } from '@reduxjs/toolkit';

export const loggerMiddleware: Middleware = storeApi => next => action => {
    const result = next(action);
    
    return result;
}
