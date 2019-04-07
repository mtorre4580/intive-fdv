import { FormPlayerValidator } from './football.validator';

describe('Validators Football', () => {

    describe('isValid method', () => {
        it('should return the form errors is invalid', () => {
            const formErrorMock = {
                name: null,
                position: null,
                age: 'Age between 18 and 40'
            }
            expect(FormPlayerValidator.isValid(formErrorMock)).toEqual(false);
        });
        it('should return the form errors is valid', () => {
            const formErrorMock = {
                name: null,
                position: null,
                age: null
            }
            expect(FormPlayerValidator.isValid(formErrorMock)).toEqual(true);
        });
    });

    describe('validateField method', () => {
        it('should throw error the input not exits', () => {
            let thrownError;
            try {
                FormPlayerValidator.validateField('input-fake', '20', []);
            }
            catch(error) {
                thrownError = error;
            }
            expect(thrownError).toBeInstanceOf(Error);
        });
        it('should validate name only letters', () => {
            const result = FormPlayerValidator.validateField(FormPlayerValidator.INPUT_NAME, '333333', []);
            const expectedMessage = 'Only letters';
            expect(result).toEqual(expectedMessage);
        });
        it('should validate position not exists', () => {
            const result = FormPlayerValidator.validateField(FormPlayerValidator.INPUT_POSITION, 'Keeper', ['Attacking Midfield', 'Central Midfield','Centre-Back']);
            const expectedMessage = 'Not exists the position';
            expect(result).toEqual(expectedMessage);
        });
        it('should validate age', () => {
            const result = FormPlayerValidator.validateField(FormPlayerValidator.INPUT_AGE, '5', []);
            const expectedMessage = 'Age between 18 and 40';
            expect(result).toEqual(expectedMessage);
        });
    });

});
