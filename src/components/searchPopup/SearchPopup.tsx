'use client';
import React from "react";
import { useEffect, useState } from "react";
import { FormInput, Grid } from "../formComponents/FormComponents";
import { NoImage, Search } from "../../assets/QuillIcons";
import { getAllPosts } from "../../scripts/api/landing";
import moment from "moment";
import "./searchPopup.scss";

export const SearchModal = ({ domain, open, onClose, org, brandColor }: { domain: string, open: boolean, onClose: () => void, org: any, brandColor: string }) => {
    // if (open) {
    // document.body.style.overflow = 'hidden'
    const [rows, setRows] = useState<any>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setSpinner(true);
                const posts = await getAllPosts(domain);
                setRows([...posts]);
                setSpinner(false)
            } catch (error: any) {
                console.error(error.message)
            }
        }
        fetchPost();
    }, [])

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (searchValue.length >= 3) {
                const posts = await getAllPosts(domain, searchValue);
                setRows([...posts]);
                setSpinner(false)
            }
            else if (searchValue.length === 0) {
                const posts = await getAllPosts(domain,);
                setRows([...posts]);
                setSpinner(false)
            }
        }, 500);
        return () => {
            clearTimeout(delayDebounceFn);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    const url = `${process.env.SERVER_HOST_PROTOCOL}://${org.domain}.${process.env.SERVER_HOST}/`

    return (
        <div className="modal_back_drop" onClick={onClose}>
            <div className="modal_container" onClick={(e) => e.stopPropagation()}>
                <FormInput
                    brandColor={brandColor}
                    loader={spinner}
                    startIcon={<Search />}
                    placeholder="Search Posts"
                    onChange={(event) => {
                        setSpinner(true);
                        setSearchValue(event.target.value)
                    }} />
                <div>
                    <p className="title">POSTS</p>
                </div>
                <div>
                    {rows.map((post: any, index: number) => {
                        return (
                            <a key={index} href={url + post.post_url} target="_blank" className="posts_content">
                                <Grid >
                                    <Grid item xs={2}>
                                        <div className="posts_content_img">
                                            {post?.featured_image ? <img src={post.featured_image} width={150} height={100} alt="featured_image" /> : <NoImage className="no_image" />}
                                        </div>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div className="post_content_body">
                                            <p className="post_content_title">{post.title}</p>
                                            <pre className="post_content_description">{post.description}</pre>
                                            <p className="post_content_date">{post.publish_date ? moment.unix(post.publish_date).format('MMM DD, YYYY') : ''}</p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
    // }
    // else {
    //     return null
    // }
}