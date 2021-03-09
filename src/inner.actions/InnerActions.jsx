import Dispatcher from '../inner.dispatcher/InnerDispatcher'

export const COLOR_APP_ACTIONS = {
    CHANGE_COLOR: 'innerActions.ChangeColor'
}

export function changeColor(obj) {
    Dispatcher.dispatch(obj)
}