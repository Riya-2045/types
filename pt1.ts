// E-Commerce Discount Engine
// function getDiscount(member: string, cart: number): number {
//   let discount = 0;
//   if (member === "Gold") {
//     discount = 20;
//   } else if (member === "Silver") {
//     discount = 10;
//   }
//   if (cart > 5000) {
//     discount += 5;
//   }
//   return Math.min(discount, 25);
// }
// console.log(getDiscount("Silver", 6000));

//Job Application Screening

// function checkCandidate(
//   age: number,
//   experience: number,
//   degree: boolean,
// ): string {
//   if (age < 18) {
//     return "Rejected";
//   }
//   if ((experience >= 2 && degree) || experience >= 5) {
//     return "Qualified";
//   }
//   return "Rejected";
// }
// console.log(checkCandidate(24, 6, false));

//Shipping Cost Calculator

// function shippingStatus(premium: boolean, order: number): string {
//   if (order < 500) {
//     return "Shipping Required";
//   }
//   if (premium || order > 2000) {
//     return "Free Shipping";
//   }
//   return "Shipping Required";
// }
// console.log(shippingStatus(false, 1800));

//University Admission

// function admission(
//   overall: number,
//   maths: number,
//   physics: number,
//   english: number,
// ): string {
//   if (maths < 35 || physics < 35 || english < 35 || overall < 55) {
//     return "Rejected";
//   }
//   if (overall >= 60 || maths >= 90) {
//     return "Admitted";
//   }
//   return "Rejected";
// }
// console.log(admission(57, 92, 61, 48));

//Atm Withdrawal

// function Withdrawal(
//   balance: number,
//   amount: number,
//   pinCorrect: boolean,
// ): string {
//   if (!pinCorrect) {
//     return "Rejected";
//   }
//   if (amount <= 0 || amount % 100 !== 0 || balance - amount < 100) {
//     return "Rejected";
//   }
//   return "Approved";
// }
// console.log(Withdrawal(5000, 4900, true));

//Movie Recommendation

// function movieRecommendation(age: number, parentalControl: boolean): string {
//   if (age < 13) {
//     return "family";
//   }
//   if (age <= 17) {
//     return "Teen";
//   }
//   if (parentalControl) {
//     return "Teen";
//   }
//   return "Adult";
// }
// console.log(movieRecommendation(25, true));

//Loan Eligibility

// function LoanEligibility(salary: number, score: number, age: number): string {
//   if (age < 21) {
//     return "Rejected";
//   }
//   if ((salary >= 50000 && score >= 700) || (salary >= 100000 && score >= 650)) {
//     return "Approved";
//   }
//   return "Rejected";
// }
// console.log(LoanEligibility(110000, 660, 30));

//Warehouse inventory alert

// function stockStatus(stock: number): string {
//   if (stock < 10) {
//     return "Critical";
//   } else if (stock <= 50) {
//     return "Low";
//   } else if (stock <= 200) {
//     return "Healthy";
//   } else {
//     return "Overstocked";
//   }
// }
// console.log(stockStatus(225));

//Ride fare surge

// function getSurge(peak: boolean, raining: boolean): number {
//   if (peak && raining) {
//     return 2.5;
//   }
//   if (peak) {
//     return 2;
//   }
//   if (raining) {
//     return 1.5;
//   }
//   return 1;
// }
// console.log(getSurge(true, true));

//Game achievement system

// function achievement(score: number, allmissions: boolean): string {
//   let tier: number;

//   if (score >= 1000) {
//     tier = 3;
//   } else if (score >= 500) {
//     tier = 2;
//   } else if (score >= 200) {
//     tier = 1;
//   } else {
//     tier = 0;
//   }
//   if (allmissions && tier < 3) {
//     tier++;
//   }
//   if (tier === 3) return "Gold";
//   if (tier === 2) return "Silver";
//   if (tier === 1) return "Bronze";
//   return "No Record";
// }
// console.log(achievement(500, true));

//User Access Control

// function accessControl(role: string, suspended: boolean): string {
//   if (suspended) {
//     return "Access Denied";
//   }
//   if (role === "Admin") {
//     return "Full Access";
//   }
//   if (role === "Editor") {
//     return "Edit Access";
//   }
//   if (role === "Viewer") {
//     return "View only";
//   }
//   return "Access Denied";
// }
// console.log(accessControl("Admin", true));

//Exam Result Processing

// function examResult(marks: number[]): string {
//   const average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

//   if (marks.some((mark) => mark < 30)) {
//     return "Fail";
//   }
//   if (average >= 75 && marks.every((mark) => mark >= 60)) {
//     return "Distinction";
//   }
//   if (average >= 40) {
//     return "Pass";
//   }
//   return "Fail";
// }
// console.log(examResult([82, 79, 65, 71]));

//Restaurant Coupon Validation

// function validateCoupon(
//   order: number,
//   weekend: boolean,
//   coupon: string,
// ): string {
//   if (order <= 1000) {
//     return "Invalid";
//   }
//   if (coupon === "WEEKEND" && !weekend) {
//     return "Invalid";
//   }
//   if (coupon === "FRIST_TIME") {
//     return "Invalid";
//   }
//   return "Valid";
// }
// console.log(validateCoupon(1200, false, "WEEKEND"));

