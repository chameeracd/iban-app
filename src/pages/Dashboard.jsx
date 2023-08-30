import React from 'react';
import {useAuth} from '../contexts/AuthContext';
import IbanSubmit from "./partial/IbanSubmit.jsx";
import IbanList from "./partial/IbanList.jsx";

export default function Dashboard() {
    const {user} = useAuth();
    if (user.role === 'admin') {
        return (
            <>
                <IbanList/>
            </>
        );
    } else {
        return (
            <>
                <IbanSubmit/>
            </>
        );
    }
}