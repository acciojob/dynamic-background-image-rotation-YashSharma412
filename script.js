//your JS code here. If required.
const LandscapeBg = "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg"
const PortraitBg = "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg"
const body = document.querrySelector('body');

function dynamicBackgroundImg(){
	if (window.innerWidth > window.innerHeight) {
		// Landscape Mode
		body.style.backgroundImage = `url("${LandscapeBg}")`
	} else {
		
		body.style.backgroundImage = `url("${PortraitBg}")`
		
	}
}