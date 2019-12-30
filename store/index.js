import vuex from 'vuex'
import news from '../store/modules/news'

const CreateStore = ()=> {
    return new vuex.Store({
    modules: {
        news
    }
    })
}

export default CreateStore;