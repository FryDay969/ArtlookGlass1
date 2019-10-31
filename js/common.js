var m = document.getElementById('menubtn1'),
    n = document.getElementById('navbar'),
    l = document.getElementById('link1,link2,link3,link4,link5,link6'),
    x = document.getElementById('ul'),
    link2 = document.getElementById('link2'),
    sublink1 = document.getElementById('sublink1'),
    sublink2 = document.getElementById('sublink2'),
    body1 = document.getElementById('body1'),
    headerbox = document.getElementById('headerbox'),

    showerdoor = document.getElementById('showerdoor'),
    tabletop = document.getElementById('tabletop'),
    antiquemirror = document.getElementById('antique-mirror'),
    regularmirror = document.getElementById('regular-mirror'),
    backsplash = document.getElementById('Backsplash'),
    railings = document.getElementById('Railings'),


    firstli = document.getElementById('first-li'),
    secondli = document.getElementById('second-li'),
    thirdli = document.getElementById('third-li'),
    forthli = document.getElementById('forth-li'),
    fifthli = document.getElementById('fifth-li'),
    sixthli = document.getElementById('sixth-li');



m.onclick = function() {
    if (n.style.display != 'block') {
        n.style.display = 'block';
    } else {
        n.style.display = 'none';
    }
};


link2.onclick = function() {
    if (sublink1.style.display != 'flex') {
        sublink1.style.display = 'flex';

    } else {
        sublink1.style.display = 'none';
    }
};

link3.onclick = function() {
    if (sublink2.style.display != 'flex') {
        sublink2.style.display = 'flex';
    } else {
        sublink2.style.display = 'none';
    }
};

link4.onclick = function() {
    if (sublink3.style.display != 'flex') {
        sublink3.style.display = 'flex';
    } else {
        sublink3.style.display = 'none';
    }
};

// link2.onmouseenter = function() {
//     // if (sublink1.style.display != 'flex') {
//     //       sublink1.style.display = 'flex';
//     //       sublink1.style.opacity = '1';
//     //   } else {
//     //       sublink1.style.display = 'none';
//     //   }
//     // document.getElementById("headerbox").style.filter = "blur(2px)";
//     // document.getElementById("textintroduce").style.filter = "blur(2px)";
//     // document.getElementById("topproducts").style.filter = "blur(2px)";
//     // document.getElementById("categories").style.filter = "blur(2px)";
//     // document.getElementById("advantages").style.filter = "blur(2px)";
//     // document.getElementById("contactus-form").style.filter = "blur(2px)";


// }
// link2.onmouseleave = function() {
//     // if (sublink1.style.display == 'flex') {
//     //     sublink1.style.display = 'none';
//     //     sublink1.style.opacity = '0';
//     // } else {
//     //     sublink1.style.display = 'none';
//     // }
//     // document.getElementById("headerbox").style.filter = "none";
//     // document.getElementById("textintroduce").style.filter = "none";
//     // document.getElementById("topproducts").style.filter = "none";
//     // document.getElementById("categories").style.filter = "none";
//     // document.getElementById("advantages").style.filter = "none";
//     // document.getElementById("contactus-form").style.filter = "none";
// }
// link3.onmouseenter = function() {
//     document.getElementById("headerbox").style.filter = "blur(2px)";
//     document.getElementById("textintroduce").style.filter = "blur(2px)";
//     document.getElementById("topproducts").style.filter = "blur(2px)";
//     document.getElementById("categories").style.filter = "blur(2px)";
//     document.getElementById("advantages").style.filter = "blur(2px)";
//     document.getElementById("contactus-form").style.filter = "blur(2px)";
// }
// link3.onmouseleave = function() {
//     document.getElementById("headerbox").style.filter = "none";
//     document.getElementById("textintroduce").style.filter = "none";
//     document.getElementById("topproducts").style.filter = "none";
//     document.getElementById("categories").style.filter = "none";
//     document.getElementById("advantages").style.filter = "none";
//     document.getElementById("contactus-form").style.filter = "none";
// }
// link4.onmouseenter = function() {
//     document.getElementById("headerbox").style.filter = "blur(2px)";
//     document.getElementById("textintroduce").style.filter = "blur(2px)";
//     document.getElementById("topproducts").style.filter = "blur(2px)";
//     document.getElementById("categories").style.filter = "blur(2px)";
//     document.getElementById("advantages").style.filter = "blur(2px)";
//     document.getElementById("contactus-form").style.filter = "blur(2px)";
// }
// link4.onmouseleave = function() {
//     document.getElementById("headerbox").style.filter = "none";
//     document.getElementById("textintroduce").style.filter = "none";
//     document.getElementById("topproducts").style.filter = "none";
//     document.getElementById("categories").style.filter = "none";
//     document.getElementById("advantages").style.filter = "none";
//     document.getElementById("contactus-form").style.filter = "none";
// }



