class AuthService {
    getNewToken() {
        console.log(`new token generated`)
    }
}

class DataService {
    getMyToken() {
        console.log(`got the token from the backend`)
    }
}

class ThirdPartyAPIFacade {
    private authService = new AuthService()
    private dataService = new DataService()

    implementAuth() {
        this.authService.getNewToken()
        this.dataService.getMyToken()
    }
}

const thirdPartyAPI = new ThirdPartyAPIFacade()

thirdPartyAPI.implementAuth()