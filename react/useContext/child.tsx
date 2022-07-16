/**
 * @file 收集册
 */
 import React, { useContext } from 'react'
 
 import { GlobalContext, ActionKind } from './store'
 
 const Collect: React.FC<unknown> = () => {
   const { dispatch } = useContext(GlobalContext)
   return (
     <div>
      <button 
        onClick={() => dispatch({ type: ActionKind.loadingShow })}>
          click me
      </button>
     </div>
   )
 }
 
 export default Collect
 