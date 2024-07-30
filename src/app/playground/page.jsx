import { promises as fs } from 'fs';
import { Ingredient, Category} from '@prisma/client'
import ButtonMe from './button';

const populate = () => {
    console.log('populating,,,,,,')
}

const HelloWorld = async () => {
    let data;

    try{
        const fileName = '/data.json';
        const file = await fs.readFile(process.cwd() + fileName, 'utf8');
        data = JSON.parse(file);
    }
    catch(error)
    {
        console.log('eeee', error)
    }


    return (<>
        <div className="hello">
            <ButtonMe ft={populate}/>
        </div>
    </>);
}

  
export default HelloWorld;