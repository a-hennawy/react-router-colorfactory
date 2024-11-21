import NewColorForm from "./NewColorForm";

import { Link } from "react-router-dom";

const NewColorPage = ({ createColor }) => {
  return (
    <div>
      <NewColorForm createColor={createColor} />
    </div>
  );
};

export default NewColorPage;
