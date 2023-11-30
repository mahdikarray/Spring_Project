import {Bloc} from "./Bloc";
import {Universite} from "./Universite";
import {Image} from "./Image";

export class Foyer{

idFoyer!:number;
nomFoyer!:string;
capaciteFoyer!:number;
bloc!: Bloc[];
universite !:Universite;
  image?: Image | null;
}
