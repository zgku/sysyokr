import request from '../utils/request'

export const findTargetList = () => {
    return request({
        url: "/target/findTargets",
        method: 'GET'
    })
}