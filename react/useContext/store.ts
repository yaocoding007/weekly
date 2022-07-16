import { createContext, Dispatch } from 'react'

export enum ActionKind {
  loadingShow = 'loadingShow',
  loadingHidden = 'loadingHidden'
}

export interface IState {
  loading: boolean
}

export type Action =
  | {
      type: ActionKind.loadingShow
    }
  | {
      type: ActionKind.loadingHidden
    }

interface IContextProps {
  state: {
    loading: boolean
  }
  dispatch: Dispatch<Action>
}

export const initialState: IState = {
  loading: false
}

/**
* ===============================================================
* 创建reducer
*/

export const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case ActionKind.loadingShow:
      return {
        ...state,
        loading: true
      }
    case ActionKind.loadingHidden:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

/**
* ===============================================================
* 创建 Context
*/
export const GlobalContext = createContext<IContextProps>({} as IContextProps)
