import Dispatcher from '../inner.dispatcher/InnerDispatcher'
import * as Actions from '../inner.actions/InnerActions'
import {EventEmmiter} from 'events'

export default class InnerStore extends EventEmmiter {

    constructor() {
        super()
    }

    handleActions(action) {
        
    }

}

const innerStore = new InnerStore()
Dispatcher.register(innerStore.handleActions.bind(innerStore))