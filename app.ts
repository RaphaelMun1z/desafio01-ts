import { CompanyAccount } from "./class/CompanyAccount";
import { OtherAccount } from "./class/OtherAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);

console.log(peopleAccount);
peopleAccount.deposit(10);
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);

console.log(companyAccount);
companyAccount.deposit(20);
console.log(companyAccount);

companyAccount.getLoan(50);
console.log(companyAccount);

const otherAccount: OtherAccount = new OtherAccount("Other", 30);

console.log(otherAccount);
otherAccount.deposit(30);
console.log(otherAccount);

otherAccount.withdraw(10);
console.log(otherAccount);