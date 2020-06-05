
var subType;

function myNPF(npf,postid) {
    document.getElementById('posts').innerHTML += '<article id="' + postid + '">';
    for (x in npf.content) {
        if (npf.content[x].type == 'text') {
            myTxt(npf.content[x],postid);
        }
    }
}

function myTxt(npf,postid) {

    if (npf.subtype !== undefined) {
        subType = npf.subtype;
    } else {
        subType = 'plain';
    }

    if (npf.formatting !== undefined) {
        npf.text = myFormat(npf);
    }

    document.getElementById(postid).innerHTML += '<p class="' + subType + '">' + npf.text + '</p>';
}

function myFormat(npf) {
    var newStr = npf.text;
    for (x in npf.formatting) {
        if (npf.formatting[x].start > 0) {
            newStr = newStr.slice(0, npf.formatting[x].start);
            if (npf.formatting[x].type == 'italic') {
                newStr += '<i>' + npf.text.slice(npf.formatting[x].start,npf.formatting[x].end) + '</i>';
            } else if (npf.formatting[x].type == 'link') {
                newStr += '<a href="' + npf.formatting[x].url + '">' + npf.text.slice(npf.formatting[x].start,npf.formatting[x].end) + '</a>';
            } else if (npf.formatting[x].type == 'bold') {
                newStr += '<b>' + npf.text.slice(npf.formatting[x].start,npf.formatting[x].end) + '</b>';
            }
        } else {
            if (npf.formatting[x].type == 'italic') {
                newStr = '<i>' + npf.text.slice(npf.formatting[x].start,npf.formatting[x].end) + '</i>';
            } else if (npf.formatting[x].type == 'link') {
                newStr = '<a href="' + npf.formatting[x].url + '">' + npf.text.slice(npf.formatting[x].start,npf.formatting[x].end) + '</a>';
            } else if (npf.formatting[x].type == 'bold') {
                newStr = '<b>' + npf.text.slice(npf.formatting[x].start,npf.formatting[x].end) + '</b>';
            }
        }
    }
    var last = npf.formatting.length - 1;
    newStr += npf.text.slice(npf.formatting[last].end,npf.text.length);
    return newStr;
}
