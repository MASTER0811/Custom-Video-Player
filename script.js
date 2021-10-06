var btndark = document.getElementById('btndark');
var btnlight = document.getElementById('btnlight');

btndark.onclick = () =>{
    document.body.classList.toggle("dark")
    btndark.style.display = "none";
    btnlight.style.display = "block";
}
btnlight.onclick = () =>{
    document.body.classList.toggle("dark")
    btndark.style.display = "block";
    btnlight.style.display = "none";
}

var vid = document.getElementById('vid');
var btnplay = document.getElementById('btnplay');
var btnpause = document.getElementById('btnpause');
var btnstop = document.getElementById('btnstop');
var btnfullscreen = document.getElementById('btnfullscreen');
var progress = document.getElementById('progress');
var flur = document.querySelector('.flur');

btnplay.onclick = () =>{
    if(vid.paused){
        vid.play();
        btnplay.style.display = "none"
        btnpause.style.display = "block"
    }
}
btnpause.onclick = () =>{
    if(vid.play()){
        vid.pause();
        btnplay.style.display = "block"
        btnpause.style.display = "none"
    }
}
btnstop.onclick = () =>{
    vid.currentTime = 0;
    vid.pause();
    btnplay.style.display = "block"
    btnpause.style.display = "none"
}
btnfullscreen.onclick = () =>{
    vid.requestFullscreen();
}
vid.addEventListener("timeupdate",() =>{
    progress.value = vid.currentTime / vid.duration;
})
// flur start
flur.addEventListener("dblclick",() =>{
    vid.requestFullscreen();
    if(vid.paused){
        vid.pause()
        btnpause.style.display = "none"
        btnplay.style.display = "block"
    }else{
        vid.play();
        btnpause.style.display = "block"
        btnplay.style.display = "none"
    }
})
flur.onclick = () =>{
    if(vid.paused){
        vid.play();
        btnplay.style.display = "none"
        btnpause.style.display = "block"
    }else{
        vid.pause();
        btnplay.style.display = "block"
        btnpause.style.display = "none"
    }
}
// flur end

function intializePlayer(){
	// Set object references
	var seekslider = document.getElementById("seekslider");
	var curtimetext = document.getElementById("curtimetext");
	var durtimetext = document.getElementById("durtimetext");
	// Add event listeners
	seekslider.addEventListener("change",vidSeek,false);
	vid.addEventListener("timeupdate",seektimeupdate,false);
}
window.onload = intializePlayer;
function vidSeek(){
	var seekto = vid.duration * (seekslider.value / 100);
	vid.currentTime = seekto;
}
function seektimeupdate(){
	var nt = vid.currentTime * (100 / vid.duration);
	seekslider.value = nt;
	var curmins = Math.floor(vid.currentTime / 60);
	var cursecs = Math.floor(vid.currentTime - curmins * 60);
	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.floor(vid.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
}


// click

var vlist = ["video/vid1.mp4","video/vid2.mp4","video/vid3.mp4"]

var one_click = document.getElementById("one_click")
var two_click = document.getElementById("two_click")
var three_click = document.getElementById("three_click")

one_click.onclick = function(){
    vid.src = vlist[0];
    btnplay.style.display = "block"
    btnpause.style.display = "none"
    one_click.classList.add("active_one")
    two_click.classList.remove("active_two")
    three_click.classList.remove("active_three")
}
two_click.onclick = function(){
    vid.src = vlist[1];
    btnplay.style.display = "block"
    btnpause.style.display = "none"
    one_click.classList.remove("active_one")
    two_click.classList.add("active_two")
    three_click.classList.remove("active_three")
}
three_click.onclick = function(){
    vid.src = vlist[2];
    btnplay.style.display = "block"
    btnpause.style.display = "none"
    one_click.classList.remove("active_one")
    two_click.classList.remove("active_two")
    three_click.classList.add("active_three")
}
