import { Bugsnag } from 'bugsnag-js'

let bugsnag: Bugsnag.Client | null = null

export default {
    getBugsnag(): Bugsnag.Client {
        return bugsnag!
    },

    setBugsnag(aBugsnag: Bugsnag.Client) {
        bugsnag = aBugsnag
    },

    notify(error: Bugsnag.NotifiableError, options?: Bugsnag.INotifyOpts) {
        if (bugsnag != null) {
            bugsnag.notify(error, options)
        } else {
            console.error(error, 'options: ', options)
        }
    }
}
