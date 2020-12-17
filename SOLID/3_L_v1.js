/*
    Liskov substitution principle
 */
class Person {}
class Member {
    access() {
        console.log('Есть доступ к паролю')
    }
}
class Developer extends Member {
    canDoDeveloperWork() {}
}
class Devops extends Member {
     canDoDevopsWork () {}
}

class DeveloperFromAnotherCompany extends Person {}
function enterSecretPassword(member) {
    member.access()
}
enterSecretPassword(new Developer())
enterSecretPassword(new Devops())






