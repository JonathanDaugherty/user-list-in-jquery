const url = "http://localhost:46200/api/users";

const userList = () => {
    return $.getJSON(url);
}

const userDetail = (id) => {
    return $.getJSON(`${url}/${id}`);
}