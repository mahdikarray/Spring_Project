// bloc.ts
import {Foyer} from "./Foyer";
import {Chambre} from "./Chambre";

export class Bloc {
  idBloc!: number;
  nomBloc!: string;
  capaciteBloc!: number;
  chambres?: Chambre[];
  foyer?: Foyer;

}
