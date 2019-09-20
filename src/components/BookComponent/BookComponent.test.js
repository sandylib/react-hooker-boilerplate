import React from 'react';
import { mount} from "enzyme";
import { StateContext } from '../../store/configureStore';
import * as AppContextModule from "../../store/configureStore";
import BookComponent from './BookComponent';

import { initialState } from '../../reducers/index';

describe('<BookComponent />', () => {

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
              <BookComponent />
          </StateContext.Provider>);
      
      expect(wrapper.find('BookInfo')).toHaveLength(100);
       
    });

})


 

 
	