import React from 'react';
/** Slices imports */
import { Modal, Button } from 'antd';
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

    // Modals methods
    const [isModalFrontVisible, setIsModalFrontVisible] = React.useState(false);
    const [isModalBackVisible, setIsModalBackVisible] = React.useState(false);

    const showModalFront = () => {
        setIsModalFrontVisible(true);
    };

    const showModalBack = () => {
        setIsModalBackVisible(true);
      };

    const handleOkFront = () => {
        setIsModalFrontVisible(false);
    };

    const handleOkBack = () => {
        setIsModalBackVisible(false);
    };

    return (
      <>
        <th scope="row">{id}</th>
        <td>{`${name} ${surname}`}</td>
        <td>{email}</td>
        <td>
          {frontId !== null ? (
            <>
              <Button type="primary" onClick={showModalFront}>
                Ver frontal
              </Button>
              <Modal title="DNI FRONTAL" visible={isModalFrontVisible} onOk={handleOkFront} cancelButtonProps={{ style: { display: 'none' } }} closable={false}>
                <img src={frontId.url} alt="Parte delantera DNI" style={{ width: '450px' }} />
              </Modal>
            </>
          )
           : <p>Sin Imagen  || </p>}

          {' '}
          {backId !== null ? (
            <>
              <Button type="primary" onClick={showModalBack}>
                Ver reverso
              </Button>
              <Modal title="Basic Modal" visible={isModalBackVisible} onOk={handleOkBack}>
                <img src={backId.url} alt="Parte delantera DNI" style={{ width: '450px' }} />
              </Modal>
            </>
          ) : <p>Sin Imagen</p>}
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
