import React from 'react';
import { useDispatch } from 'react-redux';
import axiosConfig from '../../utils/config/axios.config';
/** Slices imports */
import { getAllUsers } from '../../store/slices/users';

function UserDataDetail({ user, token }) {
    const {
        id, name, surname, email, frontId, backId,
    } = user;
    const dispatch = useDispatch();
    // User status
    let userStatus = 'Pendiente';
    if (user.validated === true) {
        userStatus = 'Validado';
    } else if (user.rejected === true) {
        userStatus = 'Rechazado';
    } else {
        userStatus = 'Pendiente';
    }

    // Update validate field
    const validateUser = () => {
        const body = {
            validated: true,
        };
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        console.log({ headers });

        // Returns the response with a Promise
        return axiosConfig.patch(`users/${id}`, body, { headers })
        .then((response) => {
            if (response.data && response.status === 200) {
                alert(JSON.stringify(response.data));
                dispatch(getAllUsers(token));
            } else {
                throw new Error('User not found & no update done');
            }
        })
            .catch((error) => alert(`Something went wrong: ${error}`));
    };

    // Update validate field
    const rejectUser = () => {
        const body = {
            rejected: true,
        };
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        // Returns the response with a Promise
        return axiosConfig.patch(`users/${id}`, body, { headers })
            .then((response) => {
                if (response.data && response.status === 200) {
                    alert(JSON.stringify(response.data));
                } else {
                    throw new Error('User not found & no update done');
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`));
    };

    return (
      <>
        <th scope="row">{id}</th>
        <td>{`${name} ${surname}`}</td>
        <td>{email}</td>
        <td>
          {frontId !== null ? <img src={frontId.url} alt="Parte delantera DNI" style={{ width: '150px' }} /> : <p>Sin Imagen</p>}
          ||
          {' '}
          {backId !== null ? <img src={backId.url} alt="Parte delantera DNI" style={{ width: '150px' }} /> : <p>Sin Imagen</p>}
        </td>
        <td>
          {userStatus}
        </td>
        <td>
          <button type="button" onClick={() => validateUser()} className="btn btn-primary me-3">Validar</button>
          <button type="button" onClick={() => rejectUser()} className="btn btn-danger">Rechazar</button>
        </td>
      </>
    );
}

export default UserDataDetail;
