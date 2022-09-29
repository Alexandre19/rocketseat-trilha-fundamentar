// Function() constructor


function Person(name) {
    this.name = name

    this.driver = function() {
        return this.name + " está dirigindo"
    }

    this.walk = function() {
        return this.name + " está caminhando"
    }

}

const Jose = new Person("Jose")
const Maria = new Person("Maria")

console.log(Jose.walk())
console.log(Maria.driver())


