import s from './postsItem.module.css';

const PostsItem = (props) => {
    return<div className={s.post}>
        <img src="https://phonoteka.org/uploads/posts/2021-07/1625658500_11-phonoteka-org-p-drakoni-arti-krasivie-krasivo-14.jpg" alt="" />
        {props.context} <br/>{'like:  '+  props.likes}
    </div>
}

export default PostsItem;