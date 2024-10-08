import Router from "preact-router";

import Home from "../pages/home/index.jsx";
import PostIndex from "../pages/posts/index.jsx";
import PostCreate from "../pages/posts/create.jsx";
import PostEdit from "../pages/posts/edit.jsx";
import Intro from "../pages/intro/index.jsx";

function Routes() {
    return (
        <Router>
            <Home path="/" />
            <PostIndex path="/posts" />
            <PostCreate path="/posts/create" />
            <PostEdit path="/posts/edit/:id" />
            <Intro path="/intro" />
        </Router>
    );
}

export default Routes;