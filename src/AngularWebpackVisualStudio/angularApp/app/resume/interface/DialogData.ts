import { Work } from "../../models/work";
import { School } from "../../models/school";

export interface DialogData {
    animal: string;
    name: string;
    work: Work;
    school: School;
}