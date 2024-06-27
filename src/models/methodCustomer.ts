import {customer}from './customer';



class methodCustomer{

    customers:customer[];

constructor(){
    this.customers=[];
}

// Metdo para registrar un cliente

addcustomer(customer:customer):void{
    this.customers.push(customer);
    console.log(`nombre'${customer.nombre}' Ha sido registrado.`);
}

}
export default methodCustomer;