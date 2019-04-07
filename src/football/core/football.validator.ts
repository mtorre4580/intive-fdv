/**
 * Validator for form
 */
export class FormPlayerValidator {

    public static INPUT_NAME  = 'name';
    public static INPUT_POSITION  = 'position';
    public static INPUT_AGE  = 'age';

    /**
     * Validate inputs for form search football
     * @param {string} name
     * @param {string } value
     * @param {string[]} positions
     * @throws {Error} if input not exists
     */
    static validateField(name: string, value: string, positions: string[]) : string | null | undefined {
        switch (name) {
            case FormPlayerValidator.INPUT_NAME : {
                return !/[a-zA-Z]/.test(value) ? 'Only letters' : null;
            }
            case FormPlayerValidator.INPUT_POSITION : {
                return !positions.includes(value) ? 'Not exists the position' : null;
            }
            case FormPlayerValidator.INPUT_AGE : {
                const age = parseInt(value);
                return !(age >= 18 && age <= 40) ? 'Age between 18 and 40' : null;
            }
            default:
                throw new Error('Input name not exists');
        }
    }

    /**
     * Check is valid form
     * @param {Object} formErr
     * @return {boolean}
     */
    static isValid(formErr: Object) {
        return JSON.stringify(formErr) === JSON.stringify({name: null, position: null, age: null});
    }
 
}
