import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "../components/Content/Profile/UserProfile/ProfileStatus/ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="This is my status"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("This is my status");
    });
    test("status should be displayed", () => {
        const component = create(<ProfileStatus status="This is my status"/>);
        const instance = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        const status = instance.findByType("h3");
        expect(status.children.length).toBe(1);
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="This is my status"
                                                updateStatusThunkCreator={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateEditMod()
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});