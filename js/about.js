var m = document.getElementById('menubtn1'),
    n = document.getElementById('navbar'),
    l = document.getElementById('link1,link2,link3,link4,link5,link6'),
    x = document.getElementById('ul'),
    link2 = document.getElementById('link2'),
    sublink1 = document.getElementById('sublink1'),
    sublink2 = document.getElementById('sublink2'),
    body1 = document.getElementById('body1'),
    headerbox = document.getElementById('headerbox'),
    textabout = document.getElementById('text-about'),


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
    fifthli = document.getElementById('fifth-li');
    sixthli = document.getElementById('sixth-li');

m.onclick = function() {
    if (n.style.display == 'none') {
        n.style.display = 'block';
        // x.style.flexDirection = 'column';
        // x.style.alignItems = 'center';
        // x.style.position = 'absolute';
    } else {
        n.style.display = 'none';
    }
};


link2.onclick = function() {
    if (sublink1.style.display == 'none') {
        sublink1.style.display = 'flex';
    } else {
        sublink1.style.display = 'none';
    }
};

link3.onclick = function() {
    if (sublink2.style.display == 'none') {
        sublink2.style.display = 'flex';
    } else {
        sublink2.style.display = 'none';
    }
};

link4.onclick = function() {
    if (sublink3.style.display == 'none') {
        sublink3.style.display = 'flex';
    } else {
        sublink3.style.display = 'none';
    }
};


link2.onmouseenter = function() {
	document.getElementById("text-about").style.filter = "blur(2px)";
    document.getElementById("topproducts").style.filter = "blur(2px)";
    document.getElementById("categories").style.filter = "blur(2px)";
    document.getElementById("advantages").style.filter = "blur(2px)";
    document.getElementById("contactus-form").style.filter = "blur(2px)";

}
link2.onmouseleave = function() {
    document.getElementById("text-about").style.filter = "none";
    document.getElementById("topproducts").style.filter = "none";
    document.getElementById("categories").style.filter = "none";
    document.getElementById("advantages").style.filter = "none";
    document.getElementById("contactus-form").style.filter = "none";
}

link3.onmouseenter = function() {
	document.getElementById("text-about").style.filter = "blur(2px)";
    document.getElementById("topproducts").style.filter = "blur(2px)";
    document.getElementById("categories").style.filter = "blur(2px)";
    document.getElementById("advantages").style.filter = "blur(2px)";
    document.getElementById("contactus-form").style.filter = "blur(2px)";

}
link3.onmouseleave = function() {
    document.getElementById("text-about").style.filter = "none";
    document.getElementById("topproducts").style.filter = "none";
    document.getElementById("categories").style.filter = "none";
    document.getElementById("advantages").style.filter = "none";
    document.getElementById("contactus-form").style.filter = "none";
}

link4.onmouseenter = function() {
	document.getElementById("text-about").style.filter = "blur(2px)";
    document.getElementById("topproducts").style.filter = "blur(2px)";
    document.getElementById("categories").style.filter = "blur(2px)";
    document.getElementById("advantages").style.filter = "blur(2px)";
    document.getElementById("contactus-form").style.filter = "blur(2px)";

}
link4.onmouseleave = function() {
    document.getElementById("text-about").style.filter = "none";
    document.getElementById("topproducts").style.filter = "none";
    document.getElementById("categories").style.filter = "none";
    document.getElementById("advantages").style.filter = "none";
    document.getElementById("contactus-form").style.filter = "none";
}