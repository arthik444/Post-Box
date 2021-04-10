export   class Invoice{
  constructor(
    public id:string,
    public imageUrl:string,
    public senderName:string,
    public recieverName:string,
    public paymentStatus:boolean,
    public paymentAmount:number,
    public installmentsRemaining : number,
    public totalInstallments:number
  ){}


}
