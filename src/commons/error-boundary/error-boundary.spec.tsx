import { mount } from 'enzyme';
import  React from 'react';
import renderer from 'react-test-renderer';
import ErrorBoundary from './error-boundary';

const DummyComponent = () => {
    throw new Error;
};

const pauseErrorLogging = (codeToRun : any) => {
    const logger = console.error;
    console.error = () => {};
    codeToRun();
    console.error = logger;
};

describe('<ErrorBoundary />' , () => {
   
    it('should render snapshot', () => {
        const component = renderer.create(<ErrorBoundary><div>content mock</div></ErrorBoundary>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('should catches error and render message', () => {
        pauseErrorLogging(() => {
            const wrapper = mount(
                <ErrorBoundary >
                    <DummyComponent />
                </ErrorBoundary>
            );
            expect(wrapper.text()).toEqual('Error ups!!');
        });
    });

})
