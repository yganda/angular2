/**
 * Created by Andrei_Furs on 11/25/2016.
 */
function greeter(person: string): string {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);

