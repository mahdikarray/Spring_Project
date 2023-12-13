import { User } from "./User";
import { Chambre } from "./Chambre";
import { Bloc } from "./Bloc";

export class Reservation {
  idReservation!: string;
  anneUniversitaire!: string; // Assuming you want to represent LocalDate as a string
  estValide!: boolean;
  etudiant!: User;
  chambre!: Chambre;
  bloc!: Bloc;
}