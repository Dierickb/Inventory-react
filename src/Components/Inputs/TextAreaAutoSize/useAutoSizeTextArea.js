import { useEffect } from "react";

export const useAutosizeTextArea = (textAreaRef, value) => {
  useEffect(() => {
    if (!textAreaRef ) return 
    textAreaRef.style.height = "0px";      
    const scrollHeight = textAreaRef.scrollHeight;
    textAreaRef.style.height = scrollHeight-19 + "px"
  }, [textAreaRef, value]);
}

