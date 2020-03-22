import React from 'reat';
import { render } from '@testing-library/react';
import MissionForm from './MissionForm';

//2 parameters, one for the name of the testing, another one is a callback function
test('Mission Form render correctly', () => {
    const mockGetData = jest.fn();
    const { getByText, queryByText } = render(
    <MissionForm getData={ mockGetData } isFetchingData={false} />)
    
    //test that the button is render, and the loading state is not
    getByText(/get data/i);
    //expect(getByText(/get data/i)).toBeInTheDocument();
    expect(queryByText(/we are fetching data/i)).toBeNull();
});

test("Component transition to loading state appears when isFetchingData is true", () => {
    const mockGetData = jest.fn();
    const { getByText, queryByText } = render(
    <MissionForm getData={ mockGetData } isFetchingData={false} />);

    getByText(/get data/i);
    expect(queryByText(/we are fetching data/i)).toBeNull();

    //re-render the component because isFetchingData has been changed to true
    render (<MissionForm getData={ mockGetData } isFetchingData={true} />);
    getByText(/we are fetching data/i);
    expect(queryByText(/get data/i)).toBeNull();

});

//TODO: add a test tp atest tje transition from the loading state back to the resting state