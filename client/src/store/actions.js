import axios from 'axios';
import Config from '../config';

export async function getLessons (){
    let lessons = [];
    await axios.get(Config.API_BASE_URL + "/lessons").then(r => {
        lessons = r.data;
        console.log(lessons);
        return lessons;
    });
}
