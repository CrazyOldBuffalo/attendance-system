import axios from "axios";
import http from "../http-common";

class UserDataService {
    getAll() {
        return http.get("/User/All");
    }

    get(id) {
        return http.get(`/User/Find/${id}`);
    }

    update(id, data) {
        return http.put(`/User/Update/${id}`, data);
    }

    create(data) {
        return http.post(`/User/Create`, data);
        //return http.post('/User/Create', data);
        // DOESN't WORK FOR NO REASON ^ Data is not being send in the body
    }
}

export default new UserDataService;