import  React from 'react';
import renderer from 'react-test-renderer';
import LoadingResults from './loading-results';

describe('<LoadingResults />' , () => {
   
    it('should render snapshot', () => {
        const component = renderer.create(<LoadingResults />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

})
