

let userInfo = {
  name:'Rafael Moreira Ramires',
  phone:973029907,
  gitHub:"MoreiraRamires",
  youtube:'yooooutube',
  instagram:'instaaaaa',
  facebook:'faceee',
  twitter:'passarinho',
  linkedin:'liiinkedin'

}
let accept=true
 
function changeSocialMediaLinks (){
     
  const counter = document.querySelector('#socialLinks').childElementCount;

  // extrair todos os nomes de classes das redes sociais e acrescenta-las em uma variavel
  for (let i=0; i < counter ;i++ ){
    let nameSocial = document.querySelector('#socialLinks').children[i].className 
    document.querySelectorAll('ul li')[i].children[0].href=
    `https://${nameSocial}.com/${userInfo[nameSocial]}`
        
  }

 };

 changeSocialMediaLinks ();



 function getGitHubProfileInfo() {
   const url = `https://api.github.com/users/${userInfo.gitHub}`

   alert(url)
 };

 getGitHubProfileInfo();