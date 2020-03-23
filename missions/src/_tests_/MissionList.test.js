import React from 'reat';
import { render, fireEvent, wait } from '@testing-library/react';
import MissionList from './MissionList';

//TOTO: test the mounting state for the component
//const Missions = 

Test("Missions list shows data when rendered tith new missions data", () => {
    const { queryAllByTestId, rerender } = render(<MissionsList error="" missions={[]} />);

    //assert that there are mo mission listed when the component first renders
    //queryBy, something that returns an array is more than one match ("All" query)
    expect(queryAllByTestId(/mission/i)).toStrictEqual([]);
    expect(queryAllByTestId(/mission/i)).toHaveLength(0);

    rerender(<MissionsList error="" missions={missions} />);

    expect(queryAllByTestId(/mission/i)).toHaveLength(10);
    //TODO: test that the error message is not rendered 

});
//TODO: Test the error state
