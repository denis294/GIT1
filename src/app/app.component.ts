import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exercice1-blog';
  post1 = "exemple Article blog";

  posts = [
    {
      title: "Dunwich",
      content: "Dunwich est une ville imaginaire du Massachusetts, États-Unis, créée par l'écrivain H.P. Lovecraft. Elle est citée pour la première fois dans la nouvelle L'Abomination de Dunwich (1929). Dunwich se situe dans la vallée de la fictive rivière Miskatonic, qui fait partie de la région imaginaire parfois appelée Pays de Lovecraft. Les habitants sont dépeints comme consanguins, sans instruction, et très superstitieux, alors que la ville elle-même est décrite comme économiquement pauvre, avec de nombreux bâtiments décrépis et abandonnés. ",
      loveIts: 1,
      created_at: "12/06/2018"
    },
    {
      title: "BM69",
      content: "La NSB BM69 est une automotrice électrique utilisée par la compagnie NSB pour une variété de trains régionaux sur le réseau de la NSB, sur de courtes distances et trains de ligne. C'est le type de train le plus commun en Norvège, même si un nouveau type de rame, la BM72, ait été introduite. Tous les trains ont été construits par Strømmen.  ",
      loveIts: -5,
      created_at: "04-07-2017"
    },
    {
      title: "Mudhol",
      content: "Mudhol était un État princier des Indes, qui subsista jusqu'en 1948. Il était dirigé par des souverains qui portaient le titre de radjah. Cette principauté est aujourd'hui intégrée à l'État du Karnataka.  ",
      loveIts: 0,
      created_at: "01-02-2016"
    }
  ]
}

