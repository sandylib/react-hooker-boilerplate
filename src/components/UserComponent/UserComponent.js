import React from 'react'
import { useStateValue, useDispatch } from '../../store/configureStore';
import { UPDATE_SELECTED_USER } from '../../constants/actionConstants';

const UserInfo = ({user, selected, onClick}) => {

    const handleClick = (user) => e => {
        onClick(user);
      };

    return (
       <tr 
        onClick={handleClick(user)} 
        className={`${user === selected ? 'hightlight' : '' }`}
       >
        <td>{user.balance}</td>
        <td><img src={user.picture} width={60} height={80}/></td>
        <td>{user.age}</td>
        <td>{user.name}</td>
        <td>{user.gender}</td>
        <td>{user.company}</td>
        <td>{user.email}</td>
       </tr>
    )


}


export default function UserComponent() {
    const {user} = useStateValue();

    const {list, selected} = user;

    const dispatch = useDispatch();

    const handleOnClick = user => 
        dispatch({
            type: UPDATE_SELECTED_USER,
            selected: user
        });
    return (
        <table>
        <tbody>
        <tr>
            <th>balance</th>
            <th>picture</th>
            <th>age</th>
            <th>name</th>
            <th>gender</th>
            <th>company</th>
            <th>email</th>
        </tr>

        {list.map( (item, idx) => <UserInfo key={idx} user={item} selected={selected} onClick={handleOnClick} /> )}
        </tbody>
    </table>
    )
}
