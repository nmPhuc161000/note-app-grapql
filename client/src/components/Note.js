import React, { useEffect, useState } from "react";
import { EditorState, convertFromHTML, convertToRaw } from "draft-js";
import { ContentState, Editor } from "react-draft-wysiwyg";
import { draftToHtml } from "draftjs-to-html";

export default function Note() {
  const note = {
    id: "1",
    content: "<p>this is new note</p>",
  };

  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty();
  });

  const [rawHTML, setRawHTML] = useState(note.content);

  // useEffect(() => {
  //   const blocksFromHTML = convertFromHTML(note.content);
  //   const state = ContentState.createFromBlockArray(
  //     blocksFromHTML.contentBlocks,
  //     blocksFromHTML.entityMap
  //   );
  //   setEditorState(EditorState.createWithContent(state));
  // }, [note.id]);

  useEffect(() => {
    setRawHTML(note.content);
  }, [note.content]);

  const handleOnChange = (e) => {
    setEditorState(e);
    setRawHTML(draftToHtml(convertToRaw(e.getCurrentContent())));
  };
  
  return (
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleOnChange}
        placeholder="Write something"
      />
    </>
  );
}
