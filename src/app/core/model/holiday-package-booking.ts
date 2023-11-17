import { HolidayPackage } from "./holiday-packages";
import { User } from "./user";

export interface HolidayPackageBooking {
id:string;
    user_id:string;
    product_id:string;
    product_type:string;
    product:HolidayPackage;
    user:User
}