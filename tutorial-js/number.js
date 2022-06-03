
let firstName = 'Tien',lastName='Dat'
   let company = {
      firstName,
      lastName,
      getFullName(){
         return this.firstName+" - "+this.lastName
      }
   }
   console.log(company.getFullName())
   console.log(company)