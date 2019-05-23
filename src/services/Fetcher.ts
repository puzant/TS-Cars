import axios from 'axios'

export class Fetcher {
    //  fetch data from the specified URL
    public static get(url: string) {
        return axios
        .get(url)
        .then(res => res.data)
        .catch(e => {
            throw e;
        })
    }
}