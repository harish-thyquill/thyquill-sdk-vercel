'use client';
import './custom404.scss';
import { useRouter } from "next/navigation";
import { FormButton, Grid } from '../formComponents/FormComponents';
import { Chevron_left } from '@/assets/QuillIcons';

const Custom404Page = () => {
    const navigate = useRouter();
    return (
        <div className="custom_404_container">
            <div className="custom_404">
                <p className="custom_404_number">404 error</p>
                <p className="custom_404_title">We can&apos;t find that page</p>
                <p className="custom_404_description">Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
                <div className='custom_404_actions'>
                    <Grid >
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                            <FormButton startIcon={<Chevron_left />} onClick={() => navigate.back()} className="custom_404_back_btn">Go back</FormButton>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                            <FormButton className="custom_404_home_btn" onClick={() => navigate.push('/')}>Take me home</FormButton>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Custom404Page;