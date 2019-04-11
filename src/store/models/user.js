import api from '@services/api'
import Cookies from 'js-cookie'
import {Toast} from 'antd-mobile'
import {removeData, saveData} from '@utils/localstorageHelper'

export default {
    namespace: 'user',
    state: {
        userInfo: {},
        userLikes: {},
        userFollowInfo: {}
    },
    reducers: {

    },
    effects: dispatch => ({
        async getUserInfo(){
            let data = await api.user.getUserInfo()
            console.log(data)
        }
    })
}