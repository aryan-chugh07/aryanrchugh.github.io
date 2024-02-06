let opened = localStorage.getItem('last-viewed');
function getLikes() {
    let likes = localStorage.getItem(opened + 'likes');
    if(!likes)  {
        localStorage.setItem(opened + 'likes', 0);
        return 0;
    }

    return likes;
}

let isLiked = false;
function changeLikes() {
    let lik = document.getElementById('likes');
    let likei = document.getElementById('i-likes');
    if(!isLiked) {
        let likes_s = getLikes();
        let likes = parseInt(likes_s);

        localStorage.setItem(opened + 'likes', (likes + 1));

        isLiked = true;
        lik.style.backgroundColor='cyan';

        setLikes();
        return likes + 1;
    }else{
        let likes_s = getLikes();
        let likes = parseInt(likes_s);

        localStorage.setItem(opened + 'likes', (likes - 1));

        isLiked = false;
        lik.style.backgroundColor='white';

        setLikes();
        return likes - 1;
    }
}

let isShowing = false;
function showComments() {
    let com = document.getElementById('comments');
    let chat = document.getElementById('chat');

    if(!isShowing) {
        isShowing = true;
        chat.style.backgroundColor='cyan';
        loadCommentList();
        com.style.display = 'flex';
    }else{
        isShowing = false;
        chat.style.backgroundColor='white';
        com.style.display = 'none';
        deleteCommentList();
    }
}

function getCommentNum() {
    let com = localStorage.getItem(opened + 'comments');
    if(!com)  {
        localStorage.setItem(opened + 'comments', 0);
        return 0;
    }
    return com;
}

function loadCommentList() {
    let numComm_s = getCommentNum();
    let numComm = parseInt(numComm_s);
    let cont = document.getElementById("comment_show");

    document.getElementById('num-comments').innerText = numComm;
    for(let i = 1; i <= numComm; i ++) {
        let ux = localStorage.getItem(opened + 'ucom' + i);
        let cx = localStorage.getItem(opened + 'ccom' + i);

        let divx = document.createElement('div');
        divx.id='div'+i;
        divx.setAttribute('class', 'dum_comm');
        
        let h3x = document.createElement('h3');
        h3x.innerText = ux;
        
        let px = document.createElement('p');
        px.innerText = cx;

        cont.appendChild(divx);
        divx.appendChild(h3x);
        divx.appendChild(px);
    }
}

function deleteCommentList() {
    let numComm_s = getCommentNum();
    let numComm = parseInt(numComm_s);

    let cont = document.getElementById("comment_show");
    for(let i = 1; i <= numComm; i ++) {
        let divx = document.getElementById('div' + i);
        cont.removeChild(divx);
    }
}

function setLikes() {
    let px = document.getElementById('num-likes');
    px.innerText = getLikes();
}

function setComments() {
    let px = document.getElementById('num-comments');
    let com = document.getElementById('comments');

    com.style.display = 'none';
    px.innerText = getCommentNum();
}

function postComment() {
    var tx = document.getElementById('comm_type');

    var count = parseInt(getCommentNum());
    count = count + 1;

    var content = tx.value;
    tx.value = '';
    
    localStorage.setItem(opened + 'ucom' + count, 'anonymous');
    localStorage.setItem(opened + 'ccom' + count, content);

    deleteCommentList();
    localStorage.setItem(opened + 'comments', count);
    
    loadCommentList();
}

