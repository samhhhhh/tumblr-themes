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

function myParse(x) {
  if (x.type == "image") {
    myImg(x);
  } else if (x.type == "text") {
    myTxt(x);
  } else if (x.type == "video") {
    myVid(x);
  } else {
    document.getElementById("posts").innerHTML += JSON.stringify(x) + '<br><br>';
  }
}

function myImg(x) {
  document.getElementById("images").innerHTML += '<img src="' + x.media[0].url + '">';
}

function myTxt(x) {
  document.getElementById("posts").innerHTML += x.text;
}

function myVid(x) {
  if (x.provider == "youtube") {
    document.getElementById("posts").innerHTML +=
    '<iframe src="https://www.youtube.com/embed/' + x.metadata.id + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  }
}

// gallery

var galleryStatus = 0;

function myGallery() {
  if (galleryStatus == 0) {
    document.getElementById("images").classList.remove('gallery-off');
    document.getElementById("images").classList.add('gallery-on');
    document.getElementById("heads").classList.remove('proud');
    document.getElementById("heads").classList.add('shy');
    galleryStatus = 1;
  } else {
    document.getElementById("images").classList.remove('gallery-on');
    document.getElementById("images").classList.add('gallery-off');
    document.getElementById("heads").classList.remove('shy');
    document.getElementById("heads").classList.add('proud');
    galleryStatus = 0;
  }
}
