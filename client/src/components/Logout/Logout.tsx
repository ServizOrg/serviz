import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from "react-i18next";

function Logout() {
    const { t, i18n } = useTranslation();

    return (
        <div >
            <div>
            
                <Button style= {{color:"darkgoldenrod"}} onClick={() => {
                     localStorage.clear();
                        window.location.href = '/'
                    }} id="logout">Logout</Button>
               
            </div>
        </div>
    );

}


export default Logout;