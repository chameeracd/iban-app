import React, {useEffect, useState} from "react";
import moment from "moment";
import axios from '../../axios';

export default function IbanList() {
    const [ibans, setIbans] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchIbans();
    }, [page])


    const fetchIbans = async () => {
        try {
            const response = await axios.get(`/iban?page=${page}`);
            setIbans(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchNextPrevTasks = (link) => {
        const url = new URL(link);
        setPage(url.searchParams.get('page'));
    }

    const renderPaginationLinks = () => {
        return <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div>
                <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{ibans.from}</span> to <span
                    className="font-medium">{ibans.to}</span> of{' '}
                    <span className="font-medium">{ibans.total}</span> results
                </p>
            </div>
            <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    {
                        ibans.links?.map((link, index) => (
                            <a style={{cursor: 'pointer'}}
                               className={`${link.active ? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'}`}
                               key={index}
                               onClick={() => fetchNextPrevTasks(link.url)}>
                                {link.label.replace('&laquo;', '').replace('&raquo;', '')}
                            </a>
                        ))
                    }
                </nav>
            </div>
        </div>
    }

    return (
        <>
            <div className="text-6xl font-bold text-slate-600">IBAN LIST</div>
            <hr className="bg-slate-400 h-1 w-full my-4"/>
            <table className="table-auto w-full">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>IBAN No:</th>
                    <th>User ID</th>
                    <th>Created At</th>
                </tr>
                </thead>
                <tbody>
                {
                    ibans.data?.map(iban => (
                        <tr key={iban.id}>
                            <td align='center'>{iban.id}</td>
                            <td align='center'>{iban.number}</td>
                            <td align='center'>{iban.created_by}</td>
                            <td align='center'>{moment(iban.created_at).format('YYYY-MM-DD, h:mm a')}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <div className="w-full">{renderPaginationLinks()}</div>
        </>
    )
}
