function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}

const user = makeUser('John', 30);
alert(user.age);