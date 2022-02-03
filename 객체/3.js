let user = {
    name: 'h',
    ref() {
        return this
    }
}
console.log(user.ref().name)