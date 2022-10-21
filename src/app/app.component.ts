import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAngular';
  myimage:string ='assets/imagess/xbox-logo.png';
  slide = [
    'assets/imagess/slider7.jpg', 'assets/imagess/slider8.jpg'
  ];

  slidePrimo = 'assets/imagess/slider6.jpg'

  compo =  [
    {img: 'assets/imagess/slider8.jpg', title: 'Vetement', price: '1000', rat:'ratio ratio-1x1'},
    {img: 'assets/imagess/slider7.jpg', title: 'Polo', price: '100', rat:'ratio ratio-4x3'},
    {img: 'assets/imagess/slider8.jpg', title: 'Jean', price: '500', rat:'ratio ratio-16x9'},
    {img: 'assets/imagess/slider7.jpg', title: 'chaussure', price: '800', rat:'ratio ratio-21x9'},
  ];

  content =[
    {img: 'assets/imagess/138728.jpg', title: 'Vetement', contenu: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores praesentium maxime molestiae molestias aliquid tempora necessitatibus iure autem suscipit enim provident ad officiis iste, dignissimos eaque odit corporis, vero tenetur!'},
    {img: 'assets/imagess/ui.jpg', title: 'Polo', contenu: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores praesentium maxime molestiae molestias aliquid tempora necessitatibus iure autem suscipit enim provident ad officiis iste, dignissimos eaque odit corporis, vero tenetur!'},
    {img: 'assets/imagess/aa.jpg', title: 'Jean', contenu: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores praesentium maxime molestiae molestias aliquid tempora necessitatibus iure autem suscipit enim provident ad officiis iste, dignissimos eaque odit corporis, vero tenetur!'},
  ];

  info =[
    {img: 'assets/imagess/aa.jpg', title: 'information', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores praesentium maxime molestiae molestias aliquid tempora necessitatibus iure autem suscipit enim provident ad officiis iste, dignissimos eaque odit corporis, vero tenetur!'},
  ];

  footi =[
    {img: 'assets/imagess/youtube.png', title: 'Bootstrap', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores praesentium maxime molestiae molestias aliquid tempora necessitatibus iure autem suscipit enim provident ad officiis iste, dignissimos eaque odit corporis, vero tenetur!'},
    {img: 'assets/imagess/youtube.png', title: 'Angular', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores praesentium maxime molestiae molestias aliquid tempora necessitatibus iure autem suscipit enim provident ad officiis iste, dignissimos eaque odit corporis, vero tenetur!'},
    {img: 'assets/imagess/youtube.png', title: 'React', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores praesentium maxime molestiae molestias aliquid tempora necessitatibus iure autem suscipit enim provident ad officiis iste, dignissimos eaque odit corporis, vero tenetur!'},

  ];
}


