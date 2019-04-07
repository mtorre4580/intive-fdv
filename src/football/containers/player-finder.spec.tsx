import React from 'react';
import { shallow } from 'enzyme';
import PlayerFinderContainer from './player-finder';

it('renders without crashing', () => {
  shallow(<PlayerFinderContainer />);
});
