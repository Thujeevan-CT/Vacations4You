import { ActivityPackage } from "./activity-package";
import { ActivityParticipants } from "./activity-participants";
import { User } from "./user";

export interface ActivityPackageBooking{
    id:string;
    participants: Array<ActivityParticipants>;
    user_id:string;
    product_id:string;
    product_type:string;
    product:ActivityPackage;
    user:User
}