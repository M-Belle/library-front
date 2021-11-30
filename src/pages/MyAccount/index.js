import React, {useEffect, useState} from "react";
import axios from "axios";
import UserItem from "../../components/UserItem";

const MyAccount = ({ setUserToken }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get('http://localhost:3030/users/')
                setUser(resp.data);
            } catch (err) {
                throw new Error(err);
            }
        };
        fetchData()
    }, []);

    return (
        <div>
            {
                user.map(({id, name, mail}) => {
                    return <UserItem key={id} name={name} mail={mail}/>;
                })
            }
        </div>
    )
}

export default MyAccount;
