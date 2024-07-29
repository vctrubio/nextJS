import { promises as fs } from 'fs';

const HelloWorld = async () => {
    
    console.log('start...............')
    try{
        const fileName = '/data.json';
        const file = await fs.readFile(process.cwd() + fileName, 'utf8');
        const data = JSON.parse(file);
        console.log('file', data)
    }
    catch(error)
    {
        console.log('eeee', error)
    }
    console.log('end...............')

    return (<>
        <div className="hello">
            whos there
        </div>
    </>);
}

  
export default HelloWorld;