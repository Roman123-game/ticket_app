
function newPostsReducer(newPosts, action) {
  switch (action.type) {
      case "GLOBE_POST":   
        return {
       newPosts: [newPosts.newPosts.filter((itm) => itm.description === action.payload)]
        };
    default: 
      return console.log("default");
  }
}

export default newPostsReducer;