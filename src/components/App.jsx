import { data } from '../data/users';
import { UserList } from './user-list/UserList';
import { Section } from './section/Section';
import { Component } from 'react';
import { Button } from './button/Button';

export class App extends Component {
  state = {
    isListSown: false,
    users: data,
  };

  showList = () => {
    this.setState({ isListSown: true });
  };

  deleteUser = id => {
    this.setState(prevState => {
      return { users: prevState.users.filter(user => user.id !== id) };
    });
  };

  render() {
    const { isListSown, users } = this.state;
    return (
      <>
        <Section title="List of users">
          {!isListSown ? (
            <Button text="Show list of users" clickHandler={this.showList} />
          ) : (
            <UserList users={users} deleteUser={this.deleteUser} />
          )}
        </Section>
      </>
    );
  }
}
