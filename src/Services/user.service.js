import http from "../http-common";

class UserDataService {
    getAll() {
        return http.get(`/User/All`);
    }

    get(id) {
        return http.get(`/User/Find/${id}`);
    }
}

export default new UserDataService();