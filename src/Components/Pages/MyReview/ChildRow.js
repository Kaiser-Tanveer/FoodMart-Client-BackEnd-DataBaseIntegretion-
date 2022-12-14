import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const ChildRow = ({ view, deleteHandler }) => {
    const { user } = useContext(AuthContext);
    const { _id, customer, serviceName, message } = view;


    return (
        <>
            {
                !_id ? <h1 className='text-xl text-primary'>No Review Added Yet!</h1>
                    :
                    <tr
                        className="hover">
                        <td>{customer}</td>
                        <td>{serviceName}</td>
                        <td>{message}</td>
                        <td><button onClick={() => deleteHandler(view._id)} className="btn btn-error btn-square btn-outline">X</button>
                            <p>{view.length}</p></td>
                    </tr>
            }
        </>
    );
};

export default ChildRow;