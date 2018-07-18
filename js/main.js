
function animate(time) {
	requestAnimationFrame(animate);
	TWEEN.update(time);
}
requestAnimationFrame(animate);



var leaving = false; 
function regTopBar() {
//    console.log(document.body.scrollTop)//document.documentElement.scrollTop
    if(document.body.scrollTop >= 100 && leaving == false){
        leaving = true
        console.log("leave")
        let pos = {x: 160, y: 0}
        let tween = new TWEEN.Tween(pos)
            .to({x: 90, y: 0}, 400)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function(){
                //$("#topbar").css('transform', 'translateY(' + pos.x + 'px)');
                $("#topbar").css('height', (pos.x + 'px'));
                $("#mainlogo").css('height', ((Math.max(70, pos.x - 60) + 'px')))

            }).start()
        
    }
    else if(document.body.scrollTop < 100 && leaving == true){
        leaving = false
        let pos = {x: 90, y: 0}
        let tween = new TWEEN.Tween(pos)
                .to({x: 160, y: 0}, 400)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function(){
                    //$("#topbar").css('transform', 'translateY(' + pos.x + 'px)');
                    $("#topbar").css('height', (pos.x + 'px'));
                    console.log(pos.x)
                    $("#mainlogo").css('height', (Math.min((pos.x - 20),100) + 'px'))
                }).start()
        console.log("enter")
    }
}

function mouseEnteredTopBar(event) {
    let pos = {x: 0, y: 0}
    let tween = new TWEEN.Tween(pos)
                .to({x: 160, y: 0}, 100)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function(){
                    //$("#topbar").css('transform', 'translateY(' + pos.x + 'px)');
                    $("#searchbar").css('width', (pos.x + 'px'));
                }).start()
};

function mouseLeaveTopBar(event) {
    let pos = {x:160, y: 0}
    let tween = new TWEEN.Tween(pos)
            .to({x: 0, y: 0}, 100)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function(){
                //$("#topbar").css('transform', 'translateY(' + pos.x + 'px)');
                $("#searchbar").css('width', (pos.x + 'px'));
            }).start()
};

//
window.onload = function(){
    console.log("load")
    $(window).scroll(function() {console.log("scroll") regTopBar()});
    document.getElementById("topbar").onmouseenter = function() {mouseEnteredTopBar()};
    document.getElementById("topbar").onmouseleave = function() {mouseLeaveTopBar()};
}

//
/*

*/
