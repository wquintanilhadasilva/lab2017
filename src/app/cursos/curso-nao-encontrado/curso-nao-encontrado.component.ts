import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso-nao-encontrado',
  templateUrl: './curso-nao-encontrado.component.html',
  styleUrls: ['./curso-nao-encontrado.component.css']
})
export class CursoNaoEncontradoComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  goBack(){
     this.router.navigate(['/cursos'],{queryParams:{'pagina': 1}});
  }

}
