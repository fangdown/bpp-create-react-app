import axios from 'axios';

export const storyClass = async () => {
  axios.get('http://localhost:7200/api/storyClass').then(res => {
    console.log('data1111111111', res.data)
    console.log('typeof ', typeof res.data)
    console.log('data.err_msg', res.data.err_msg)
  })
  return {}
}
