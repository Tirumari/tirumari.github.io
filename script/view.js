


// BACKGROUND IMAGE CHANGE

let viewChange = (view) => {
  if (view === 'code') {
    $("#content").css("background-image",'url("./assets/images/code.png")');
  } else if (view === 'comedy') {
    $("#content").css("background-image", 'url("./assets/images/comedy.png")');
  } else if (view === 'cartoons') {
    $("#content").css("background-image", 'url("./assets/images/main.png")');
  }
}

