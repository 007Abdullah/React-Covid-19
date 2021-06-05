var url = window.location.href.split(":");
if (url[0] === "https") {
    url = 'https://maintenance-apps.herokuapp.com'
}
else {
    url = 'http://localhost:3000'
}
export default url;