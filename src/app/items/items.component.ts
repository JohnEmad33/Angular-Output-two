import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  items = [
    {
      id: 101,
      kind: 'course',
      name: 'JavaScript for beginners',
      author: 'John Heikela',
      duration: 48,
      type: 'Free',
      price: 0.0,
      ratings: 3.5,
      image: 'assets/courses/course-image-1.jpeg',
      description:
        'In this course you will learn the fundamentals of JavaScript. This course is purely designed for beginners and teaches you all the concepts of javascript step by step',
    },
    {
      id: 102,
      kind: 'course',
      name: 'Angular for beginners',
      author: 'Mark Vought',
      duration: 28,
      type: 'Premium',
      price: 129.0,
      ratings: 4.5,
      image: 'assets/courses/course-image-2.jpeg',
      description:
        'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step',
    },
    {
      id: 103,
      kind: 'course',
      name: 'React for beginners',
      author: 'Steve Smith',
      duration: 18.5,
      type: 'Free',
      price: 0.0,
      ratings: 4.0,
      image: 'assets/courses/course-image-3.jpeg',
      description:
        'In this course you will learn the fundamentals of React. This course is purely designed for beginners and teaches you all the basic concepts of React step by step',
    },
    {
      id: 104,
      kind: 'course',
      name: 'Advance Angular Course',
      author: 'Steve Smith',
      duration: 19.5,
      type: 'Premium',
      price: 145.5,
      ratings: 4.8,
      image: 'assets/courses/course-image-4.jpeg',
      description:
        'In this course you will learn all the concepts of Angular from basic to advance. This course will start teaching you from basics of Angular and as you progress, you will learn all the advance concepts.',
    },
    {
      id: 105,
      kind: 'course',
      name: 'Advance JavaScript Course',
      author: 'John Heikela',
      duration: 60,
      type: 'Premium',
      price: 150.0,
      ratings: 4.5,
      image: 'assets/courses/course-image-5.jpeg',
      description:
        'In this course you will learn the complete modern JavaScript step by step. This course is purely designed for beginners and teaches you all the concepts of javascript from beginner to advance level.',
    },
    {
      id: 106,
      kind: 'course',
      name: 'Angular with .NET Core',
      author: 'Mark Vought',
      duration: 68,
      type: 'Premium',
      price: 129.0,
      ratings: 4.5,
      image: 'assets/courses/course-image-6.jpeg',
      description:
        'In this course you will learn the fundamentals of Angular framework with .NET Core. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step and how to use it with back-end framework like .NET Core.',
    },
    {
      id: 107,
      kind: 'course',
      name: 'Advance React Course',
      author: 'Merry Smith',
      duration: 18.5,
      type: 'Free',
      price: 0.0,
      ratings: 4.0,
      image: 'assets/courses/course-image-7.jpeg',
      description:
        'In this course you will learn the fundamentals and advance concepts of React. This course is purely designed for beginners and teaches you all the concepts of React step by step',
    },
    {
      id: 108,
      kind: 'course',
      name: 'UX Design Course',
      author: 'Steve Smith',
      duration: 19.0,
      type: 'Premium',
      price: 115.5,
      ratings: 4.8,
      image: 'assets/courses/course-image-8.jpeg',
      description:
        'In this course you will learn about reactive web development using HTML & CSS. This course will start teaching you from basics of HTML & CSS and as you progress, you will learn all the advance concepts.',
    },
    {
      id: 109,
      kind: 'course',
      name: 'UX Design Course: Advance',
      author: 'Steve Smith',
      duration: 20.0,
      type: 'Premium',
      price: 115.5,
      ratings: 4.8,
      image: 'assets/courses/course-image-9.jpeg',
      description:
        'In this course you will learn about reactive web development using HTML & CSS. This course will start teaching you from basics of HTML & CSS and as you progress, you will learn all the advance concepts.',
    },
    {
      id: 1,
      kind: 'movie',
      name: 'Pirates of the Caribbean',
      author: 'Gore Verbinski',
      duration: 2,
      type: 'Free',
      price: 0.0,
      ratings: 5,
      image: 'assets/movies/movie-image-1.jpg',
      description:
        "Pirates of the Caribbean is an American fantasy supernatural swashbuckler film series produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise.",
    },
    {
      id: 2,
      kind: 'movie',
      name: 'Interstellar',
      author: 'Nolan',
      duration: 3,
      type: 'Premium',
      price: 129.0,
      ratings: 5,
      image: 'assets/movies/movie-image-2.jpg',
      description:
        'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    },
    {
      id: 3,
      kind: 'movie',
      name: 'Shrek',
      author: 'Steve Smith',
      duration: 2.5,
      type: 'Free',
      price: 0.0,
      ratings: 4.0,
      image: 'assets/movies/movie-image-3.jpg',
      description:
        'Shrek, an ogre, embarks on a journey with a donkey to rescue Princess Fiona from a vile lord and regain his swamp.',
    },
    {
      id: 4,
      kind: 'movie',
      name: 'The Dark Knight',
      author: 'Nolan',
      duration: 2.5,
      type: 'Premium',
      price: 145.5,
      ratings: 5,
      image: 'assets/movies/movie-image-4.jpg',
      description:
        "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",
    },
    {
      id: 5,
      kind: 'movie',
      name: 'Harry Potter',
      author: 'Chris Columbus',
      duration: 2.5,
      type: 'Premium',
      price: 150.0,
      ratings: 4.9,
      image: 'assets/movies/movie-image-5.jpg',
      description:
        'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.',
    },
  ];

  getTotalItems() {
    return this.items.length;
  }
  getTotalFreeItems() {
    return this.items.filter((item) => item.type === 'Free').length;
  }
  getTotalPremiumItems() {
    return this.items.filter((item) => item.type === 'Premium').length;
  }

  itemCountRadioButton: string = 'All';
  itemRadioButton: string = 'Both';
  searchText: string = '';

  onFilterRadioButtonCountChanged(data: string) {
    this.itemCountRadioButton = data;
    //console.log(this.courseCountRadioButton);
  }
  onFilterRadioButtonChanged(data: string) {
    this.itemRadioButton = data;
    //console.log(this.courseCountRadioButton);
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    //console.log(this.searchText);
  }

  boughtItem: any;
  detailsItem: any;
}
