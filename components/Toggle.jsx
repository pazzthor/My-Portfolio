// import React, { useContext } from 'react'
// import {BsSun, BsMoonFill} from 'react-icons/bs'
// import { themeContext } from '../../../Downloads/Personal-Portfolio-React-master/Personal-Portfolio-React-master/src/Context'

// const Toggle = () => {

//     const theme = useContext(themeContext);
//     const darkMode = theme.state.darkMode;
//     const handleBar = () => {

//         theme.dispatch({type: 'toggle'});
//     }

//   return (
//     <div className='p-1 rounded-full bg-gradient-to-r from-purple-600 to-teal-300 flex'>
//         <div className='flex justify-between border-2 border-transparent p-1 rounded-full relative items-center' onClick={handleBar}>
//             <BsMoonFill />
//             <BsSun />
//         </div>

//         <div className='border rounded-full bg-red-500 absolute' style={darkMode ? {left:'2px'} : {right: '2px'}}>

//         </div>
//     </div>
//   )
// }

// export default Toggle