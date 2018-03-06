import jsonp from 'common/js/jsonp'
import {commonParams} from './config'
import axios from 'axios'

export function getSongUrl(songmid) {
  const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'

  const data = Object.assign({}, commonParams, {
    cid: 205361747,
    songmid: songmid,
    filename: `C400${songmid}.m4a`,
    guid: 3946399685
  })
  const options = {
    param: 'callback',
    prefix: 'MusicJsonCallback'
  }
  return jsonp(url, data, options)
}

export function getLyric(songmid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: songmid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}