import React from 'react';
import Player from './player';
import { FootballPlayer } from '../../core/football.models';
import renderer from 'react-test-renderer';

describe('<Player />', () => {
   it('should render snapshot', () => {
    const props : FootballPlayer = {
        name: 'Lionel',
        team: 'Argentina',
        age: '35',
        position: 'Keeper'
    };
    const component = renderer.create(<Player {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
    
});