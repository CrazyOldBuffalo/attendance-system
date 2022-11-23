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
        return http.post("/User/Create", data);
    }
}

export default new UserDataService();