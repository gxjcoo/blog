const Test = () => import('../views/test/Index');
const Home = () => import('../views/test/Home');
const About = () => import('../views/test/About');
export default [{
    path: '/test',
    name: 'Test',
    component: Test,
    children: [{
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
    ]
  },

]