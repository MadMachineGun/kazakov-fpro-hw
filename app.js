// const http = require(`http`);
// const PORT = 3500;
// const user =
//     {
//         name: `Yurii`,
//         id: 3
//     }
// const contact = {
//     telegram: `Vortex`
// }
//
//
// http.createServer(function (request, response) {
//     const url = request.url;
//     response.setHeader("content-Type", "application/json; charset=utf-8;");
//     switch (url) {
//         case `/`:
//             response.write(JSON.stringify(user));
//             break;
//         case `/contact`:
//             response.write(JSON.stringify(contact));
//             break;
//         default:
//             response.setHeader("content-Type", "text/html; charset=utf-8;");
//             response.write("<h1>404</h1>");
//     }
//
//     console.log(request);
//     console.log(request.method);
//
//     response.end();
// }).listen(PORT);

const getUserBtn = document.querySelector(`#get-user`);
const getContactBtn = document.querySelector(`#get-contact`);

const baseUrl = `http://`