// firstli.onmouseenter = function() {
//     document.getElementById('regular-mirror').style.display = "none";
//     document.getElementById("tabletop").style.display = "none";
//     document.getElementById('antique-mirror').style.display = "none";
//     document.getElementById('Backsplash').style.display = "none";
//     document.getElementById('Railings').style.display = "none";
//     document.getElementById("showerdoor").style.display = "block";

// };
// firstli.onmouseleave = function() {
//     // document.getElementById("showerdoor").style.display = "block";
//     document.getElementById("showerdoor").style.display = "block";
// };

// secondli.onmouseenter = function() {
//     document.getElementById('regular-mirror').style.display = "none";
//     document.getElementById("showerdoor").style.display = "none";
//     document.getElementById('antique-mirror').style.display = "none";
//     document.getElementById('Backsplash').style.display = "none";
//     document.getElementById('Railings').style.display = "none";
//     document.getElementById("tabletop").style.display = "block";
// };
// secondli.onmouseleave = function() {
//     // document.getElementById("showerdoor").style.display = "block";
//     document.getElementById("tabletop").style.display = "block";
// };

// thirdli.onmouseenter = function() {
//     document.getElementById('regular-mirror').style.display = "none";
//     document.getElementById("showerdoor").style.display = "none";
//     document.getElementById("tabletop").style.display = "none";
//     document.getElementById('Backsplash').style.display = "none";
//     document.getElementById('Railings').style.display = "none";
//     document.getElementById('antique-mirror').style.display = "block";

// };
// thirdli.onmouseleave = function() {
//     // document.getElementById("showerdoor").style.display = "block";
//     document.getElementById('antique-mirror').style.display = "block";
// };

// forthli.onmouseenter = function() {

//     document.getElementById("showerdoor").style.display = "none";
//     document.getElementById("tabletop").style.display = "none";
//     document.getElementById('antique-mirror').style.display = "none";
//     document.getElementById('Railings').style.display = "none";
//     document.getElementById('Backsplash').style.display = "none";
//     document.getElementById('regular-mirror').style.display = "block";
// };
// forthli.onmouseleave = function() {
//     // document.getElementById("showerdoor").style.display = "block";
//     document.getElementById('regular-mirror').style.display = "block";
// };

// fifthli.onmouseenter = function() {

//     document.getElementById("showerdoor").style.display = "none";
//     document.getElementById("tabletop").style.display = "none";
//     document.getElementById('antique-mirror').style.display = "none";
//     document.getElementById('regular-mirror').style.display = "none";
//     document.getElementById('Railings').style.display = "none";
//     document.getElementById('Backsplash').style.display = "block";
// };
// fifthli.onmouseleave = function() {
//     // document.getElementById("showerdoor").style.display = "block";
//     document.getElementById('Backsplash').style.display = "block";
// };

// sixthli.onmouseenter = function() {

//     document.getElementById("showerdoor").style.display = "none";
//     document.getElementById("tabletop").style.display = "none";
//     document.getElementById('antique-mirror').style.display = "none";
//     document.getElementById('regular-mirror').style.display = "none";
//     document.getElementById('Backsplash').style.display = "none";
//     document.getElementById('Railings').style.display = "block";
// };
// sixthli.onmouseleave = function() {
//     // document.getElementById("showerdoor").style.display = "block";
//     document.getElementById('Railings').style.display = "block";
// };






// second.onclick = function(){
// if (tabletop.style.display == 'none'){
//      showerdoor.style.display = 'none';
//      tabletop.style.display = 'block';
//    }
//   else {
//      tabletop.style.display = 'none';
//    }
// };