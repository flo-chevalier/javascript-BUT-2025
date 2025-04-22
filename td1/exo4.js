function cacher() {
    document.getElementById('cacher').style.display = 'none';
    document.getElementById('btn1').style.display = 'none';
    document.getElementById('btn2').style.display = 'block';
}

function afficher() {
    document.getElementById('cacher').style.display = 'block';
    document.getElementById('btn1').style.display = 'block';
    document.getElementById('btn2').style.display = 'none';
}
