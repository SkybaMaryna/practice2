import { data } from '../data/users'
import { UserList } from './user-list/UserList';
import { User } from './user/User'


export const App = () => {
  return (
    <>
    <User user={data[0]} />
    <UserList users={data} />
    </>
  );
};