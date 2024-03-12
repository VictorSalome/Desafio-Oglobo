import axios from "axios";
import { useEffect, useState } from "react";
import { NewsList } from "./models";

export const useNewsList = () => {
  const [mainInfo, setMainInfo] = useState([] as NewsList[]);

  useEffect(() => {
    axios
      .get<NewsList[]>("http://localhost:3000/section")
      .then((response) => {
        setMainInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(mainInfo);

  return { mainInfo };
};
