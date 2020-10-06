import axios, { AxiosError } from 'axios'

axios.interceptors.response.use(undefined, function(error: AxiosError) {
    const { response, config } = error
    const newResponse: any = {}
    const newConfig: any = {
        url: config.url,
        method: config.method,
        headers: config.headers
    }

    if (config.url != null) {
        newConfig.data = config.data
    }

    if (response != null) {
        if (response.status === 404) {
            return Promise.reject(error)
        }

        newResponse.status = response.status
        newResponse.statusText = response.statusText
        newResponse.headers = response.headers

        if (response.data != null && response.data.message) {
            newResponse.dataMessage = response.data.message
        }
    }

    return Promise.reject(error)
})

let pathServer = ''
const hostname = window && window.location && window.location.hostname

switch (hostname) {
  case 'localhost':
    pathServer = 'http://localhost:8000'
    break
  default:
    pathServer = ''
    break
}

export class ApiService {
    public defaults() {
        let defaults = {
                headers: {
                    'Request-Source': 'mnk',
                    'Content-Type': 'multipart/form-data',
                    'authorization': localStorage.getItem('session')!
                }
            }
        return defaults
    }
    
    public async login(form: {}) {
        const res = await axios.post(
            `${pathServer}/api/login`,
            form,
            this.defaults()
        )

        return res
    }

    public async saveTopics(form: {}) {
        const res = await axios.post(
            `${pathServer}/topics/save`,
            form,
            this.defaults()
        )

        return res
    }
    public async deleteUser(form: {}) {
        const res = await axios.post(
            `${pathServer}/api/users/delete?api_token=${localStorage.getItem('session')!}`,
            form,
            this.defaults()
        )

        return res
    }
    public async getUsers(form: {}) {
        const res = await axios.post(
            `${pathServer}/api/users/get?api_token=${localStorage.getItem('session')!}`,
            form,
            this.defaults()
        )

        return res
    }

    public async updateUser(form: {}) {
        const res = await axios.post(
            `${pathServer}/api/users/update?api_token=${localStorage.getItem('session')!}`,
            form,
            this.defaults()
        )

        return res
    }

    public async saveUser(form: {}) {
        const res = await axios.post(
            `${pathServer}/api/users/store?api_token=${localStorage.getItem('session')!}`,    
            form,
            this.defaults()
        )

        return res
    }
    public async deleteCategories(form: {}) {
        const res = await axios.post(
            `${pathServer}/api/categories/delete?api_token=${localStorage.getItem('session')!}`,
            form,
            this.defaults()
        )

        return res
    }

    public async getCategories(form: {}) {
        const res = await axios.post(
            `${pathServer}/api/categories/get?api_token=${localStorage.getItem('session')!}`,
            form,
            this.defaults()
        )

        return res
    }

    public async updateCategories(form: {}) {
        const res = await axios.post(
            `${pathServer}/api/categories/update?api_token=${localStorage.getItem('session')!}`,
            form,
            this.defaults()
        )

        return res
    }

    public async saveCategories(form: {}) {
        const res = await axios.post(
            `${pathServer}/api/categories/store?api_token=${localStorage.getItem('session')!}`,    
            form,
            this.defaults()
        )

        return res
    }

    public async deleteBooks(form: {}) {
        const res = await axios.post(
            `${pathServer}/api/books/delete?api_token=${localStorage.getItem('session')!}`,
            form,
            this.defaults()
        )

        return res
    }

    public async getBooks(form: {}) {
        const res = await axios.post(
            `${pathServer}/api/books/get?api_token=${localStorage.getItem('session')!}`,
            form,
            this.defaults()
        )

        return res
    }

    public async updateBooks(form: {}) {
        const res = await axios.post(
            `${pathServer}/api/books/update?api_token=${localStorage.getItem('session')!}`,
            form,
            this.defaults()
        )

        return res
    }

    public async saveBooks(form: {}) {
        const res = await axios.post(
            `${pathServer}/api/books/store?api_token=${localStorage.getItem('session')!}`,    
            form,
            this.defaults()
        )

        return res
    }
}

export default new ApiService()