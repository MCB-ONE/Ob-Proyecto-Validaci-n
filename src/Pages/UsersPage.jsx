import React, { useEffect } from 'react';
import { /* useDispatch, */ useSelector } from 'react-redux';
import { Layout } from 'antd';

/** Slices imports */
/* import { getAllUsers } from '../store/slices/users'; */
import axiosConfig from '../utils/config/axios.config';
import UserDataDetail from '../components/pure/UserDataDetail';

const {
  Content,
} = Layout;

function UsersPage() {
  /* const dispatch = useDispatch(); */
  const token = useSelector((state) => state.auth.user.token);
  /* const usersList = useSelector((state) => state.users); */
  const [usersLists, setUsersList] = React.useState('');
  useEffect(() => {
    axiosConfig
      .get('users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsersList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(usersLists);

 return (

   <Layout>
     <Content style={{ margin: '24px 16px 0' }}>
       <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
         <h1>USUARIOS</h1>
         {
            usersLists.length !== 0
              ? (
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Email</th>
                      <th scope="col">Imágenes</th>
                      <th scope="col">Estado</th>
                      <th scope="col text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersLists.map((user) => {
                      return (
                        <tr key={user.id}>
                          <UserDataDetail
                            user={user}
                            token={token}
                          />
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : <p>Actualmente no hay usuarios para mostrar</p>
          }
       </div>
     </Content>
   </Layout>
  );
}

export default UsersPage;
