import type { MockMethod } from 'vite-plugin-mock'
import { mock, Random } from 'mockjs'

function randomPictureList() {
  return mock({
    code: 200,
    message: 'ok',
    'data|100': [
      {
        'id|+1': 1,
        color: '@color',
        height: () => Random.integer(50, 150)
      }
    ]
  })
}

export default [
  {
    url: '/api/getPicture',
    method: 'get',
    response: () => randomPictureList
  }
] as MockMethod[]
