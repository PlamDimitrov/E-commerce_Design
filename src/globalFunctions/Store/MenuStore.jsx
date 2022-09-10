import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { useContext } from "react";

import api from "../../api";

import handleError from "../serverErrors";

export const MenuContext = React.createContext({
  mainMenu: [],
  setMainMenu: () => {},
});

const MenuStore = ({ children }) => {
  const [hasToUpdate, setHasToUpdate] = useState(false);
  const [mainMenu, setMainMenu] = useState([]);
  const menuStore = useMemo(
    () => ({
      mainMenu,
      setHasToUpdate,
    }),
    [mainMenu]
  );

  useEffect(() => {
    api
      .getAllMenus()
      .then((res) => res.json())
      .then((mainMenu) => {
        setMainMenu([...mainMenu]);
        setHasToUpdate(false);
      })
      .catch((err) => console.log(err));
  }, [hasToUpdate]);

  return (
    <MenuContext.Provider value={menuStore}>{children}</MenuContext.Provider>
  );
};

export default MenuStore;
