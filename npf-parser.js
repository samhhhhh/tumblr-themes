function myPost(npf) {
    npf.content.forEach(myParse);
}

function myParse(x) {
    if (x.type == "image") {
        myImg(x);
    } else if (x.type == "text") {
        myTxt(x);
    } else {
        document.getElementById("posts").innerHTML += JSON.stringify(x) + '<br><br>';
    }
}

function myImg(x) {
    document.getElementById("posts").innerHTML += '<img src="' + x.media[0].url + '">';
}

function myTxt(x) {
    document.getElementById("posts").innerHTML += '<p>' + x.text + '</p>';
}
