import Favoritos from "../src/Pages/Favoritos";
import Inicio from "./Pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "../src/Pages/Player";
import NaoEncontrada from "Pages/NaoEncontrada";
import PaginaBase from "Pages/PaginaBase";

export default function AppRoutes() {
    return(
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PaginaBase />}>
                            <Route index element={<Inicio />}></Route>
                            <Route path='favoritos' element={<Favoritos />}></Route>
                            <Route path=':id' element={<Player />}></Route>
                            <Route path='*' element={<NaoEncontrada />}></Route>
                        </Route>
                    </Routes>
        </BrowserRouter>
    )
}