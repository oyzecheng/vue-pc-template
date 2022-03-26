import { GET, POST } from '@/utils/request'

export const post = (params) => POST('/post', params)

export const get = () => GET('/get')
