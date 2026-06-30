const initialState = {
  projects: [
    {
      id: 1,
      title: "Help me find Peach",
      author: "Mario Plummer",
      initials: "MP",
      color: "#a3e635",
      time: "Today at 12:36 PM",
      tag: "Active",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc."
    },
    {
      id: 2,
      title: "Ninja Party!!",
      author: "Ryu Tenken",
      initials: "RT",
      color: "#4ade80",
      time: "Today at 12:35 PM",
      tag: "Planning",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc."
    }
  ]
};

const projectReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_PROJECT":

      return {
        ...state,
        projects: [
          action.payload,
          ...state.projects
        ]
      };

    case "DELETE_PROJECT":

      return {
        ...state,
        projects: state.projects.filter(
          project => project.id !== action.payload
        )
      };

    case "UPDATE_PROJECT":

      return {
        ...state,
        projects: state.projects.map(project =>
          project.id === action.payload.id
            ? {
                ...project,
                title: action.payload.title,
                info: action.payload.info
              }
            : project
        )
      };

    default:
      return state;
  }
};

export default projectReducer;