import GoToButton from "./GoToButton";
import { getNode } from "@/utils/getNode";

function Controller() {
  return (
    <div role="group" className="buttonGroup">
      <GoToButton
        direction="down"
        label="스크롤 다운"
        onClick={function () {
          const PE = getNode('.Practice')
          PE.scroll({top: 2000, behavior: 'smooth'})
        }}
      />

      <GoToButton
        direction="up"
        label="스크롤 업"
        onClick={() => {
          const PE = getNode('.Practice')
          PE.scroll({top: 0, behavior: 'smooth'})
        }}
      />
    </div>
  );
}

export default Controller;
