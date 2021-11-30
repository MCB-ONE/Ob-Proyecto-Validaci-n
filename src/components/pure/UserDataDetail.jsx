import React from 'react';
/** Slices imports */
import usersService from '../../services/users.service';

function UserDataDetail({ user, token, reloadData }) {
    const {
        id, name, surname, email, frontId, backId,
    } = user;
    // Disabled button
    const [disable, setDisable] = React.useState(false);
    const [status, setStatus] = React.useState('pendiente');
    React.useEffect(() => {
        if (user.validated === true) {
            setDisable(true);
            setStatus('validado');
        } else if (user.validated === false && user.rejected === true) {
            setDisable(false);
            setStatus('pendiente');
        } else if (user.validated === false && user.rejected === false && user.restarted === true) {
            setDisable(false);
            setStatus('pendiente');
        }
        return () => {
            reloadData();
        };
    }, [user.validated, setDisable]);

    // Update validate field
    const validateUser = () => {
        const body = {
            validated: true,
        };
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        // Use the service instead of a reducer
        usersService.updateStatusById(id, body, headers);
        setDisable(true);
        setStatus('validado');
        reloadData();
    };

    // Update validate field
    const rejectUser = () => {
        const body = {
            rejected: true,
        };
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        // Use the service instead of a reducer
        usersService.updateStatusById(id, body, headers);
        setDisable(false);
        setStatus('pendiente');
        reloadData();
    };

    // Update validate field
    const restartUser = () => {
        const body = {
            restarted: true,
        };
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        // Use the service instead of a reducer
        usersService.updateStatusById(id, body, headers);
        setDisable(false);
        setStatus('pendiente');
        reloadData();
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
          {status}
        </td>
        <td className="text-center">
          <button
            type="button"
            onClick={() => validateUser()}
            className="btn btn-primary me-3"
            disabled={disable}
          >
            Validar
          </button>
          <button type="button" onClick={() => rejectUser()} className="btn btn-warning me-3">Rechazar</button>
          <button type="button" onClick={() => restartUser()} className="btn btn-danger">Resetear</button>
        </td>
      </>
    );
}

export default UserDataDetail;
