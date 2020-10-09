$(function(){
    var x = [];
    rightpos = Math.floor(Math.random()*8);
    var rytImg = "download"+ rightpos +".jpg";
    var numRytClick = 0;
    var numWins = 0;
    var numLoss=0;
    var pos;
    var clickLeft = 4;
    var y = numWins;
    var z = numLoss;
    
    pos = randomPos(pos, x);
    getImg();
    randomImg(x, rytImg);
    timeOut();
    $('#photoBox p').click(function(){
        $('img', this).removeClass('invisible');
        clickLeft--;
        $('#status').html('Clicks left: ' + clickLeft);
        if($('img', this).attr('src')==rytImg){
            numRytClick++;
        }
        setTimeout(() => {
        if((numRytClick==3)||(numRytClick==3&&clickLeft==0)){
            numWins+=1;
            $('#photoBox p').addClass('d-none')
            $('#photoBox h1').removeClass('d-none').addClass('text-success').text('You Win');
            $('#restartGame').removeClass('d-none');
            numWins=numWins;
            numLoss=numLoss;
            $('#winLoss').html('Wins: <span class="text-success mr-3">' + numWins + '</span> Loss: <span class="text-danger">' + numLoss + '</span');
            numRytClick=0;
            clickLeft = 4;
        }
        if(clickLeft==0&&numRytClick<3){
            numLoss+=1;
            $('#photoBox p').addClass('d-none')
            $('#photoBox h1').removeClass('d-none').addClass('text-danger').text('You Lose');
            $('#restartGame').removeClass('d-none');
            $('#winLoss').html('Wins: <span class="text-success mr-3">' + numWins + '</span> Loss: <span class="text-danger">' + numLoss + '</span');
            numRytClick=0;
            clickLeft = 4;
        }
        }, 1000);
    })
    $('#restartGame').click(function(){
        x = [];
        rightpos = Math.floor(Math.random()*8);
        rytImg = "download"+ rightpos +".jpg";
        var clickLeft = 4;
        pos = randomPos(pos, x);
        getImg();
        randomImg(x, rytImg);
        timeOut();
        $('#photoBox h1').addClass('d-none');
        $('#photoBox p').removeClass('d-none');
        $('img', 'p').removeClass('invisible');
        $('#restartGame').addClass('d-none');
        var numRytClick = 0;
        $('#status').html('Clicks left: ' + clickLeft);
        $('#winLoss').html('Wins: <span class="text-success mr-3">' + numWins + '</span> Loss: <span class="text-danger">' + numLoss + '</span');
        $('#photoBox p').click(function(){
            $('img', this).removeClass('invisible');
            clickLeft--;
            $('#status').html('Clicks left: ' + clickLeft);
            if($('img', this).attr('src')==rytImg){
                numRytClick++;
            }
            setTimeout(() => {
            if((numRytClick==3)||(numRytClick==3&&clickLeft==0)){
                y=numWins+1;
                $('#photoBox p').addClass('d-none');
                $('#photoBox h1').removeClass('d-none').addClass('text-success').removeClass('text-danger').text('You Win');
                $('#restartGame').removeClass('d-none');
                $('#winLoss').html('Wins: <span class="text-success mr-3">' + y + '</span> Loss: <span class="text-danger">' + z + '</span');
                numRytClick=0;
                clickLeft = 4;
            }
            if(clickLeft==0&&numRytClick<3){
                z=numLoss+1;
                $('#photoBox p').addClass('d-none')
                $('#photoBox h1').removeClass('d-none').addClass('text-danger').text('You Lose');
                $('#restartGame').removeClass('d-none');
                $('#winLoss').html('Wins: <span class="text-success mr-3">' + y + '</span> Loss: <span class="text-danger">' + z + '</span');
                numRytClick=0;
                clickLeft = 4;
            }
            }, 1000);
        })
    })
})

function randomPos(pos, x) {
    for (var i = 0; i <= 2; i++) {
        pos = Math.floor(Math.random() * 8);
        while (pos === rightpos) {
            pos = Math.floor(Math.random() * 8);
        }
        x.push(pos);
    }
    console.log(x);
}
function randomImg(x, rytImg) {
    $('img').each(function (index) {
        if (index == x[0]) {
            $(this).attr('src', rytImg);
        }
        if (index == x[1]) {
            $(this).attr('src', rytImg);
        }
    });
}
function timeOut() {
    setTimeout(() => {
        $('img').addClass('invisible');
    }, 2000);
}
function getImg() {
    $('img').each(function (ind) {
        $(this).attr('src', "download" + ind + ".jpg");
    });
}