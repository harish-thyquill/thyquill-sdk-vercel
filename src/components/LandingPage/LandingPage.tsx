/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useRef } from 'react';
import { getAllCategories, getPostsByCategoryById } from '../../scripts/api/landing';
import { useEffect, useState } from 'react';
import { Tabs } from '../tabs-button/TabsButton';
import { Posts } from './posts';
import { Search } from '../../assets/QuillIcons';
import { SearchModal } from '../searchPopup/SearchPopup';
import './posts.scss';
import '../index.scss';


const LandingPage = ({ domain }: { domain: string }) => {
    const landingRef = useRef<any>(null);
    const [open, setOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [catId, setCatId] = useState('');
    const [posts, setPosts] = useState([]);
    const [org, setOrg] = useState<any>('');
    const [orgBilling, setOrgBilling] = useState<any>('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchCategories = async () => {
        try {
            if (domain) {
                console.log(domain, '----domain');
                const res = await getAllCategories(domain);
                if (res && res.categories.length > 0) {
                    setCatId(res.categories[0]._id)
                    setCategories(res.categories)
                    setOrg(res.org)
                    setOrgBilling(res?.orgBilling || '')
                }
            }
        } catch (error: any) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        fetchCategories()
    }, [domain])

    const landingFetch = async () => {
        try {
            if (catId) {
                const res = await getPostsByCategoryById(catId);
                if (res && res[0]?.posts.length > 0) {
                    setPosts(res[0]?.posts)
                }
                else {
                    setPosts([])
                }
            }
        } catch (error: any) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        landingFetch()
    }, [catId])

    if (categories.length > 0) {
        return (
            <div className="landing_container" ref={landingRef}>
                <div className="landing_header">
                    {orgBilling?.billing_details?.branding ?
                        <a href={org?.company_url || 'https://www.thyquill.com'} target='_blank' className='landing_header_logo_box'>
                            {org?.additional_info?.image ? <img src={org.additional_info.image || 'https://app.thyquill.com/app_logo.svg'} alt='logo' width="32" height="32" /> : <img src="https://app.thyquill.com/app_logo.svg" alt='logo' width="32" height="32" />}
                            <p className='logo_name'>{org?.name || 'Thy Quill'}</p>
                        </a>
                        :
                        <a href="https://www.thyquill.com" target='_blank' className='landing_header_logo_box'>
                            <img src="https://app.thyquill.com/app_logo.svg" alt='logo' width="32" height="32" />
                            <p className='logo_name'>Thy Quill</p>
                        </a>
                    }
                    <div className="landing_header_actions">
                        <Search className="search_icon" onClick={handleOpen} />
                        {/* <FormButton className="primary_btn">Subscribe</FormButton> */}
                    </div>
                </div>
                <hr className="divider" />
                <Tabs
                    brandColor={orgBilling?.billing_details?.branding ? org?.brand_color : ''}
                    landingRef={landingRef}
                    value={catId}
                    tabs={categories.map((category: any) => {
                        return {
                            label: category.name,
                            value: category._id
                        }
                    })}
                    onClick={(value) => setCatId(value)}
                />
                <Posts posts={posts} org={org} orgBilling={orgBilling} openSearch={handleOpen} />
                {open && <SearchModal domain={domain} brandColor={org?.brand_color || ''} open={open} onClose={handleClose} org={org} />}
            </div>
        )
    }
    else {
        return <></>
    }
}

export default LandingPage;