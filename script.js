const width = window.innerWidth;
const height = window.innerHeight;

const buttonNo = document.getElementById('btn_no');
const buttonWidth = buttonNo.offsetWidth;
const buttonHeight = buttonNo.offsetHeight;

buttonNo.addEventListener('mousemove', () => {
  buttonNo.style.position = 'fixed';
 
  const rdw = Math.floor(Math.random() * 91);
  const rdh = Math.floor(Math.random() * 91);
  buttonNo.style.top = `${rdh}%`;
  buttonNo.style.right = `${rdw}%`;
})

const buttonYes = document.getElementById('btn_yes');
buttonYes.addEventListener('click', () => {
  document.querySelector('.ques').innerHTML = 'Đồ ngu haha!';
  document.getElementsByTagName('img')[0].src = 'https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png';
  buttonNo.remove();
  buttonYes.remove();
})


// document.addEventListener('mousemove', () => {});
// update