import Split from 'react-split'
    
const Resizable = () => {
    return ( 
<div>
    <Split direction="vertical" style={{height: '100vh'}}>
        <Split className='flex'>
            <div className="bg-gray-300 text-center flex justify-center items-center">Window 1</div>
            <div className="bg-gray-300 text-center flex justify-center items-center">Window 2</div>
        </Split>
        <div className='bg-gray-300 text-center flex justify-center items-center'>Window 3</div>

    </Split>
</div>
        );
}
 
export default Resizable;