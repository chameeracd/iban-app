import React from "react";
import {useAuth} from '../../contexts/AuthContext';
import axios from '../../axios';

export default function IbanSubmit() {
    const {csrfToken} = useAuth();
    const [ibanError, setIbanError] = React.useState(null);
    const [ibanValid, setIbanValid] = React.useState(null);

    // validate iban
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIbanValid(null);
        setIbanError(null);
        const { number } = e.target.elements;
        const body = {
            number: number.value,
        };
        await csrfToken();
        try {
            const resp = await axios.post('/iban', body);
            if (resp.status === 200) {
                setIbanValid('Valid IBAN!');
            }
        } catch (error) {
            if (error.response.status === 401 || error.response.status === 422) {
                setIbanError(error.response.data.message);
            }
        }
    };

    return (
        <>
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Validate IBAN
                    </h1>
                    {ibanValid && (
                        <div
                            className="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
                            role="alert">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 inline w-5 h-5 mr-3"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Info</span>
                            <div>{ibanValid}</div>
                        </div>
                    )}

                    {ibanError && (
                        <div
                            className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                            role="alert">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 inline w-5 h-5 mr-3"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Info</span>
                            <div>{ibanError}</div>
                        </div>
                    )}

                    <form
                        className="space-y-4 md:space-y-6"
                        action="#"
                        method="post"
                        onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="number"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                IBAN
                            </label>
                            <input
                                type="text"
                                name="number"
                                id="number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="AL35202111090000000001234567"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Validate
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}