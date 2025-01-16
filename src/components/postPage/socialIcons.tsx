'use client';
import React from 'react';
import { convertJSONToGETParams, copyText } from "../../scripts/helpers";
import { FacebookIcon, Link_white, LinkedInIcon, XIcon } from '../../assets/QuillIcons';

const SocialIcons = ({ post }: { post?: any }) => {
    const xShare = () => {
        const query = convertJSONToGETParams({
            url: `${process.env.NEXT_PUBLIC_SERVER_PROTOCOL}://${post.org.domain}.${process.env.NEXT_PUBLIC_HOST}/${post.post_url || post._id}`,
            text: post?.x_data?.description ? encodeURIComponent(post?.x_data.description) : ''
        })
        window.open(
            `https://x.com/intent/post?${query}`,
            'twitter-share-dialog',
            'width=800,height=600'
        );
    };

    const linkedInShare = () => {
        const query = convertJSONToGETParams({
            mini: true,
            url: `${process.env.NEXT_PUBLIC_SERVER_PROTOCOL}://${post.org.domain}.${process.env.NEXT_PUBLIC_HOST}/${post.post_url || post._id}`,
            title: post?.meta_data?.title,
            summary: post?.meta_data?.description ? encodeURIComponent(post.meta_data.description) : ''
        })
        window.open(
            `https://www.linkedin.com/shareArticle?${query}`,
            'linkedin-share-dialog',
            'width=800,height=600'
        );
    };

    const faceBookShare = () => {
        const query = convertJSONToGETParams({
            u: `${process.env.NEXT_PUBLIC_SERVER_PROTOCOL}://${post.org.domain}.${process.env.NEXT_PUBLIC_HOST}/${post.post_url || post._id}`,
        })
        window.open(
            `https://www.facebook.com/sharer/sharer.php?${query}`,
            'facebook-share-dialog',
            'width=800,height=600'
        );
    };

    const copyLink = () => {
        return copyText(`${process.env.NEXT_PUBLIC_SERVER_PROTOCOL}://${post.org.domain}.${process.env.NEXT_PUBLIC_HOST}/${post.post_url || post._id}`)
    }

    return (
        <>
            {post?.post_url && (post?.social_share === 1) && <div className="post_preview_share_icons">
                {post?.post_url && <div className="link_icon"><Link_white width={20} height={20} onClick={copyLink} /></div>}
                {post?.x_data && <div className="x_share_icon"><XIcon width={20} height={20} onClick={xShare} color='#FFFFFF' /></div>}
                {post?.meta_data && <LinkedInIcon width={40} height={40} onClick={linkedInShare} />}
                {post?.meta_data && <FacebookIcon width={40} height={40} onClick={faceBookShare} />}
            </div>}
        </>
    )

}

export default SocialIcons;