/**
 * Track error to sentry or other error tracking...
 * @param {Error} error
 * @param {Object} info
 */
export function trackErrorInSentry(error: Error | null, info: Object) {
    console.error('mock tracking err', error, info);
}
