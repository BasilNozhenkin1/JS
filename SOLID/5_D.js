/*
    Dependency inversion principle
 */
class Client {

}
class Fetch {
    request() {
        return Promise.resolve('data')
    }
}
class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage'
        return dataFromLocalStorage
    }
}
class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }
    clientGet() {
        return this.fetch.request()
    }
}
class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }
    clientGet() {
        return this.localStorage.get()
    }
}
class Database {
    constructor(client) {
        this.client = client
    }
    getData() {
        return this.client.clientGet()
    }
}

const db = new Database(new LocalStorageClient())
console.log(db.getData())