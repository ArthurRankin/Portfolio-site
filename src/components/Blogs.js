import React, {Component} from 'react';
import './blogs.css';



let BlogPage = () => {
    return(
        <div>
            <h1 className="text-center mb-5 mt-5">Blogs</h1>
            <div>
                <h3 className="mb-5">January 2nd, 2018</h3>
                <p>Today was the first day of my journey at Nashville Software School. I met a ton of new people, who I know will be good friends in no time. It was mostly introductions and lectures on what is expected from both the students and the teachers. Even though it was just the first day, I can already tell I'm going to love this. After all, this is what I want to do with my life. I every one else here is so motivated as well. I simply cant wait for us to jump into it. We are only here for 6 months so I know it wont be long but im going to learn as much as I possibly can from every person here. </p>   
            </div>
        </div>
    )
}



class Blog extends Component {
    
    render() {
        return(
            <BlogPage />
        )
    }
}

export default Blog;