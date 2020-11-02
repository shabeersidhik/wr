import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],

})
export class InvoiceComponent implements OnInit {
  addInvoice:FormGroup;
  newRow:object;
  newArray:any=[];
  totalAmount=0;
  arrProducts=[
    {"code":'prd01','name':'Apple Mac Book pro','price':112990},
    {"code":'prd02','name':'Bluetooth speaker','price':1099},
    {"code":'prd03','name':'Mobile','price':15000}
  ]
  constructor(private fb:FormBuilder,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addInvoice=this.fb.group({
      strCustomerName:['',Validators.required],
      strCustomerDetail:['',Validators.required],
      dblInvoice:[''],
      strDate:['']
    })
    this.addRow()
  }
  addRow(){
    this.newRow={code:'',name:'',price:'',totalPrice:'',tax:'',qty:''}
    this.newArray.push(this.newRow)
  }
getDetail(e,i){
  let index=this.arrProducts.findIndex(item=>item['code']===e)
  this.newArray[i]['name']=this.arrProducts[index]['name']
  this.newArray[i]['qty']=1
  this.newArray[i]['code']=this.arrProducts[index]['code']
  this.newArray[i]['price']=this.arrProducts[index]['price']
  this.newArray[i]['tax']=this.arrProducts[index]['price']*8/100
  this.newArray[i]['totalPrice']=this.newArray[i]['price']+this.newArray[i]['tax']
  this.totalAmount=0
  this.newArray.forEach(element => {
    this.totalAmount+=element['totalPrice']
    
  });
}
onUnitChange(e,i){
  let index=this.arrProducts.findIndex(item=>item['code']===this.newArray[i]['code'])
  this.newArray[i]['price']=e*this.arrProducts[index]['price']
  this.newArray[i]['tax']=this.newArray[i]['price']*8/100
  this.newArray[i]['totalPrice']=this.newArray[i]['price']+this.newArray[i]['tax']
  this.totalAmount=0
  this.newArray.forEach(element => {
    this.totalAmount+=element['totalPrice']
  });
}
onSubmit(){
  if(this.addInvoice.controls.strCustomerName.value.length<=0){
    this._snackBar.open('Enter Name', 'CLOSE', {
      duration: 2000,
    });
  }
  if(this.addInvoice.controls.strCustomerDetail.value.length<=0){
    this._snackBar.open('Enter Detail', 'CLOSE', {
      duration: 2000,
    });
  }
  if(this.addInvoice.controls.strCustomerDetail.value.length>0 && this.addInvoice.controls.strCustomerName.value.length){
    this._snackBar.open('Successfully saved', 'CLOSE', {
      duration: 2000,
    });
    this.newArray=[]
    
  }
}
}
