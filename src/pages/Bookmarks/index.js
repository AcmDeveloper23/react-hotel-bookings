import React from "react";
import "./Bookmarks.scss";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import Listing from "../../components/Listing";

const Bookmarks = () => {

    const bookmarkLists = useSelector((state) => state.bookmark.bookmarkLists);

    return (
        <Layout>
            {bookmarkLists.length >= 1 && <Listing title="Bookmarks" hotels={bookmarkLists} />}
        </Layout>
    )
}

export default Bookmarks;