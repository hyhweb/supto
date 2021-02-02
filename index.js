export const cookie = {
    set(name, value) {
        let Days = 30
        let exp = new Date()
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
        document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
    },
    get(name) {
        let arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
        if (arr = document.cookie.match(reg)) { return unescape(arr[2]) } else { return '' }
    },
    del(name) {
        let exp = new Date()
        exp.setTime(exp.getTime() - 1)
        let cval = this.get(name)
        if (cval != '') { document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() }
    }
}
