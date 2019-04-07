import { mount, shallow } from 'enzyme';
import ErrorBoundary from './error-handler';
import  React from 'react';
import renderer from 'react-test-renderer';

describe('<ErrorBoundary />' , () => {
   
    it('should render snapshot', () => {
        const component = renderer.create(<ErrorBoundary><div>content mock</div></ErrorBoundary>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

})