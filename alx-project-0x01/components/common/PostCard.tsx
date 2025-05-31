const PostCard: React.FC=()=>{
    return (
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Post Title</h2>
            <p className="text-gray-700 mb-4">This is a brief description of the post content. It gives an overview of what the post is about.</p>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Read More
            </button>
        </div>
    );
}
export default PostCard;