let blHead1 = "Unveiling the Wonders of Astrophotography: A Journey into the Cosmos";
let blContent1 =
"Introduction:" + "<br>" +
"In a world filled with awe-inspiring wonders, few experiences rival the breathtaking beauty of astrophotography. Peering through the lens of a camera, we are transported beyond the confines of Earth, capturing the mesmerizing splendor of distant galaxies, sparkling stars, and ethereal nebulae. Join me on an extraordinary journey as we explore the captivating realm of astrophotography and unlock the secrets of the cosmos." +
"<br><br>" + "Capturing the Cosmos:" + "<br>" +
"Astrophotography is more than just taking pictures of the night sky; it's an art form that requires patience, skill, and an unwavering passion for astronomy. Armed with specialized equipment such as telescopes, cameras, and tracking mounts, astrophotographers venture into the darkness of the night to capture celestial marvels that lie millions of light-years away. With meticulous planning and precise timing, they navigate the intricacies of the night sky, seeking out the perfect composition and exposure settings to immortalize the wonders of the universe." +
"<br><br>The Magic of Long Exposures:" + "<br>" +
"One of the most captivating techniques in astrophotography is long exposure photography. By leaving the camera shutter open for extended periods, photographers can capture the faint light emitted by distant celestial objects, revealing intricate details that are invisible to the naked eye. The result is a stunning tapestry of colors and shapes that unveil the hidden beauty of the cosmos. From the vibrant hues of star clusters to the delicate wisps of interstellar gas, each image tells a unique story of cosmic evolution and celestial harmony." +
"<br><br>Chasing the Stars:<br>" +
"Astrophotography is not without its challenges. In addition to battling light pollution and unpredictable weather conditions, photographers must contend with technical complexities such as guiding errors and image stacking artifacts. Yet, it is precisely these obstacles that fuel the passion of astrophotographers, driving them to persevere in their quest to capture the elusive beauty of the night sky. With each setback comes a valuable lesson learned, and with each success comes a newfound appreciation for the wonders of the cosmos." +
"<br><br>Conclusion:<br>" +
"As we gaze up at the stars, let us marvel at the wonders of the universe and the extraordinary individuals who dedicate themselves to capturing its beauty. Through the lens of astrophotography, we are granted a glimpse into the cosmic tapestry that surrounds us, igniting our imagination and inspiring us to explore the infinite possibilities that lie beyond our earthly realm. So, let us embark on this remarkable journey together, as we unlock the secrets of the cosmos and embrace the boundless wonders of the universe.";

let blHead2 = "Mastering the Craft: The Journey of a Programmer";
let blContent2 =
"Introduction:<br>" +
"Welcome to the world of programming, where creativity meets logic, and innovation knows no bounds. Whether you're a seasoned coder or just starting on your journey, the path to mastery is an exhilarating adventure filled with challenges, triumphs, and endless opportunities for growth. Join me as we embark on a journey into the heart of programming and explore what it takes to become a true master of the craft." +
"<br><br>The Art and Science of Coding:<br>" +
"At its core, programming is both an art and a science—a delicate balance of creativity and precision. From crafting elegant algorithms to designing intuitive user interfaces, every line of code is a brushstroke on the canvas of digital creation. Yet, behind the creative process lies a foundation of logic and problem-solving skills that form the backbone of every successful programmer's toolkit." +
"<br><br>Embracing the Learning Curve:<br>" + 
"As with any craft, mastery in programming takes time, dedication, and a willingness to embrace the learning curve. From grappling with complex concepts to debugging elusive bugs, every challenge we encounter is an opportunity to sharpen our skills and expand our knowledge. Along the way, we'll stumble, we'll falter, but with each setback comes a valuable lesson learned and a step closer to mastery." +
"<br><br>Continuous Improvement and Growth:<br>" +
"The beauty of programming lies in its endless capacity for growth and innovation. As technology evolves and new languages, frameworks, and tools emerge, the journey of a programmer is one of constant adaptation and evolution. By staying curious, embracing new challenges, and honing our skills through practice and perseverance, we can unlock our full potential and push the boundaries of what's possible in the world of coding." +
"<br><br>Community and Collaboration:<br>"+
"One of the most rewarding aspects of being a programmer is the sense of community and collaboration that comes with it. Whether it's contributing to open-source projects, participating in hackathons, or sharing knowledge on online forums, the programming community is a vibrant ecosystem of like-minded individuals united by a passion for coding. By fostering connections, sharing insights, and lifting each other up, we can all thrive and grow together as programmers."+
"<br><br>Conclusion:<br>" + 
"As we journey through the ever-evolving landscape of programming, let us embrace the challenges, celebrate the victories, and never lose sight of the passion that drives us forward. Whether you're just starting out or a seasoned veteran, remember that the journey of a programmer is not just about writing code—it's about pushing the boundaries of what's possible, unlocking our full potential, and shaping the future of technology one line of code at a time.";


function loadPage() {
    let para = document.getElementById('blog-entry');
    let title = document.getElementById('heading');
    
    if(opened == 'blog1') {
        para.innerHTML= blContent1;
        title.innerHTML = blHead1;
    }else {
        para.innerHTML = blContent2;
        title.innerHTML = blHead2;
    }
}