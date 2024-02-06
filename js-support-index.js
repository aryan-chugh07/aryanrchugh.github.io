var prev_id = ''
var list = ['about_preview', 'edu_preview', 'skill_preview', 'achieve_preview', 'blog_preview']

var cardind = document.getElementById('about');
var cardedu = document.getElementById('edu')
var cardskill = document.getElementById('skills');
var cardachieve = document.getElementById('achieve')
var cardblogs = document.getElementById('blogs');

var closeDiv = document.getElementById('close_view');
var nextDiv = document.getElementById('next_view');
var prevDiv = document.getElementById('back_view');
var overd = document.getElementById('over-display');


var nabout = document.getElementById('nabout-me');
var nedu = document.getElementById('nedu');
var nskill = document.getElementById('nskills');
var nachieve = document.getElementById('nachieve');
var nblog = document.getElementById('nblogs');


function removeCards() {
    cardind.style.display = 'none';
    cardachieve.style.display = 'none';
    cardedu.style.display = 'none';
    cardskill.style.display = 'none';
    cardblogs.style.display = 'none';

    left_div.style.display = 'none';
}

function addCards() {
    cardind.style.display = 'flex';
    cardachieve.style.display = 'flex';
    cardedu.style.display = 'flex';
    cardskill.style.display = 'flex';
    cardblogs.style.display = 'flex';
}

nabout.addEventListener('click', function() {
    overd.style.display = 'flex';

    let show = document.getElementById('about_preview');
    prev_id = 'about_preview'
    show.style.display = 'flex';

    if(window.innerWidth < 600) {
        removeCards();
    }
});

nedu.addEventListener('click', function() {
    overd.style.display = 'flex';
    let show = document.getElementById('edu_preview');
    prev_id = 'edu_preview'
    show.style.display = 'flex';

    if(window.innerWidth < 600) {
        removeCards();
    }
});

nskill.addEventListener('click', function() {
    overd.style.display = 'flex';
    let show = document.getElementById('skill_preview');
    prev_id = 'skill_preview'
    show.style.display = 'flex';

    if(window.innerWidth < 600) {
        removeCards();
    }
});

nachieve.addEventListener('click', function() {
    overd.style.display = 'flex';
    let show = document.getElementById('achieve_preview');
    prev_id = 'achieve_preview'
    show.style.display = 'flex';

    if(window.innerWidth < 600) {
        removeCards();
    }
});

nblog.addEventListener('click', function() {
    overd.style.display = 'flex';
    let show = document.getElementById('blog_preview');
    prev_id = 'blog_preview'
    show.style.display = 'flex';

    if(window.innerWidth < 600) {
        removeCards();
    }
});


cardind.addEventListener('click', function (e) {
    overd.style.display = 'flex';

    let show = document.getElementById('about_preview');
    prev_id = 'about_preview'
    show.style.display = 'flex';

    if(window.innerWidth < 600) {
        removeCards();
    }
});

cardedu.addEventListener('click', function (e) {
    overd.style.display = 'flex';
    let show = document.getElementById('edu_preview');
    prev_id = 'edu_preview'
    show.style.display = 'flex';

    if(window.innerWidth < 600) {
        removeCards();
    }
});

cardskill.addEventListener('click', function (e) {
    overd.style.display = 'flex';
    let show = document.getElementById('skill_preview');
    prev_id = 'skill_preview'
    show.style.display = 'flex';

    if(window.innerWidth < 600) {
        removeCards();
    }
});

cardachieve.addEventListener('click', function (e) {
    overd.style.display = 'flex';
    let show = document.getElementById('achieve_preview');
    prev_id = 'achieve_preview'
    show.style.display = 'flex';

    if(window.innerWidth < 600) {
        removeCards();
    }
});

cardblogs.addEventListener('click', function (e) {
    overd.style.display = 'flex';
    let show = document.getElementById('blog_preview');
    prev_id = 'blog_preview'
    show.style.display = 'flex';

    if(window.innerWidth < 600) {
        removeCards();
    }
});

