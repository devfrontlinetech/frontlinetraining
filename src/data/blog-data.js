const blog_data = [
  {
    id: 1,
    img: '/assets/images/blog/blog-01.jpg',
    category: 'ONLINE',
    title: 'A Beginner’s Guide to Understanding the Basics',
    date: "Feb 10, 2025",
    comment: 9,
    sm_desc: 'This article would introduce beginners to JavaScript, explaining core concepts like variables, functions, and control structures.',
    delay:'100',
    home_1:true,
  },
  {
    id: 2,
    img: '/assets/images/blog/blog-02.jpg',
    category: 'LECTURE',
    title: 'The Most Versatile Programming Language in 2025',
    date: "Jan 10, 2025",
    comment: 15,
    sm_desc: 'Python has become one of the most popular and versatile programming languages.Python is a great choice for beginners.',
    delay:'200',
    home_1:true,
  },
  {
    id: 3,
    img: '/assets/images/blog/m-3.webp',
    category: 'BUSINESS',  
    title: 'Understanding Front-End Frameworks: React vs. Angular vs. Vue',
    date: "Feb 10, 2025",
    comment: 12,
    sm_desc: 'This article would compare the three most popular front-end JavaScript frameworks—React, Angular, and Vue.',
    delay:'300',
    home_1:true,
  },
  // home 4
  {
    id: 4,
    img: '/assets/images/blog/blog-030.jpg',
    category: 'ONLINE',
    title: 'Education in Our Lives: We Can Change the Future',
    date: "Jan 10 2025",
    comment: 18,
    sm_desc: 'Education shapes our lives by empowering us with knowledge and skills, paving the way for personal growth and societal progress. Through education, we have the power to change the future, fostering innovation, equality, and a better world for all.',
    author:'Edward',
    large:true,
    home_4:true,
  },
  {
    id: 5,
    img: '/assets/images/blog/blog-05.jpg',
    category: 'LECTURE',
    title: 'Qualification for Students’Satisfaction Rate',
    date: "Feb 2 2025",
    comment: 14,
    sm_desc: 'Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.',
    author:'Edward',
    home_4:true,
  },
  {
    id: 6,
    img: '/assets/images/blog/blog-06.jpg',
    category: 'LECTURE',
    title: 'Instructional Design and Adult Learners',
    date: "Jan 18 2025",
    comment: 9,
    sm_desc: 'Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.',
    author:'Edward',
    home_4:true,
  },
  {
    id: 7,
    img: '/assets/images/blog/blog-10.jpg',
    category: 'LECTURE',
    title: 'Join ATD 2021 International Conference & EXPO',
    date: "Jan 28 2025",
    comment: 16,
    sm_desc: 'Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.',
    author:'Edward',
    home_4:true,
  },
  // home 5
  {
    id: 8,
    img: '/assets/images/blog/art-02.webp',
    category: 'ONLINE',
    title: 'Become a Better Blogger: Content Planning',
    date: "Feb 12, 2025",
    comment: 10,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed.',
    author:'Edward',
    kitchen:true,
  },
  {
    id: 9,
    img: '/assets/images/blog/art-01.jpg',
    category: 'LECTURE',
    title: 'Fresh Inspiration For March And A Smashing',
    date: "Feb 15, 2025",
    comment: 12,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.',
    author:'Edward',
    kitchen:true,
  },
  {
    id: 10,
    img: '/assets/images/blog/art-03.jpg',
    category: 'BUSINESS',
    title: 'How to Developers Taking the Guess Work',
    date: "Feb 16, 2025",
    comment: 15,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.',
    author:'Edward',
    kitchen:true,
  },
  // kindergarten
  {
    id: 11,
    img: '/assets/images/blog/blg-02.jpg',
    category: 'ONLINE',
    title: 'The Impact of Artificial Intelligence on Everyday Life',
    date: "Feb 20, 2025",
    comment: 10,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed.',
    author:'Edward',
    kindergarten_blog:true,
  },
  {
    id: 12,
    img: '/assets/images/blog/blg-01.jpg',
    category: 'ONLINE',
    title: 'Why Cybersecurity Is Everyone’s Responsibility.',
    date: "Feb 16, 2025",
    comment: 12,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed.',
    author:'Edward',
    kindergarten_blog:true,
  },
  {
    id: 13, 
    img: '/assets/images/blog/blg-03.jpg',
    category: 'ONLINE',
    title: 'The Future of Tech: Emerging Trends to Watch in 2025',
    date: "Feb 26, 2025",
    comment: 15,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed.',
    author:'Edward',
    kindergarten_blog:true,
  },
  // modern schooling
  {
    id: 14,
    img: '/assets/images/blog/blg1.jpg',
    category: 'ONLINE',
    title: 'Good Things are Happening Creative Learning',
    date: "Feb 20, 2025",
    comment: 14,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur sed idunt.',
    author:'Edward',
    delay:'100',
    modern_schooling_blog:true,
  },
  {
    id: 15,
    img: '/assets/images/blog/blg2.png',
    category: 'LECTURE',
    title: 'Creating a Community of Diverse Learners',
    date: "Feb 15, 2025",
    comment: 14,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur sed idunt.',
    author:'Edward',
    delay:'200',
    modern_schooling_blog:true,
  },
  {
    id: 16,
    img: '/assets/images/blog/blg3.jpg',
    category: 'BUSINESS',
    title: 'Changing Lives and Giving Choices For Everyone',
    date: "Feb 23, 2025",
    comment: 19,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur sed idunt.',
    author:'Edward',
    delay:'300',
    modern_schooling_blog:true,
  },
  {
    id: 17,
    img: '/assets/images/blog/blg4.webp',
    category: 'BUSINESS',
    title: 'An Excellent Foundation for Future Success',
    date: "Jan 30, 2025",
    comment: 20,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur sed idunt.',
    author:'Edward',
    delay:'300',
    modern_schooling_blog:true,
  },

  // blog standard
  {
    id:18,
    img:'/assets/images/blog/blog.webp',
    category:'Arts & Gallery',
    title:'4 Learning Management System Design Tips For Better eLearning',
    date:'Jan 10, 2025',
    comment:'09',
    desc:'When designing a Learning Management System (LMS), focus on user-centered features like an intuitive, responsive interface that works across devices and offers personalization options. Content should be delivered through diverse formats (text, video, quizzes) and structured in modular lessons for flexibility. Foster engagement with interactive tools like discussion forums and live webinars.',
    blog_standard:true,
  },
  {
    id:19,
    video:true,
    img:'/assets/images/blog/blog-01.webp',
    category:'Online',
    title:' The Future of Cloud Computing: Trends to Watch in 2025',
    date:'Jan 15, 2025',
    comment:'10',
    desc:'Explore emerging cloud technologies, including serverless computing, edge computing, and the growing role of AI in cloud management.',
    blog_standard:true,
  },
  {
    id:20,
    slider:true,
    images:[
      '/assets/images/blog/swip-01.jpg',
      '/assets/images/blog/swip-02.jpg',
      '/assets/images/blog/swip-03.jpg',
    ],
    category:'Education',
    title:'How to Developers Taking the Guess Work Generation of Business',
    date:'Jan 18, 2025',
    comment:'12',
    desc:'To remove guesswork in business generation and development, developers can use a combination of data-driven decision-making, agile practices, and continuous feedback loops. Here are key strategies to guide developers.',
    blog_standard:true,
  },
  {
    id:21,
    img:'/assets/images/blog/developer.webp',
    category:'Developer',
    title:'How to Become Computer Working Days Software Engineer?',
    date:'Jan 20, 2025',
    comment:'15',
    desc:'If you prefer not to pursue a traditional degree, you can consider boot camps, online courses, or self-learning. Some software engineers come from coding boot camps or online programs that teach programming in months instead of years.',
    blog_standard:true,
  },
  {
    id:22,
    img:'/assets/images/blog/developer-01.jpg',
    category:'Developer',
    title:'How AI and Machine Learning Are Transforming IT Infrastructure',
    date:'Jan 29, 2025',
    comment:'18',
    desc:'Discuss how AI/ML can optimize network performance, automate IT tasks, and improve cybersecurity.',
    blog_standard:true,
  },

  // blog masonry
  {
    id:23,
    img:'/assets/images/blog/blog-01.jpg',
    category:'ONLINE',
    title:'Become a Better Blogger: Content Planning',
    date:'Jan 30, 2025',
    comment:'08',
    desc:'Lorem ipsum dolor sit amet cons tetur adipisicing sed.',
    blog_masonry:true,
  },
  {
    id:24,
    img:'/assets/images/blog/blog-02.jpg',
    category:'Lecture',
    title:'Fresh Inspiration For March And A',
    date:'Jan 24, 2025',
    comment:'10',
    desc:'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.',
    blog_masonry:true,
  },
  {
    id:25,
    img:'/assets/images/blog/blog-03.jpg',
    category:'Business',
    title:'How to Developers Taking the Guess Work',
    date:'Feb 07, 2025',
    comment:'12',
    desc:'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.',
    blog_masonry:true,
  },
  {
    id:26,
    img:'/assets/images/blog/blog-19.jpg',
    category:'Business',
    title:'How to Become Computer Working Days',
    date:'Feb 17, 2025',
    comment:'15',
    desc:'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore ad dolore magna aliqua enim mini veniam quis nostrud exercitation.ullamco laboris.',
    blog_masonry:true,
  },
  {
    id:27,
    img:'/assets/images/blog/blog-21.jpg',
    category:'Lecture',
    title:'Designing an Online Course from',
    date:'Feb 15, 2025',
    comment:'20',
    desc:'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.',
    blog_masonry:true,
  },
  {
    id:28,
    img:'/assets/images/blog/blog-20.jpg',
    category:'Online',
    title:'Ten Benefits Of Rentals That May Change',
    date:'Feb 20, 2025',
    comment:'13',
    desc:'Lorem ipsum dolor sit amet cons tetur adipisicing sed.',
    blog_masonry:true,
  },
  {
    id:29,
    img:'/assets/images/blog/blog-23.jpg',
    category:'Business',
    title:'How to Keep Workouts Fresh in the',
    date:'Mar 02, 2025',
    comment:'16',
    desc:'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore ad dolore magna aliqua enim mini veniam quis nostrud exercitation.ullamco laboris.',
    blog_masonry:true,
  },
  {
    id:30,
    img:'/assets/images/blog/blog-24.jpg',
    category:'Online',
    title:'Become a Better Blogger: Content Planning',
    date:'Mar 08, 2025',
    comment:'22',
    desc:'Lorem ipsum dolor sit amet cons tetur adipisicing sed.',
    blog_masonry:true,
  },
  {
    id:31,
    img:'/assets/images/blog/blog-22.jpg',
    category:'Lecture',
    title:'Unveiling the Secrets of Online Teaching',
    date:'Feb 30, 2025',
    comment:'18',
    desc:'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.',
    blog_masonry:true,
  },

  // list blog 
  {
    id:32,
    img:'/assets/images/blog/blog-25.jpg',
    category:'Business',
    title:'4 Learning Management System Design Tips',
    date:'Mar 10, 2025',
    comment:'12',
    desc:'Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.',
    blog_list:true,
  },
  {
    id:33,
    img:'/assets/images/blog/blog-26.jpg',
    category:'Business',
    title:'How to Developers Taking the Guess Work',
    date:'Mar 14, 2025',
    comment:'15',
    desc:'Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.',
    blog_list:true,
  },
  {
    id:34,
    img:'/assets/images/blog/blog-27.jpg',
    category:'Lecture',
    title:'Ten Benefits Of Rentals That May Change Your',
    date:'Apr 08, 2025',
    comment:'20',
    desc:'Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.',
    blog_list:true,
  },
  {
    id:35,
    img:'/assets/images/blog/blog-28.jpg',
    category:'Online',
    title:'Fresh Inspiration For March And A Smashing',
    date:'Apr 02, 2025',
    comment:'13',
    desc:'Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.',
    blog_list:true,
  },
  {
    id:36,
    img:'/assets/images/blog/blog-29.jpg',
    category:'Business',
    title:'Fresh Inspiration For March And A Smashing',
    date:'Apr 12, 2025',
    comment:'16',
    desc:'Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.',
    blog_list:true,
  },
  {
    id:37,
    img:'/assets/images/blog/blog-30.jpg',
    category:'Online',
    title:'How to Developers Taking the Guess Work',
    date:'Apr 18, 2025',
    comment:'22',
    desc:'Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.',
    blog_list:true,
  },
  {
    id:38,
    img:'/assets/images/blog/blog-31.jpg',
    category:'Lecture',
    title:'Ten Benefits Of Rentals That May Change',
    date:'Apr 25, 2025',
    comment:'18',
    desc:'Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.',
    blog_list:true,
  },
]

export default blog_data;
