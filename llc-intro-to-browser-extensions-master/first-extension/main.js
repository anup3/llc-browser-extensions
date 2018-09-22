//document.body.style.backgroundColor = "goldenrod";
/*
document.body.style =
`
.wrapper {
  animation: MoveUpDown 1s linear infinite;
  position: absolute;
  left: 0;
  bottom: 0;
}

@keyframes MoveUpDown {
  0%, 100% {
    bottom: 0;
  }
  50% {
    bottom: 100px;
  }
}
`
*/

var allImages = document.getElementsByTagName('img');
console.log(allImages)

for (var i = 0; i < allImages.length; i++) {
	var imageHeight = allImages[i].clientHeight;
	var imageWidth = allImages[i].clientWidth;
	allImages[i].setAttribute('src', 'http://placebear.com/' + imageWidth + '/' + imageHeight)
}

document.body.style = "transition: 2s; transform: rotate(1080deg);";
