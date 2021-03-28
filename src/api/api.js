import axios from 'axios';

const baseUrl = `https://social-network.samuraijs.com/api/1.0/`;

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": '382d96e2-f20d-4826-b7a3-f503d0f19467'
    }
});

export const userAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
                return response.data
               });
       },

    unfollowUser(id) {
        return instance.delete(baseUrl + `follow/${id}`).then(response => {
            return response.data
        });
        },

    followUser (id)  {
            return instance.post(baseUrl + `follow/${id}`)
            .then(response => response.data)
        },
    getProfile(userId){
        console.warn('Obsolete method. Please use prodileAPI object.')
            return profileAPI.getProfile(userId);
            
        }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(baseUrl+ `profile/` + userId);
        
    },
    getStatus (userId){
    return instance.get(baseUrl + `profile/status/` + userId);
    },
    updateStatus (status){
        return instance.put(baseUrl + `profile/status/`, {status: status});
    }
}

export const authAPI = {
    authUser ()  {
        return  instance.get(baseUrl +`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe = false){
        return instance.post(baseUrl + `auth/login`, { email, password, rememberMe});
    },
    logout(email, password, rememberMe = false){
        return instance.delete(baseUrl + `auth/login`);
    },
}

export const loginAPI = {
    login(){
        return instance.post(baseUrl + `auth/login`, {
           
        })
    }
}











