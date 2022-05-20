import { useState } from "react";
import Header from "../../components/Header";
import {
  MainContainer,
  HomeContainer,
  Sidebar,
  TopTrend,
  CreateContainer,
  Input,
  Button,
  Form,
  DataContainer,
  Tag,
  DescriptionInput,
  CreateTagInput,
} from "../../components/HomeComponents";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth.js";
import DropZone from "../../components/DropZone";
import { IoCloseOutline, IoAdd } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

import { FormWarning } from "../../components/AuthComponents";

export default function Home() {
  const [url, setUrl] = useState("");
  const { user } = useAuth();
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState("");
  const [imageActive, setImageActive] = useState(false);
  const [newTag, setNewTag] = useState("");

  function handleSubmit() {
    const promise = api.getFoodData({ url: url });
    promise.then((response) => {
      setDescription(response.data.description);
      setTags(response.data.tags);
      setImageActive(true);
    });
    promise.catch((err) => {
      console.log(err);
    });
  }

  function createNewTag(e){
     e.preventDefault();
     const tagsArray = [...tags]
     if(newTag.length > 0 && !tagsArray.includes(newTag)){
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

  console.log(newTag);

  function resetStates() {
    setDescription("");
    setUrl("");
    setTags([]);
    setImageActive(false);
    setNewTag("");
  }

  const expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);

  return (
    <>
      <Header />
      <HomeContainer>
        <Sidebar />
        <MainContainer>
          <CreateContainer>
            {/* <DropZone /> */}
            <h1>Enter your food image URL</h1>
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
                          test={newTag.length}
                          onChange={(e) => setNewTag(e.target.value)}
                        />
                        <form onSubmit={createNewTag}>
                          <label htmlFor="create">
                            <IoAdd onClick={createNewTag} size="1.2em" />
                          </label>
                        </form>
                      </Tag>
                    </DataContainer>
                    <Button>Submit Post</Button>
                  </>
                ) : (
                  <Button type="button" onClick={(e) => handleSubmit(e)}>
                    Get tags and Description
                  </Button>
                )}
                <Button type="button" color="dark" onClick={resetStates}>
                  Try Another One
                </Button>
              </>
            ) : (
              url.length > 0 && (
                <FormWarning>Must be a valid image url!</FormWarning>
              )
            )}
          </CreateContainer>
        </MainContainer>
        <Sidebar>
          <TopTrend>
            <img
              src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="salmon"
            />
            <p>Salmon</p>
          </TopTrend>
        </Sidebar>
      </HomeContainer>
    </>
  );
}
