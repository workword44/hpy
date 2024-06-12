const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "okeey be patient pretty ❤️";
  gif.src =
    "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
    setTimeout(() => {
      window.location.href = "indexx.html";
    }, 8000);
});
noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
document.addEventListener('mousemove', function(e){
  let body = document.querySelector('body');
  let heart = document.createElement('span');
  let x = e.offsetX;
  let y = e.offsetY;
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';

  let size = Math.random() * 80;
  heart.style.width = 20 + size+'px';
  heart.style.height = 20 + size+'px';

  let transformValue = Math.random() * 360;
  heart.style.transform = 'rotate('+ transformValue + 'deg)';

  body.appendChild(heart);

  setTimeout(function(){
      heart.remove();
  },1000);
})
const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
  envelope.classList.toggle('flap');
});