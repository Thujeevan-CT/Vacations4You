export interface ActivityPackage {
    id?:string,
    activity_type: string;
    destination: string;
    date: number; 
    age_restriction: number;
    price: number;
    rating?:number;
    description:string;
  }