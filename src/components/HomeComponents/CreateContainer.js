import { useState } from "react";
import {
  Form,
  Input,
  DataContainer,
  DescriptionInput,
  CreateTagInput,
  Button,
  Tag,
  Container,
} from "./index.js";
import api from "../../services/api";
import { IoCloseOutline, IoAdd } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { FormWarning } from "../../components/AuthComponents";
import PuffLoader from "react-spinners/PuffLoader";
import useAuth from "../../hooks/useAuth.js"

function CreateContainer() {
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState("");
  const [imageActive, setImageActive] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [imageDataLoading, setImageDataLoading] = useState(false)
  const {user} = useAuth();

  function handleSubmit() {
     setImageDataLoading(true)
    const promise = api.getFoodData({ url: url });
    promise.then((response) => {
      setDescription(response.data.description);
      setTags(response.data.tags);
      setImageActive(true);
      setImageDataLoading(false);
    });
    promise.catch((err) => {
      console.log(err);
      setImageDataLoading(false);
    });
  }

  function createPost(){
     const post = {
        imageUrl: url,
        userId: user.userId,
        tags,
        description

     }
     const promise = api.createPost(post);
     promise.then((response) => {
        console.log(response);
        resetStates()
     })
     promise.catch((err) => {
        console.log(err);
        alert("We had an error trying to create the post, please try again later")
        resetStates()
     })
  }

  function createNewTag(e) {
    e.preventDefault();
    const tagsArray = [...tags];
    if (newTag.length > 0 && !tagsArray.includes(newTag)) {
      tagsArray.push(newTag);
    }

    setTags(tagsArray);
    setNewTag("");
  }

  function handleTagDeletion(e) {
    const tagsArray = [...tags];
    const index = tagsArray.indexOf(e);
    if (index !== -1) {
      tagsArray.splice(index, 1);
    }

    setTags(tagsArray);
  }

  function resetStates() {
    setDescription("");
    setUrl("");
    setTags([]);
    setImageActive(false);
    setNewTag("");
    setImageDataLoading(false)
  }



  const expression =
    /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);

  return (
    <Container>
      {/* <DropZone /> */}
      <h1>
        Enter your <strong>food</strong> image URL
      </h1>
      <Form>
        <Input
          value={url}
          placeholder="Image URL"
          type="text"
          onChange={(e) => setUrl(e.target.value)}
        />
      </Form>
      {url.match(regex) ? (
        <>
          <img src={url} alt="Oops... try a valid URL" />
          {imageActive ? (
            <>
              <DataContainer>
                <p>
                  Title:
                  <DescriptionInput
                    id="description"
                    placeholder={description}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <label htmlFor="description">
                    <FiEdit />
                  </label>
                </p>

                {tags.map((tag) => (
                  <Tag key={tag} onClick={() => handleTagDeletion(tag)}>
                    {tag} <IoCloseOutline size="1.2em" />
                  </Tag>
                ))}

                <Tag>
                  <CreateTagInput
                    id="create"
                    value={newTag}
                    wordlength={newTag.length}
                    onChange={(e) => setNewTag(e.target.value)}
                  />
                  <form onSubmit={createNewTag}>
                    <label htmlFor="create">
                      <IoAdd onClick={createNewTag} size="1.2em" />
                    </label>
                  </form>
                </Tag>
              </DataContainer>
              <Button type="submit" onClick={createPost}>Submit Post</Button>
            </>
          ) : imageDataLoading ? <PuffLoader color="rgba(32, 195, 161, 1)" size="10em" /> : (
            <Button type="button" onClick={(e) => handleSubmit(e)}>
              Get tags and Description
            </Button>
          )}
          <Button type="button" color="dark" onClick={resetStates}>
            Try Another One
          </Button>
        </>
      ) : (
        url.length > 0 && <FormWarning>Must be a valid image url!</FormWarning>
      )}
      
      
    </Container>
  );
}

export default CreateContainer;
