'use client';
import { useEffect } from "react";
import { Pirsch } from "pirsch-sdk/web";

const PirschAnalytics = ({ post }: { post: any }) => {
    useEffect(() => {
        const pirschRequest = async () => {
            const client = new Pirsch({
                identificationCode: process.env.PIRSCH_ID_TOKEN || '',
            });
            try {
                await client.hit({
                    tags: { [`org_id-${post.org_id}`]: post._id }
                });
            } catch (error) {
                console.log(error);
            }
        };
        if ((process.env.NODE_ENV !== 'development') && post.org_id) {
            pirschRequest();
        }
    }, [post])
    return null
}

export default PirschAnalytics