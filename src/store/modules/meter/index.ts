import { IDistance } from '../../../models/MeterResponse';
import { fetchMeterData } from '../../../api/meter';

enum ActionTypes {
  REQUEST = 'METER/REQUEST',
  RECEIVE = 'METER/RECEIVE',
  REJECT = 'METER/REJECT',
}

interface IMeterState {
  data: IDistance[];
  loading: boolean;
  hasError: boolean;
}

type GAction<T, U> = {
  type: T;
  payload: U;
};

type Action =
  | GAction<ActionTypes.REJECT | ActionTypes.REQUEST, undefined>
  | GAction<ActionTypes.RECEIVE, IDistance[]>;

const initialState = {
  data: [],
  loading: false,
  hasError: false,
};

export const requestMeterData = () => async (dispatch: Function) =>  {
  dispatch({ type: ActionTypes.REQUEST })
  try {
    const response = await fetchMeterData();
    dispatch({ type: ActionTypes.RECEIVE, payload: response });
  } catch(error) {
    console.error(error);
    dispatch({ type: ActionTypes.REJECT })
  }
};

export default (
  state: IMeterState = initialState,
  action: Action
): IMeterState => {
  switch (action.type) {
    case ActionTypes.REQUEST:
      return { ...state, loading: true };
    case ActionTypes.RECEIVE:
      return { ...state, loading: false, data: action.payload };
    case ActionTypes.REJECT:
      return { ...state, loading: false, hasError: true };
    default:
      return { ...state };
  }
};
