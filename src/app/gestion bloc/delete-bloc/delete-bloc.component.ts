import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BlocServiceService } from 'src/app/servicess/bloc-service.service';

@Component({
  selector: 'app-delete-bloc',
  templateUrl: './delete-bloc.component.html',
  styleUrls: ['./delete-bloc.component.scss']
})
export class DeleteBlocComponent implements OnInit {
  deleteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private blocService: BlocServiceService) {}

  ngOnInit(): void {
    this.deleteForm = this.formBuilder.group({
      idBloc: ['']
    });
  }

  onSubmit() {
    const blocId = this.deleteForm.value.idBloc;
    this.blocService.removeBloc(blocId).subscribe(
      () => {
        console.log('Bloc supprimé avec succès');
        // Ajoutez des actions supplémentaires si nécessaire (par exemple, rediriger vers une autre page)
      },
      error => {
        console.error('Erreur lors de la suppression du bloc:', error);
        // Gérez les erreurs ici
      }
    );
  }
}


