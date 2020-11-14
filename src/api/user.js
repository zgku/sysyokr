import request from '../utils/request'

export const findUserList = () => {
    return request({
        url: "/user/findUsers",
        method: 'GET'
    })
}