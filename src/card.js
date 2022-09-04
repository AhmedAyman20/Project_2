import {data} from './data/db.js'

const Card = () => {

    
    return ( 
        <div className="card"> 
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h2> {data.header} </h2>
            <p> {data.description} </p>
            <button> Explore Python</button>
            <ul>
                {data.courses.map((course) => (
                    <li key={course.id}>
                    <a href="/">
                        <figure>
                            <img src={course.image} alt={course.title} />
                            <figcaption className="coursename">{course.title}</figcaption>
                            <figcaption className='coureseauthor'>{course.instructors[0].name}</figcaption>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <figcaption className='price'> ${course.price}</figcaption>
                        </figure>
                    </a>
                    </li>
                ))}
            </ul>

        </div>
        
    );
}
 
export default Card;