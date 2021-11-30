import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from 'antd';
import UserDataDetail from '../components/pure/UserDataDetail';
/** Slices imports */
import { getAllUsers } from '../store/slices/users';

const {
  Content,
} = Layout;

function UsersPage() {
  const token = useSelector((state) => state.auth.user.token);
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users.usersList);
  console.log(usersData);
  // Force reload father
  const reloadData = () => {
    dispatch(getAllUsers(token));
  };
  useEffect(() => {
    reloadData();
  }, []);

 return (
   <Layout>
     <Content style={{ margin: '24px 16px 0' }}>
       <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
         <h1>USUARIOS</h1>
         {
            usersData.length !== 0
              ? (
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Email</th>
                      <th scope="col">Imágenes</th>
                      <th scope="col">Estado</th>
                      <th scope="col" className="text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersData.map((user) => {
                      return (
                        <tr key={user.id}>
                          <UserDataDetail
                            user={user}
                            token={token}
                            reloadData={() => reloadData()}
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
