import React from 'react';
import './postPage.scss';
import SocialIcons from './socialIcons';
import { FacebookIcon, Link_black, LinkedInIcon, XIcon } from '../../assets/QuillIcons';

const PostPage = ({ post }: { post: any }) => {
    return (
        <div id="post_preview">
            <div className="post_preview_header">
                {post?.org_billing?.billing_details?.branding ?
                    <a href={post?.org?.company_url || 'https://www.thyquill.com'} target='_blank' className='post_preview_logo_box'>
                        <img src={post?.org?.additional_info?.image || 'https://app.thyquill.com/app_logo.svg'} alt='logo' width="32" height="32" />
                        <p className='logo_name'>{post?.org?.name || `Thy Quill`}</p>
                    </a>
                    :
                    <a href="https://www.thyquill.com" target='_blank' className='post_preview_logo_box'>
                        <img src="https://app.thyquill.com/app_logo.svg" alt='logo' width="32" height="32" />
                        <p className='logo_name'>Thy Quill</p>
                    </a>
                }
            </div>
            <div className="post_preview_body">
                <p className="post_preview_title">{post.title}</p>
                <pre className="post_preview_description">{post.description}</pre>
                <SocialIcons post={post} />
                {post.featured_image && <img src={post.featured_image} alt={'Feature image'} className='featured_image' width={500} height={100} />}
                <div className='editor-shell'>
                    {post.body_html && <div dangerouslySetInnerHTML={{ __html: post.body_html }} />}
                </div>
                <div className='post_preview_footer'>
                    <hr />
                    <p className="authors_title">Authors</p>
                    <div className="authors_list">
                        {post?.authors.length > 0 && post.authors.map((author: any, key: number) => {
                            return (
                                <div className="author-details" key={key}>
                                    <div className="avatar">
                                        {author.image && <img src={author.image} alt={author?.name} />}
                                        {!author.image && <p className="avatar_name">{author?.name?.[0]}</p>}
                                    </div>
                                    <div className='author_user_details'>
                                        <p className="author_name">{author.name}</p>
                                        {(author?.title && author?.show_title === 1) && <p className='author_title'>{author.title}</p>}
                                        <div className="social_icons">
                                            {(author?.email && (author?.show_email === 1)) && <a href={`mailto:${author.email}`}><Link_black width={14} height={14} /></a>}
                                            {(author?.linked_in && (author?.social_links === 1)) && <a target='_blank' href={author.linked_in}><LinkedInIcon width={14} height={14} /></a>}
                                            {(author?.x_com && (author?.social_links === 1)) && <a target='_blank' href={author.x_com}><XIcon width={14} height={14} /></a>}
                                            {(author?.facebook && (author?.social_links === 1)) && <a target='_blank' href={author.facebook}><FacebookIcon width={14} height={14} /></a>}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostPage;