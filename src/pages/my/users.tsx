import React from 'react';

interface IUsersProps {
    name: string
    age: number
}

type TestType = {
    salary: number
} & IUsersProps
const Users: React.FC<TestType> = (props) => {
    console.log(props.name)
    return <div>
        users
    </div>
};

export default Users;