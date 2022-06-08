

let userInfo = {
  name:'Rafael Moreira Ramires',
  phone:973029907,
  gitHub:"MoreiraRamires",
  youtube:'',
  instagram:'',
  linkedin:''

}
let accept=true
 
function changeHTMLforJS (){
      for (let li of socialLinks.children){
      const social = li.className
      alert(social)
      console.log(social)
    }

}

 changeHTMLforJS()
