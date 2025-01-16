import { NextRequest, NextResponse } from 'next/server';
import { getPostByUrl, verifyDomain } from './scripts/api/landing';

export async function middleware(request: NextRequest) {
    const host = request.headers.get('host');
    console.log(host, '----host');

    const pathname = request.nextUrl.pathname;

    if (pathname === '/404') {
        return NextResponse.next();
    }

    if (host) {
        const orgCheck = async () => {
            try {
                if (host) {
                    const res = await verifyDomain(host);
                    return res;
                }
                return !!host;
            } catch (error: any) {
                console.error(error.message);
                return false;
            }
        };

        if (host && (await orgCheck())) {
            const org = await orgCheck();
            if (org) {
                if (pathname.split('/')[1]) {
                    if (pathname.split('/')[1] !== '404') {
                        const res = await getPostByUrl(pathname.split('/')[1]);
                        if (!res) {
                            // Redirect to `/404` if the post doesn't exist
                            return NextResponse.redirect(new URL('/404', request.nextUrl.origin));
                        } else {
                            const postDataString = JSON.stringify(res);
                            const base64Event = Buffer.from(postDataString).toString('base64');
                            const headers = new Headers(request.headers);
                            headers.set('x-post', base64Event);
                            headers.set('x-title', org.name);
                            if (org?.company_url) {
                                headers.set(
                                    'x-favicon',
                                    `https://www.google.com/s2/favicons?domain_url=${org.company_url}`
                                );
                            }
                            return NextResponse.next({
                                request: {
                                    headers,
                                },
                            });
                        }
                    }
                } else {
                    const headers = new Headers(request.headers);
                    headers.set('x-title', org.name);
                    if (org?.company_url) {
                        headers.set(
                            'x-favicon',
                            `https://www.google.com/s2/favicons?domain_url=${org.company_url}`
                        );
                    }
                    return NextResponse.next({
                        request: {
                            headers,
                        },
                    });
                }
            }
        } else {
            console.log('Domain verification failed');
            return NextResponse.redirect(new URL('/404', request.nextUrl.origin));
        }
    }
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico)$).*)',
    ],
};
