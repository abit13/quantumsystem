 function str_replace(search, replace, subject) {
	return subject.split(search).join(replace);
}
//������ php ������� strstr. ����  needle � haystack
function strstr( haystack, needle, bool ) {
	var pos = 0;

	pos = haystack.indexOf( needle );
	if( pos == -1 ){
		return false;
	} else{
		if( bool ){
			return haystack.substr( 0, pos );
		} else{
			return haystack.slice( pos );
		}
	}
}


// Preloader 
setTimeout (function(){
    $('.logoPreloader').removeClass('opacity0');
}, 500);
setTimeout (function(){
    $('.progress').addClass('w100');
}, 500);
setTimeout (function(){
    $('#preloader').addClass('opacity0');
}, 1500);
setTimeout (function(){
    $('#preloader').addClass('hidden');
}, 4000);

// Navbar
$(window).scroll(function () {
	if ($(this).scrollTop() > 1) {
		$('.navbar').removeClass("navbar-static-top");
		$('.navbar').addClass("navbar-fixed-top");
	} else {
		$('.navbar').addClass("navbar-static-top");
		$('.navbar').removeClass("navbar-fixed-top");
	}
});


$(document).ready(function() {
    // ������������ ������� ��� ����������
    function onPause (evt) {	
	console.log('pause', '1');
        
        $('.embedly-custom').each(function(i, val){
            $('.embedly-custom')[i].pause(); 
        });
        
        $('.embedly-embed')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
    }
    function onResume (evt) {	
        console.log('resume', '1');
        //$('.embedly-embed')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*'); 
    }
    function onBackKeyDown (evt) {	
            console.log('backkeydown', '1');
    }

    function displayMessage(evt){
        var _evt_name = evt.data.eventName;
        if(_evt_name === 'onPause'){ 
            onPause();
        }
        else if(_evt_name === 'onResume'){ 
            onResume();
        }
        else if(_evt_name === 'onBackKeyDown'){ 
            onBackKeyDown();
        }
    }
    if (window.addEventListener) {
            // For standards-compliant web browsers
            window.addEventListener("message", displayMessage, false);
    }
    else {
            window.attachEvent("onmessage", displayMessage);
    }

});