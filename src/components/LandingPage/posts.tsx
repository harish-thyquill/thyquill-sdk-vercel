/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { NoImage, Search } from "../../assets/QuillIcons";
import moment from "moment";
import { Grid } from "../formComponents/FormComponents";
import _ from 'lodash';

export const Posts = ({ posts, org, orgBilling, openSearch }: { posts: any, org: any, orgBilling?: any, openSearch: () => void }) => {
    if (!(posts.length > 0 && org)) return null;

    const firstPost: any = posts[0];
    const url = `${process.env.SERVER_HOST_PROTOCOL}://${org.domain}.${process.env.SERVER_HOST}/`
    return (
        <div className="posts_container">
            {/* First post */}
            <div className="my_2xl">
                <a href={'/' + firstPost.post_url} target="_blank" className="posts_content">
                    <Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="posts_content_img" style={{ height: '300px' }}>
                                {firstPost?.featured_image ? <img src={firstPost.featured_image} width={150} height={100} alt="featured_image" /> : <NoImage className="no_image" />}
                            </div>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="post_content_body">
                                <p className="post_content_title">{firstPost.title}</p>
                                <pre className="post_content_description">{firstPost.description}</pre>
                                <div className="post_content_footer">
                                    <div className="post_content_user_details">
                                        <div className="details">
                                            <p className="post_content_user_name">{firstPost.publish_date ? moment.unix(firstPost.publish_date).format('MMM DD, YYYY') : ''}</p>
                                            {/* <span>-</span>
                                            {
                                                firstPost?.authors?.length > 0 && firstPost.authors.map((author: any, key: number) => {
                                                    return (
                                                        <div className="authors_image">
                                                            {author?.image ?
                                                                <img title={author?.name} {...(author?.image && { src: author.image })} style={{ width: 20, height: 20 }} /> :
                                                                <p title={author?.name} className="author_image_name">{!author.image && author?.name?.[0]}</p>
                                                            }
                                                        </div>
                                                    )
                                                })
                                            } */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </a>
            </div>
            {/* Most popular posts  */}
            <hr className="divider" />
            <div className="my_2xl">
                {/* <a href="#" className="view_all_btn">VIEW ALL</a> */}
                <p className="row_title">Most Popular</p>
                <Grid>
                    {_.take(posts, 4).map((post: any, index: number) => {
                        return (
                            <Grid item key={index} xl={3} lg={4} md={4} sm={6} xs={12}>
                                <a href={'/' + post.post_url} target="_blank" className="posts_content">
                                    <Grid>
                                        <Grid item xl={8} lg={8} md={6} sm={6} xs={12}>
                                            <div className="post_content_body">
                                                <p className="post_content_title small">{post.title}</p>
                                                {/* <pre className="post_content_description">{post.description}</pre> */}
                                                <div className="post_content_footer">
                                                    <div className="post_content_user_details">
                                                        <div className="details">
                                                            <p className="post_content_user_name">{post.publish_date ? moment.unix(post.publish_date).format('MMM DD, YYYY') : ''}</p>
                                                            {/* <span>-</span>
                                                            {
                                                                post?.authors?.length > 0 && post.authors.map((author: any, key: number) => {
                                                                    return (
                                                                        <div className="authors_image">
                                                                            {author?.image ?
                                                                                <img title={author?.name} {...(author?.image && { src: author.image })} style={{ width: 20, height: 20 }} /> :
                                                                                <p title={author?.name} className="author_image_name">{!author.image && author?.name?.[0]}</p>
                                                                            }
                                                                        </div>
                                                                    )
                                                                })
                                                            } */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                                            <div className="posts_content_img" style={{ height: '80px' }}>
                                                {post?.featured_image ? <img src={post.featured_image} width={150} height={100} alt="featured_image" /> : <NoImage className="no_image" />}
                                            </div>
                                        </Grid>
                                    </Grid>
                                </a>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
            {/* Top or latest posts */}
            <hr className="divider" />
            <div className="my_2xl">
                <Grid>
                    <Grid item xs={12}>
                        <Search onClick={openSearch} className="search_icon" />
                        <p className="row_title">All Posts</p>
                        {/* <FormSelectButtons value={'Latest'} options={['Latest', 'Top', 'Discussions'].map((val) => {
                                return {
                                    name: val,
                                    value: val
                                }
                            })} /> */}
                        <Grid>
                            {posts.map((post: any, index: number) => {
                                return (
                                    <Grid item key={index} xl={4} lg={4} md={4} sm={6} xs={12}>
                                        <a href={'/' + post.post_url} target="_blank" className="posts_content">
                                            <div className="posts_content_img" style={{ height: '208px' }}>
                                                {post?.featured_image ? <img src={post.featured_image} width={150} height={100} alt="featured_image" /> : <NoImage className="no_image" />}
                                            </div>
                                            <div className="post_content_body">
                                                <p className="post_content_title medium">{post.title}</p>
                                                {/* <pre className="post_content_description">{post.description}</pre> */}
                                                <div className="post_content_footer">
                                                    <div className="post_content_user_details">
                                                        <div className="details">
                                                            <p className="post_content_user_name">{post.publish_date ? moment.unix(post.publish_date).format('MMM DD, YYYY') : ''}</p>
                                                            {/* <span>-</span>
                                                            {
                                                                post?.authors?.length > 0 && post.authors.map((author: any, key: number) => {
                                                                    return (
                                                                        <div className="authors_image" key={key}>
                                                                            {author?.image ?
                                                                                <img title={author?.name} {...(author?.image && { src: author.image })} style={{ width: 20, height: 20 }} /> :
                                                                                <p title={author?.name} className="author_image_name">{!author.image && author?.name?.[0]}</p>
                                                                            }
                                                                        </div>
                                                                    )
                                                                })
                                                            } */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
                {/* <FormButton className="see_all_btn" endIcon={<Chevron_right />}>See all</FormButton> */}
            </div>
            <div className="my_2xl">
                <hr className="divider" />
                {orgBilling?.billing_details?.branding
                    ? <p className="my_2xl brand_name">{org?.name ? org.name : 'Thy Quill'}</p>
                    : <p className="my_2xl brand_name">Thy Quill</p>
                }
                {/* <FormButton className="primary_btn my_2xl">Subscribe</FormButton> */}
            </div>
        </div>
    )
}