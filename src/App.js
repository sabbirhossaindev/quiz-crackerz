import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import OptionQuiz from './components/OptionQuiz/OptionQuiz';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/topics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>
        },
        {
          path: '/topic/:topicId',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
          element: <OptionQuiz></OptionQuiz>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        { path: '*', element: <div className='text-3xl text-center'>Not Found: 404</div>}
      ]
    }
    
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
