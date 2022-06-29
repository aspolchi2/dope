
import './sass/app.scss'
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TasksContainer from "./container/TasksContainer";
import TaskListContextProvider from "./context/TaskListContext";
import { Box } from '@mui/material';


function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <Box className="app-wrapper" sx={ {backgroundColor: 'primary.dark'}}>
        <Header/>
          <div className="main">
            <TaskForm />
            <TasksContainer />
          </div>
        </Box>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
