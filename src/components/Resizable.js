import Split from 'react-split'
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
    
const Resizable = () => {
    return ( 
<div>
    <Split direction="vertical" style={{height: '100vh'}}>
        <Split className='flex' sizes={[35,65]}>
            <div className="bg-gray-300 text-center flex justify-center items-center"><AddUser/></div>
            <div className="bg-gray-300 text-center flex justify-center items-center"><UpdateUser/></div>
        </Split>
        <div className='bg-gray-300 text-center flex justify-center items-center'>Created By <a href="https://www.linkedin.com/in/adgamerx/" className='text-blue-500 pl-1'>Aman Sharma</a></div>

    </Split>
</div>
        );
}
 
export default Resizable;