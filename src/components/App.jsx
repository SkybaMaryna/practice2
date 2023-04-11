import { data } from '../data/users'
import { UserList } from './user-list/UserList';
import { User } from './user/User'
import {Section} from './section/Section'

export const App = () => {
  return (
    <>
      <Section>
        <User user={data[0]} />
      </Section>
      
      <Section title="List of users">
        <UserList users={data} />
      </Section>
    </>
  );
};