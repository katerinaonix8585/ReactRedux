import { useAppDispatch, useAppSelector } from "store/hooks";
import { UsersPageWrapper, UsersCardWrapper, UserCard, Paragraph } from "./styles"
import { usersSliceActions, usersSliceSelectors } from "store/redux/users/usersSlice";
import { UserData } from "store/redux/users/types";
import { v4 } from "uuid";
import Button from "components/Button/Button";

function Users() {

  const users = useAppSelector(usersSliceSelectors.users);  

  const dispatch = useAppDispatch();

  const usersCardElements = users.map((user: UserData) => {
    
    const deleteUser = () => {
      dispatch(usersSliceActions.deleleUser(user.id))
    }

    return <UserCard key={v4()}>
              <Paragraph>{user.firstlastName}</Paragraph>
              <Paragraph>{user.age}</Paragraph>
              <Paragraph>{user.jobTitle}</Paragraph>
              <Button name='Delete' onButtonClick={deleteUser}></Button>
           </UserCard>
  })

  const deleteAllUsers = ()=>{
    dispatch(usersSliceActions.deleteAllUser())    
  }

  return (
    <UsersPageWrapper>
      <UsersCardWrapper>
         {usersCardElements}
      </UsersCardWrapper>      
      {users.length > 0 && <Button onButtonClick={deleteAllUsers} name="deleteAllUsers" />}
    </UsersPageWrapper>
    
    
  )
}

export default Users
