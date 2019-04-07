import React from 'react';
import PlayerFinder from './player-finder';
import renderer from 'react-test-renderer';

describe('<PlayerFinder />', () => {
   it('should render snapshot', () => {
    const props : any = {
        players: [],
        loading: false,
        error: false,
        onSearch: jest.fn()
    };
    const component = renderer.create(<PlayerFinder {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
    
});