closeDiv.addEventListener('click', function() {
    overd.style.display = 'none';
    addCards();
    if(prev_id != '') {
        document.getElementById(prev_id).style.display = 'none';
        prev_id = '';
    }
});

prevDiv.addEventListener('click', function() {
    if(prev_id != '') {
        let i = 0;
        for(i = 0; i < 5; i ++) {
            if(list[i] == prev_id)
                break;
        }
        i = (i + 4) % 5;
        document.getElementById(prev_id).style.display = 'none';
        document.getElementById(list[i]).style.display = 'flex';

        prev_id = list[i];
    }
});

nextDiv.addEventListener('click', function() {
    if(prev_id != '') {
        let i = 0;
        for(i = 0; i < 5; i ++) {
            if(list[i] == prev_id)
                break;
        }
        i = (i + 1) % 5;
        console.log(list[i]);
        document.getElementById(prev_id).style.display = 'none';
        document.getElementById(list[i]).style.display = 'flex';

        prev_id = list[i];
    }
});

let isDark = false;
let toggleImg = document.getElementById('toggle');

function dark_light() {
    if(isDark) {
        document.getElementById('style1').href = "stylet.css";
        document.getElementById('style2').href = "style2.css";
        toggleImg.setAttribute('src', 'night-mode.png');
        isDark = false;
        localStorage.setItem("isDark", 0);
    }else {
        document.getElementById('style1').href = "style-dark.css";
        document.getElementById('style2').href = "style2-dark.css";
        toggleImg.setAttribute('src', 'sunny.png');
        isDark = true;
        localStorage.setItem("isDark", 1);
    }
}


let btnBlog1 = document.getElementById('blog1');
let btnBlog2 = document.getElementById('blog2');
btnBlog1.addEventListener('click', function() {
    localStorage.setItem('last-viewed', 'blog1');
    window.open('/blogs/blog_index.html', '_blank');
});

btnBlog2.addEventListener('click', function() {
    localStorage.setItem('last-viewed', 'blog2');
    window.open('/blogs/blog_index.html', '_blank');
});


let left_div = document.getElementById('lbar');
let name_div = document.getElementById('name-cont');

let tggle = false;
name_div.addEventListener('click', function(){
    if(window.innerWidth <= 600) {
        console.log(tggle);
        if(!tggle) {
            left_div.style.display='flex';

            cardind.style.display = 'none';
            cardachieve.style.display = 'none';
            cardedu.style.display = 'none';
            cardskill.style.display = 'none';
            cardblogs.style.display = 'none';
        }else {
            left_div.style.display='none';

            cardind.style.display = 'flex';
            cardachieve.style.display = 'flex';
            cardedu.style.display = 'flex';
            cardskill.style.display = 'flex';
            cardblogs.style.display = 'flex';
        }
        tggle = !tggle;
    }
});

window.addEventListener('resize', function() {
    if(this.window.innerWidth > 600){
        left_div.style.display = 'flex';

        cardind.style.display = 'flex';
        cardachieve.style.display = 'flex';
        cardedu.style.display = 'flex';
        cardskill.style.display = 'flex';
        cardblogs.style.display = 'flex';
    
        var elements = document.querySelectorAll('.bottom-card');

        // Loop through each element and hide it
        elements.forEach(function(element) {
            element.style.display = 'flex';
        });
    }else {
        if(tggle) {
            left_div.style.display = 'flex';
            
            cardind.style.display = 'none';
            cardachieve.style.display = 'none';
            cardedu.style.display = 'none';
            cardskill.style.display = 'none';
            cardblogs.style.display = 'none';
        }else {
            left_div.style.display = 'none';

            cardind.style.display = 'flex';
            cardachieve.style.display = 'flex';
            cardedu.style.display = 'flex';
            cardskill.style.display = 'flex';
            cardblogs.style.display = 'flex';
        }

        // Select all elements with the class name 'bottom'
        var elements = document.querySelectorAll('.bottom-card');

        // Loop through each element and hide it
        elements.forEach(function(element) {
            element.style.display = 'none';
        });

    }
});
