import s from './peopleRight.module.css';
import Addendum_post from "./addendumPost/addendum_post";
import PostsItem from "./postItem/postsItem";

const PeopleRight = (props) => {

   let postElement = props.postData.map( p => <PostsItem likes={p.likes} context={p.context} />)

  return (
    <div className= {s.aqiljan}>
      <img src= "https://phonoteka.org/uploads/posts/2021-05/1620862326_6-phonoteka_org-p-fon-dlya-razmishlenii-6.jpg" />

         <Addendum_post />
          {postElement}


    </div>
  );
}


export default PeopleRight;