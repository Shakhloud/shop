import {makeAutoObservable} from 'mobx'

class AuthService {
    private isAuth: boolean = true

    private login: string | null = 'admin'

    private role: 'admin' | 'user' | null = 'admin'

    constructor() {
        makeAutoObservable(this);
    }

    setLogin(login: string | null) {
        this.login = login;
    }

    setRole(role: 'admin' | 'user' | null) {
        this.role = role;
    }

    setAuth(isAuth: boolean) {
        this.isAuth = isAuth;
    }

    getLogin() {
        return this.login;
    }

    getRole() {
        return this.role;
    }

    getAuth() {
        return this.isAuth;
    }
}

export const authService = new AuthService();