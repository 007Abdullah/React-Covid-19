var url = window.location.href.split(":");
if (url[0] === "https") {
    url = 'http://covidglobaldata.surge.sh/'
}
else {
    url = 'http://localhost:3000'
}
export default url;