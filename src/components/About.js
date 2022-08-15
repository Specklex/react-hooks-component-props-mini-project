import blogData from "../data/blog";
function About(){
    return(
        <aside>
            <img src={blogData.image}>{blogData.image}</img>
            <p>{blogData.about}</p>
        </aside>
    )
}

export default About;