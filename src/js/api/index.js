import YOUTUBE_KEY from '../config/youtubekey';
import axios from 'axios';

export async function youtube(query) {
  var res = await axios.get('/students');
  return res.data;
}
