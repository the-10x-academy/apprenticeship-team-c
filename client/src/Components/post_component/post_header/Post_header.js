function PostHeader(props) {
    return (<div>
        <div className="card-header">
            <div className="left-part">
                <p className="author-name">{props.name}</p>
                <p className="author-city">{props.place}</p>
            </div>
            <div className="right-part">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
            </div>
        </div>
        <div className="card-body">
            <img className="postimg" src={"http://localhost:9000/" + props.image} alt="loading" />
        </div>
    </div>)
}
export default PostHeader