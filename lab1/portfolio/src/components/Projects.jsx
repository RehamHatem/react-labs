import '../Projects.css';
import trademate from '../assets/images/trademate.png';
import book from '../assets/images/bookme.png';
import movies from '../assets/images/movies.jpg';
import genie from '../assets/images/genie.png';
import ecom from '../assets/images/ecom.png';
import ui from '../assets/images/ui.png';
import ai from '../assets/images/ai.jpg';

const projects = [
{
      title: 'Trade Mate',
      image: trademate,
      description: 'Inventory Management App built with Clean Architecture, Repository Pattern, and Cubit.',
      details: [
        'Add and manage products with stock levels and categories.',
        'Register suppliers and customers with full contact details.',
        'Create purchase (in) and sales (out) bills easily.',
        'Track payments, discounts, and taxes in bills.',
        'View product and bill history with detailed reports.'
      ],
      link: 'https://github.com/RehamHatem/trade_mate'
    },
    {
      title: 'BookMe',
      image: book,
      description: 'Book shop web application with Firebase, Payment Integration, and Cloudinary.',
      details: [
        'User login (email/Google) using Firebase Authentication.',
        'Product catalog with pagination to reduce Firestore reads.',
        'Cart system with localStorage and Firestore sync.',
        'Test payments using PayPal (no real transactions).',
        'Admin panel for managing products (add/edit/delete).',
        'Secured data access with Firestore rules.'
      ],
      link: 'https://book-me-a6d98.web.app'
    },
    {
      title: 'Movies App',
      image: movies,
      description: 'Mobile application using TMDB API with MVVM and Clean Architecture.',
      details: [
        'Fetch popular, upcoming, and top-rated movies.',
        'Display movie details and allow type-based filtering.',
        'Search movies by name and manage watchlists.',
        'Uses Cubit for state management.'
      ],
      link: 'https://github.com/RehamHatem/Movies'
    },
    {
      title: 'GEINIE',
      image: genie,
      description: 'Gallery app with AI image captioning via Flask and Sentence Transformers.',
      details: [
        'Image upload/capture with AI-generated captions.',
        'Semantic search and secure user authentication.',
        'MVVM architecture with Provider for state management.',
        'Integrated with Firebase for storage.'
      ],
      link: 'https://github.com/RehamHatem/GENIE'
    },
    {
      title: 'E-commerce App',
      image: ecom,
      description: 'Shopping mobile application with RESTful APIs and state management.',
      details: [
        'Features categories, brands, products, and cart.',
        'User login, registration, and profile management.',
        'Wishlist functionality and clean architecture.'
      ],
      link: 'https://github.com/RehamHatem/E_Commerce'
    },
    {
      title: 'Education Platform UI',
      image: ui,
      description: 'Responsive UI for an education platform using HTML, CSS, and Bootstrap.',
      details: [
        'Designed a responsive page view for educational content.',
        'Utilized Bootstrap for consistent styling.'
      ],
      link: 'https://rehamhatem.github.io/bootstrab/'
    },
    {
      title: 'AI Models',
      image: ai,
      description: 'Machine learning projects showcasing various AI techniques.',
      details: [
        'Text classification model using CNN (Sentiment140 dataset).',
        'Fruit recognition model (Fruit360 dataset).',
        'Text generation using RNN (trained on Wikipedia articles).',
        'Mobile price classification with PSO and LDA (Decision Tree).'
      ],
      link: '#'
    }

];

function Projects () {
  return (
    <section id="projects">
      <div>
        <h2>Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col" key={index}>
              <div className="card">
                <img src={project.image} className="card-img-top" alt={`${project.title} Project`} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <div className="card-text">
                    {project.description}
                    <br />
                    <a href={project.link} className="btn btn-project" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
