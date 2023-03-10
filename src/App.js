import { Fragment, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import axios from "axios"
import "./App.css";

import LandingPage from "./components/pages/landing";
import Tabs from "./components/tabs";
import Sidebar from "./components/sidebar";
import Pagination from "./components/pagination";

const App = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const [localLoading, setLocalLoading] = useState(false)
  const [spaceShips, setSpaceShips] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [singleItemData, setSingleItemData] = useState(null)
  const [pilotData, setPilotData] = useState(false)

  const [page, setPage] = useState({
    number: 1,
    type: ""
  })

  const retrieveData = async () => {
    setLocalLoading(true)
    try { 
      const spaceShips = await axios.get("https://swapi.dev/api/starships")
      const planets = await axios.get("https://swapi.dev/api/planets")
      const films = await axios.get("https://swapi.dev/api/films")
      console.log(films)
      setSpaceShips(spaceShips.data)
      setPlanets(planets.data)
      setFilms(films.data)

      setLocalLoading(false)
    } catch (e) {
      console.log(e)
      setLocalLoading(false)
    }
  }

  useEffect(() => {
    if (page.number === 1) {
      retrieveData()
    } else {
      retrieveNextOrPrevious()
    }
  }, [page])

  const retrieveNextOrPrevious = async () => {
    setLocalLoading(true)
    let response = null
    try {
      if (page.type === "next") {
        switch (tabIndex) {
          case 1:
            response = await axios.get(spaceShips.next);
            break;
          case 2:
            response = await axios.get(planets.next)
            break
          case 3:
            response = await axios.get(films.next)
            break
          default: response = null
        }
      } else {
        switch (tabIndex) {
          case 1:
            response = await axios.get(spaceShips.previous);
            break;
          case 2:
            response = await axios.get(planets.previous)
            break
          case 3:
            response = await axios.get(films.previous)
            break
          default: response = null
        }
      }
      setSpaceShips(response?.data)
      setPlanets(response?.data)
      setFilms(response?.data)

      setLocalLoading(false)
    } catch (e) {
      console.log(e)
      setLocalLoading(false)
    }
  }

  const tabData = tabIndex === 1 ? spaceShips : tabIndex === 2 ? planets : films

  return (
    <div className="main">
      <div className="overlay"></div>
        <Fragment>
          <Sidebar pilotData={pilotData} setPilotData={setPilotData} data={singleItemData} setSingleItemData={setSingleItemData} isOpen={isOpen} setIsOpen={setIsOpen} tabIndex={tabIndex} />
          <Tabs setPage={setPage} tabIndex={tabIndex} setTabIndex={setTabIndex} setIsOpen={setIsOpen} />
          <LandingPage localLoading={localLoading} setPilotData={setPilotData} data={tabData} tabIndex={tabIndex} setIsOpen={setIsOpen} setSingleItemData={setSingleItemData} />

          {tabData?.results?.length >= 50  && (
            <Pagination page={page} setPage={setPage} setIsOpen={setIsOpen} />
          )}
        </Fragment>
    </div>
  );
}

export default App;
