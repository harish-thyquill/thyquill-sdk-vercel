import { addPostCountByUrl, getPostByUrl } from "@/scripts/api/landing";
import PirschAnalytics from "./pirschAnalytics";
import PostPage from "@/components/postPage/PostPage";
import { Metadata } from "next";
import { headers } from "next/headers";
// import logger from "@/lib/logger";


interface Params {
    url: string;
}

export const generateMetadata = async () => {
    // logger.info('Post Page');
    const title = (await headers())?.get('x-title');
    const favicon = (await headers())?.get('x-favicon');
    const dataJson = (await headers())?.get('x-post') as string;
    const post = dataJson ? JSON.parse(atob(dataJson)) : '';
    return {
        ...(post?.org_billing?.billing_details?.branding && {
            title: title,
            icons: {
                icon: favicon
            },
        }),
        keywords: [post?.meta_data?.title || '', post?.org?.name || '', post?.meta_data?.description || ''],
        ...(post && {
            openGraph: {
                title: post?.meta_data?.title || post?.title || '',
                description: post?.meta_data?.description || post?.description || '',
                siteName: title || "Thy Quill",
                type: 'article',
                url: `${process.env.NEXT_PUBLIC_SERVER_PROTOCOL}://${post.org.domain}.${process.env.NEXT_PUBLIC_HOST}/${post.post_url || post._id}`,
                images: [
                    {
                        url: post?.meta_data?.image || post?.feature_image || '',
                        alt: post?.meta_data?.title || post?.title || ''
                    }
                ]
            }
        }),
        ...(post && {
            twitter: {
                card: 'summary_large_image',
                title: post?.x_data?.title || post?.title || '',
                description: post?.x_data?.description || post?.description || '',
                siteName: title || "Thy Quill",
                type: 'article',
                url: `${process.env.NEXT_PUBLIC_SERVER_PROTOCOL}://${post.org.domain}.${process.env.NEXT_PUBLIC_HOST}/${post.post_url || post._id}`,
                images: [
                    {
                        url: post?.x_data?.image || post?.feature_image || '',
                        alt: post?.x_data?.title || post?.title || ''
                    }
                ],
                // creator: '@yourtwitterhandle',
            }
        })
    } as Metadata
};


const PostPreview = async ({ params }: { params: Promise<{ url: string }> }) => {
    const { url } = await params;
    const post = await getPostByUrl(url);
    await addPostCountByUrl(url);
    return (
        <>
            <PirschAnalytics post={post} />
            <PostPage post={post} />
        </>
    );
}

export default PostPreview;