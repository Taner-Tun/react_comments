import  { useContext, createContext } from "react";
import PropTypes from "prop-types";

const CommentContext = createContext();

function CommentContextProvider({ children, data }) {
  return (
    <CommentContext.Provider value={data}>
      {children}
    </CommentContext.Provider>
  );
}

function useComment() {
  const context = useContext(CommentContext);

  if (!context) {
    throw new Error("There is no Comment Context Provider, first import it");
  }

  return context; 
}
CommentContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired, // Update the type according to the shape of your data
};

export { CommentContextProvider, useComment };