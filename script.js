var icon = document.querySelector('.light_dark_btn');

icon.onclick = function () {
    document.body.classList.toggle('dark-theme');
    var moonSun = document.querySelector('.moon_sun');
    var darkLight = document.querySelector('.dark_light');
    var info = document.querySelector('.user_informations');
    var form = document.getElementById('form');
    var inputColor = document.getElementById('search');
    var titleColor = document.querySelector('.title');
    var usernameColor = document.querySelector('.username');
    var numberColor = document.querySelector('.number');
    var numberColor2 = document.querySelector('.folnum');
    var numberColor3 = document.querySelector('.follownum');
    var locationColor = document.querySelector('.location');
    var companyColor = document.querySelector('.company');
    if (document.body.classList.contains('dark-theme')) {
        moonSun.src = 'images/icon-sun.svg';
        darkLight.textContent = 'Light';
        darkLight.style.color = 'white';
        info.style.background = '#1E2A47';
        form.style.background = '#1E2A47';
        inputColor.style.background = '#1E2A47';
        titleColor.style.color = 'white';
        usernameColor.style.color = 'white';
        numberColor.style.color = 'white';
        numberColor2.style.color = 'white';
        numberColor3.style.color = 'white';
        locationColor.style.color = '#979797';
        companyColor.style.color = '#979797';
    }
    else {
        moonSun.src = 'images/icon-moon.svg';
        darkLight.textContent = 'Dark';
        darkLight.style.color = '#697C9A';
        info.style.background = 'white';
        form.style.background = 'white';
        inputColor.style.background = 'white';
        titleColor.style.color = 'black';
        usernameColor.style.color = 'black';
        numberColor.style.color = 'black';
        numberColor2.style.color = 'black';
        numberColor3.style.color = 'black';
        locationColor.style.color = 'black';
        companyColor.style.color = 'black';
    }
}
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var search = document.getElementById('search').value;
    if (search === '') {
        var error = document.querySelector('.error');
        error.style.visibility = 'visible';
        error.innerText = 'empty input';
    }
    else {
        var error = document.querySelector('.error');
        error.style.visibility = 'hidden';
        var nameSpace = search.split(' ').join('');
        fetch('https://api.github.com/users/' + nameSpace)
            .then((result) => result.json())
            .then((data) => {
                if (data.message && data.message == 'Not Found') {
                    error.style.visibility = 'visible';
                    error.innerText = 'no results';
                }
                else {
                    document.querySelector('.profile_p').innerHTML = `
                <img src='${data.avatar_url}' width=137px height=137px/>
                `
                    document.querySelector('.username').innerText = `
                ${data.name} 
                `
                    document.querySelector('.blue').innerText = `
                ${data.login} 
                `
                    document.querySelector('.bio').innerText = `
                ${data.bio} 
                `
                    document.querySelector('.reponum').innerText = `
                ${data.public_repos} 
                `
                    document.querySelector('.folnum').innerText = `
                ${data.followers} 
                `
                    document.querySelector('.follownum').innerText = `
                ${data.following} 
                `
                    document.querySelector('.location').innerText = `
                ${data.location} 
                `
                    document.querySelector('.availability').innerText = `
                ${data.twitter_username} 
                `
                    document.querySelector('.company').innerText = `
                ${data.company} 
                `
                    document.querySelector('#blog').innerText = `
                ${data.blog} 
                `
                    var location = document.querySelector('.location');
                    var company = document.querySelector('.company');
                    var twitter = document.querySelector('.availability');
                    var website = document.getElementById('blog');
                    var bio = document.querySelector('.bio');
                    if (data.location === null) {
                        location.innerText = ' not available';
                    }
                    if (data.company === null) {
                        company.innerText = ' not available';
                    }
                    if (data.blog === null) {
                        website.innerText = ' not available';
                    }
                    if (data.twitter_username === null) {
                        twitter.innerText = ' not available';
                    }
                    if (data.bio === null) {
                        bio.innerText = ' This profile has no bio';
                        bio.style.margin = '20px 0px 0px 95px';
                    }
                    else {
                        bio.style.margin = '0px 0px 90px 10px';
                    }

                }
            });


    }

});
 /*var error = document.querySelector('.error');
error.style.visibility = 'visible;'*/