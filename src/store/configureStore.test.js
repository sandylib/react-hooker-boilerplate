import React from "react";
 import { shallow } from "enzyme";
 import { StateContext } from './configureStore';

 
 
  describe('UNIT TEST/GLOBAL STATE - <Store />', () => {

      afterEach(() => {
         jest.resetAllMocks();
         jest.restoreAllMocks();
         jest.resetModules();
     });

      it("setup correctly", () => {
         const MyComponent = () => {
               return <div data-test="my-component">{'Hello World'}</div>;
             };

          const wrapper = shallow(
         <StateContext.Provider>
             <MyComponent /> 
         </StateContext.Provider>)
         .dive();

          expect(wrapper.text()).toEqual("Hello World");
       });
   });