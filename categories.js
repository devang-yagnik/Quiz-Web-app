var url_link;

function clicked(id){
    url_link = id;
    localStorage.setItem('url_link', JSON.stringify(url_link));
    window.location.assign('game.html');
}