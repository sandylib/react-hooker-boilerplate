import React from 'react';
import { mount} from "enzyme";
import { StateContext } from '../../store/configureStore';
import * as AppContextModule from "../../store/configureStore";
import UserComponent from './UserComponent';

import { initialState } from '../../reducers/index';

describe('<UserComponent />', () => {

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
    jest.resetModules();
  });

    it('renders correctly without crash', () => {
      const contextValues = { ...initialState };
      jest.spyOn(AppContextModule, 'useStateValue').mockImplementation(() => contextValues);
      jest.spyOn(AppContextModule, 'useDispatch').mockImplementation(() => ({}));

      const wrapper = mount(
            <StateContext.Provider>
              <UserComponent />
          </StateContext.Provider>);
      
      expect(wrapper.find('UserInfo')).toHaveLength(5); 
       
    });

})