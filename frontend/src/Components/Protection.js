import React, { useState , useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import CryptoJS from 'crypto-js';


const Protection = ({children}) => {
    const [loggedin,setloggedin] = useState(false);
    const history = useHistory();

    function decryptData(encryptedData, secretKey) {
        const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }

    useEffect(() => {
        // const loggedinstatus = localStorage.getItem("token");
        // console.log(loggedinstatus);
        const data = localStorage.getItem("token");
        const loggedinstatus = decryptData(data, "abcd");
        if (loggedinstatus === "true") {
            setloggedin(true);
        }else{
            setloggedin(false);
            console.log("harsha");
            history.push("/SignIn");
        }
    }, []);
    return (
        <div>
            {loggedin && children }
        </div>
    );
}

export default Protection;
