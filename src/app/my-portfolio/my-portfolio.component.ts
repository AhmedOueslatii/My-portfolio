import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent {
  projects = [
    {
      title: 'Devhub',
      type:'web dev',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/NABW_MHVzaM?si=U2sWtp2S9uu8_YJi'),
      description: 'This project involves the design and development of a comprehensive full-stack web application aimed at streamlining project management and consultant assignment within an organization. The application will offer a robust platform for managing various projects, tracking their progress, and efficiently assigning tasks to different consultants based on their expertise and availability. Key features will include intuitive dashboards, real-time project updates, assignment tracking, and user management capabilities to enhance productivity and coordination among team members.',
      Tools: [
        { name: 'Angular', imageUrl: './assets/Angular.png' },
        { name: 'NestJS', imageUrl: './assets/nestjs.png' },
       
      ],
      githubLink: 'https://github.com/AhmedOueslatii/DevHub', 
    },
    {
      title: 'SonoCure',
      type:'computer Vision,Machine learning, Web dev',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/fX5atPShFio?si=9eUXb9Ivt5rE9U72'),
      description: 'This web platform integrates advanced artificial intelligence models to facilitate the non-invasive detection and treatment of tumors using ultrasound waves. Designed specifically for medical professionals, the platform offers a cutting-edge solution that eliminates the need for biopsies. By leveraging AI-driven algorithms, it enhances the accuracy and efficiency of tumor diagnosis and management, providing a state-of-the-art tool for improving patient outcomes through advanced, non-invasive techniques.'
    ,
    Tools: [
      { name: 'Angular', imageUrl: './assets/Angular.png' },
      { name: 'FLask', imageUrl: './assets/Flask.png' },
      {name: 'Opencv', imageUrl: './assets/opencv.png'}
     
    ],githubLink: 'https://github.com/AhmedOueslatii/DevHub'
    }
  ];

  selectedProject: any = null;

  constructor(private sanitizer: DomSanitizer) {}

  openModal(project: any) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }
  
  }
