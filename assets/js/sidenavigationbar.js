$(document).ready(function(){	
    $('.list-group li').click(function(e) {
            $(this).addClass('active').siblings().removeClass('active');
    });
});

