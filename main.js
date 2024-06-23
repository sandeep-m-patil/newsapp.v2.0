
let polnews = document.getElementById('polnews')

let busnews = document.getElementById('busnews')

let tecnews = document.getElementById('tecnews')

let sponews = document.getElementById('sponews')

let canews = document.getElementById('canews')


let date = document.getElementById('date')

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');


const currentDate = new Date();

let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();

let nowdate = `${day}-${month}-${year}`;
console.log(nowdate);


let index = 1;

let maxlen, showdate;

async function showNews() {
  const response = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=kcDSsZohRYXF9qfiVhEQUm-Xsk_9-0R_z0jdirOoKs63bln_IPT3K0MsgCRWhS_XAs9LxTwiZSn15sLU2s7ymW20PmZsOlxJm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIYfpH5z2WOS2VMrK91ulFtkMJM4yDdaLojTfG_fPLTOX55fDdpnTiAW3upiIzxgzBb_rrFCmcUS3FRDKup-LiVi2IwDW_UkzQ&lib=M_1llhJROQShRVfORNso54mV-IijDyFov");
  const news = await response.json();
  let lenlist = news.data.length - 1;
  console.log("jdjfj", news.data[index].DATE);

  maxlen = lenlist;


if(index==1){
  btn2.style.display='none';
}
else{
  btn2.style.display='block';
}



  date.innerHTML = news.data[index].DATE.slice(0, 10);


  polnews.innerHTML = news.data[index].POLITICS

  busnews.innerHTML = news.data[index].BUSINESS

  sponews.innerHTML = news.data[index].SPORTS

  tecnews.innerHTML = news.data[index].TECH

  canews.innerHTML = news.data[index].CURREN_AFFAIRS




}


btn1.addEventListener("click", () => {

  if (index < maxlen) {
    index = index + 1;

  }
  console.log("jdjfj", index);

  showNews(index);


});
btn2.addEventListener("click", () => {
  if (index > 1) {
    index = index - 1;

  }
  console.log("jdjfj", index);
  showNews(index);


});




showNews()
