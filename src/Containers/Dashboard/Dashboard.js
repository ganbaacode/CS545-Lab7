import { useState } from "react"
import Form from "../../Components/ChangeNameForm/Form"
import PostDetail from "../../Components/PostDetail/PostDetail";
import Posts from "../Posts/Posts"




export default function Dashboard() {

  const [selected, setSelected] = useState(0);
  const [_author, setAuthor] = useState(null);
  const [detail, setDetail] = useState([{}]);

  let [postState, setPostState] = useState(
    [
      { id: 1, title: "Happiness", author: "John" },
      { id: 2, title: "MIU", author: "Dean" },
      { id: 3, title: "Enjoy Life", author: "Jasmine" }
    ])

  const setSelectedHandler = (id) => {
    setSelected(id);
    setDetailHandler(id);
    console.log(id);
  }

  const changeAuthor = (myAuth) => {
    postState[0].author = myAuth
    setPostState(postState)
  }

  const setDetailHandler = (id) => {
    const detail = postState.filter(p => p.id == id);
    setDetail(detail)
  }


  return (
    <div>
      <div className="Post">
        <Posts
          data={postState}
          setSelected={setSelectedHandler} />
      </div>

      <div className="FormCn">
        <Form setAuthor={changeAuthor} />
      </div>

      <div className="detailContainer">
        <PostDetail data={detail} />
      </div>
    </div>
  )

}
