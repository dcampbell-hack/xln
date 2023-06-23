import React, { useReducer } from "react";


const UserForm: React.FC = () => {
    const [state, dispatch] = useReducer(
      (state, action) => ({
        ...state,
        ...action,
      }),
      {
        first: "",
        last: "",
      }
    );
  
    return (
      <div>
        <div>
          First: {state.first}
          Last: {state.last}
        </div>
        <input
          type="text"
          value={state.first}
          onChange={(e) => dispatch({ first: e.target.value })}
        />
        <input
          type="text"
          value={state.last}
          onChange={(e) => dispatch({ last: e.target.value })}
        />
      </div>
    );
  };
  
const CreateDocument: React.FC = () => {
    const [state, dispatch] = useReducer(
      (state, action) => {
        switch (action.type) {
          case "SET_NAME":
            return { ...state, name: action.payload };
          case "ADD_NAME":
            return {
              ...state,
              names: [...state.name, state.name],
              name: "",
            };
        }
      },
      {
        names: [],
        name: "",
      }
    );
  
    return (
      <div>
        <h2>Add Documents</h2>
  
        <UserForm />
  
        <p>{state.name}</p>
        <input
          type="text"
          value={state.name}
          onChange={(e) => dispatch({ type: "SET_NAME" })}
        />
  
        <button onClick={() => AddName()}>Add Name</button>
      </div>
    );
  };

  export default CreateDocument;