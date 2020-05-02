function myPost(npf) {
    if (npf.trail.length > 0) {
        for (i in npf.trail[0].content) {
            if (npf.trail[0].content[i].type == "image") {
                myImg(npf.trail[0].content[i]);
            }
        }
    }
    npf.content.forEach(myParse);
}

function myStrip(x) {
    return x.type == "image";
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
    document.getElementById("images").innerHTML += '<img src="' + x.media[0].url + '">';
}

function myTxt(x) {
    document.getElementById("posts").innerHTML += '<p>' + x.text + '</p>';
}
