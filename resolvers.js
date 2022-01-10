const { default: axios } = require("axios");

const Query = {
    company: (root, { id }) => {
       let url = `http://localhost:3000/companies`;
        if(id) {
            url = `${url}/${parseInt(id)}`;
        }
       return axios.get(url).then(res => !id ? res.data: [res.data]);
    },

    user: (root, {id}) => {
        let url = `http://localhost:3000/users`;
        if(id) {
            url = `${url}/${id}`;
        }
        return axios.get(url).then(res => !id ? res.data: [res.data]);
    }
}

module.exports = {
    Query
}