//Server health classification

// function serverHealth(cpu: number, memory: number): string {
//   if (cpu > 90 || memory > 90) {
//     return "Critical";
//   }
//   if (cpu > 70 || memory > 70) {
//     return "Warning";
//   }
//   return "Healthy";
// }
// console.log(serverHealth(85, 55));

//Insurance premium category

// function insuranceCategory(age: number, accidents: number): string {
//   if (accidents > 2) {
//     return "High Risk";
//   }
//   if (age < 25) {
//     return "High Risk";
//   }
//   if (age <= 60) {
//     return "Standard";
//   }
//   return "Senior";
// }
// console.log(insuranceCategory(62, 3));

//Festival Ticket Pricing

// function ticketPrice(age: number, group: number): number {
//   let price: number;
//   if (age < 12) {
//     price = 100;
//   } else if (age >= 60) {
//     price = 150;
//   } else {
//     price = 250;
//   }
//   if (group >= 5) {
//     price = price * 0.9;
//   }
//   return price;
// }
// console.log(ticketPrice(65, 6));

//Parking fee rules
// function parkingFee(hours: number): number {
//   if (hours <= 2) {
//     return 0;
//   }
//   if (hours <= 5) {
//     return (hours - 2) * 20;
//   }
//   return 3 * 20 + (hours - 5) * 50;
// }
// console.log(parkingFee(7));

//Smart home automation
// function smamrtHome(temperature: number, occupied: boolean): string {
//   if (!occupied) {
//     return "ALL OFF";
//   }
//   if (temperature > 30) {
//     return "AC ON";
//   }
//   if (temperature < 18) {
//     return "Heater On";
//   }
//   return "All OFF";
// }
// console.log(smamrtHome(35, false));

//Subscription renewal
// function renewSubscription(payment: boolean, wallet: boolean): string {
//   if (payment) {
//     return "Renewed";
//   }
//   if (wallet) {
//     return "Renewed via Wallet";
//   }
//   return "Suspended";
// }
// console.log(renewSubscription(false, true));

//Bank transaction flagging
// function transactionFlage(
//   international: boolean,
//   amount: number,
//   txCount: number,
// ): string {
//   if (amount > 100000 || (international && amount > 50000) || txCount > 5) {
//     return "Flagged";
//   }
//   return "Normal";
// }
// console.log(transactionFlage(true, 60000, 2));

//Employee bonus

// function employeeBonus(rating: number, attendance: number): number {
//   if (attendance < 80) {
//     return 0;
//   }
//   if (rating === 5) {
//     return 20;
//   }
//   if (rating === 4) {
//     return 10;
//   }
//   if (rating === 3) {
//     return 5;
//   }
//   return 0;
// }
// console.log(employeeBonus(5, 75));

//cloud storage plan

// function storageWarning(plan: string, usage: number): string {
//   let limit: number;
//   if (plan === "Free") {
//     limit = 5;
//   } else if (plan === "Pro") {
//     limit = 100;
//   } else {
//     return "No Warning";
//   }
//   if (usage > limit * 0.9) {
//     return "Warning"; //90%=90/100=0.9
//   }
//   return "Normal";
// }
// console.log(storageWarning("Pro", 95));

//Flight boarding decision

// function boarding(
//   international: boolean,
//   ticket: boolean,
//   checkin: boolean,
//   passport: boolean,
// ): string {
//   if (!ticket || !checkin) {
//     return "Cannot Board";
//   }
//   if (international && !passport) {
//     return "Cannot Board";
//   }
//   return "Can Board";
// }
// console.log(boarding(true, true, true, false));

//Online exam monitoring

// function examMonitoring(switches: number, cameraOff: boolean): string {
//   const tooManySwitches = switches > 3;
//   if (tooManySwitches && cameraOff) {
//     return "Disqualified";
//   }
//   if (tooManySwitches || cameraOff) {
//     return "Flagged";
//   }
//   return "Normal";
// }
// console.log(examMonitoring(5, true));

//Scholarship tier

// function Scholarship(marks: number, income: number): string {
//   let tier: number;
//   if (marks >= 90) {
//     tier = 3;
//   }
//   if (marks >= 90) {
//     tier = 3;
//   } else if (marks >= 80) {
//     tier = 2;
//   } else if (marks >= 70) {
//     tier = 1;
//   } else {
//     return "No Scholarship";
//   }
//   if (income > 1000000) {
//     tier--;
//   }
//   if (tier === 3) {
//     return "Full Scholarship";
//   }
//   if (tier === 2) {
//     return "Half Scholarship";
//   }
//   if (tier === 1) {
//     return "Quarter Scholarship";
//   }
//   return "No Scholarship";
// }
// console.log(Scholarship(92, 1200000));

//Food delivery ETA

function deliveryETA(distance: number, rain: boolean): number {
  let time: number;
  if (distance < 3) {
    time = 15;
  } else if (distance < 8) {
    time = 30;
  } else {
    time = 45;
  }
  if (rain) {
    time += 10;
  }
  return time;
}
console.log(deliveryETA(10, true));
