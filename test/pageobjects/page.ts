import { browser } from '@wdio/globals'

export default class Page {
    public openPage() {
        return browser.url('https://www.hostinger.com/');
    }
}