import { trackErrorInSentry } from './error-boundary.service';

describe('ErrorHandlerService', () => {

    it('should track the error to logger', () => {
        const error = new Error('Error in component...');
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        trackErrorInSentry(error, {});
        expect(consoleErrorSpy).toHaveBeenCalled();
    });

})