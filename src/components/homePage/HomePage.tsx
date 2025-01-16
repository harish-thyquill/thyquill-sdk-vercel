import { useEffect, useState } from 'react';
import React from 'react';
import { getAllCategories } from '../../scripts/api/landing';
import { Toaster } from 'react-hot-toast';
import '../index.scss';
import LandingPage from '../LandingPage/LandingPage';
import PostPage from '../postPage/PostPage';


const HomePage = ({ domain }: { domain: string }) => {
    const [post, setPost] = useState<any>('');

    const mainPageFetch = async () => {
        try {
            const res = await getAllCategories(domain);
            setPost(res.post)
        } catch (error: any) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        mainPageFetch()
    }, [])

    if (post) {
        return (
            <>
                <PostPage post={post} />
                <Toaster
                    position="bottom-left"
                    toastOptions={{
                        style: {
                            background: 'var(--colors-bg-tertiary)',
                            color: 'var(--colors-text-black)',
                        }
                    }} />
            </>
        );
    }
    else {
        return <LandingPage domain={domain} />
    }
}

export default HomePage;