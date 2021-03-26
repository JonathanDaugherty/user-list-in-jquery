const url = "http://localhost:46200/api/users";

let newuser = {
    id: 0, 
    username: "SA", 
    password: "Train@MAX", 
    firstname: "System", 
    lastname: "Admin",
    phone: "555-555-1212", 
    email: "info@system.com",
    isReviewer: true,
    isAdmin: true
}

let allUsers = [];

$ ().ready(() => {

    userList()
        .done((users) => {
            allUsers = users;
            display(allUsers);
        })
        .fail()

    // $.ajax({
    //     method: "POST",
    //     url: url, 
    //     data: JSON.stringify(newuser),
    //     contentType: `application/json`
    // })
    // .done((res) => {
    //     console.log(res);
    // })
    // .fail((err) => {
    //     console.log(err);
    // })


    console.log("jQuery is ready!")
    $.getJSON(url)
        .done((users) => {
            console.log(users);
        })
        .fail((err) => {
            console.error(err);
        })
})

const display = (users) => {
    let tbody = $("tbody");
    tbody.empty();
    for(let user of users){
        let tr = $("<tr></tr>");
        let tdId = $(`<td>${user.id}</td>`);
        tr.append(tdId);
        tr.append($(`<td>${user.username}</td>`));
        let tdName = $(`<td> ${user.firstname} ${user.lastname} </td>`);
        tr.append(tdName);
        let tdReviewer = $(`<td> ${user.isReviewer ? "Yes" : "No"}</td>`);
        tr.append(tdReviewer);
        let tdAdmin = $(`<td> ${user.isAdmin ? "Yes" : "No"}</td>`);
        tr.append(tdAdmin);
        tbody.append(tr);
    }
}