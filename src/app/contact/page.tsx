import { DynamicBanner } from '@/components/CommonParts/DynamicBanner';
import AppointmentForm from '@/components/contact/AppointmentForm';
import ContactSection from '@/components/contact/ContactSection';
import React from 'react';

const contact = () => {
    return (
        <div>
            <DynamicBanner
                title="Get in touch with us"
                highlightText='Contact'
                subText='Home'
            />
            <ContactSection />
            <AppointmentForm />
            
        </div>
    );
};

export default contact;