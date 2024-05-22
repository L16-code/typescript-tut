// type username=string|number;
// // let a:username=123;

// const arr:number[]=[12,23,233,23]
// const arr2:Array<string>=[] // like generic
// const func=(n:number,m:number):number=>{
//   console.log(n,m)
//   return n*m;
// }

// interface check{
//   height:number,
//   weight:number,
//   gender?:boolean
// }

// interface newobj extends check{
//   scolar:boolean  
// }
// const gigi:newobj={
//   height:234,
//   weight:23,
//   scolar:true
// }
// const obj:check={
//   height:23,
//   weight:45,
//   gender:true
// }

// const func = (...m:number[])=>{
//   return m
// }
// func(23,25, 26 ,23)

// type getdatatype=(product:{
//   name:string,
//   stock:number,
//   price:number,
//   photo:string})=>void

// const getdata:getdatatype=(product)=>{
// console.log(product)
// }

// const productone={
//   name:"dtaa",
//   stock:23,
//   price:232,
//   photo:"dshfsud"
// }
// getdata(productone)



// classes
class Player{
  private height=34;
  width=45;
  constructor(height:number ,width:number){
    this.height=height;
    this.width=width;
  }
  myheight =()=>{
    return this.height
  }
}


const abhi=new Player(12,121)
console.log(abhi.myheight())

interface ProductType{
  nane:string;
  price:number;
  stock:number;
  id:string;
  offer?:boolean;
}

class Product implements ProductType{
  // public name:string;
  // public price:number;
  // public stock:number;
  public id:string=String(Math.random()*1000);

  constructor(public name:string,public price:number, public stock :number){

  }
}




