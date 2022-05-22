let site={
siteName: "W3Docs",
bookName: "Javascript",
get fullName(){
    return "Wellcome " + this.siteName + this.bookName
},
set fullName(value){
 return [this.siteName,this.bookName]=value.split(' ')
}
}
console.log(site.fullName)
site.fullName="W3 CSS";
console.log(site.siteName)
console.log(site.bookName)