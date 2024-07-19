// import { useRouter } from "next/router";

import { AddIngredient } from "./Form";

const AdmminPanel = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div>
            helloAdmin
            </div>
            <div>
            <AddIngredient/>
            </div>

        </div>
    );
}

export default AdmminPanel;