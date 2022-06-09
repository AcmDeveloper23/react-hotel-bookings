import React from "react";
import "./Bookmarks.scss";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import Listing from "../../components/Listing";
import EmptyMsg from "../../components/EmptyMsg";

const Bookmarks = () => {

    const bookmarkLists = useSelector((state) => state.bookmark.bookmarkLists);

    return (
        <Layout>
            {bookmarkLists.length >= 1 ? (
                <Listing title="Bookmarks" hotels={bookmarkLists} />
            ) : (
                <div className="bookmark__msg">
                    <EmptyMsg
                        text="Your Bookmark is Currently Empty!"
                        checkType="Bookmark"
                        url="hotels"
                        btnText="Browse Hotels"
                    />
                </div>
            )}
        </Layout>
    )
}

export default Bookmarks;