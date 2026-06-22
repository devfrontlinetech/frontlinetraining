import React from 'react';
import SidebarOne from '../common/sidebar/blog-sidebar-1';

const PolicyArea = () => {
    return (
        <section className="privacy-policy-area">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-8">
                     <div className="privacy-policy">

                            <div className="text-block">
                                <h3 className="title">Definitions of Privacy Policy</h3>
                                <p>
                                    This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services. By accessing our platform, you agree to the terms outlined in this policy.
                                </p>
                            </div>

                            <div className="text-block">
                                <h4 className="title">General Information</h4>
                                <p>
                                    We collect basic information such as your name, email address, and usage data to improve our services and provide a better user experience.
                                </p>
                                <p>
                                    Your information is used strictly for communication, service improvement, and platform functionality. We do not misuse or sell your personal data.
                                </p>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Availability of Website</h4>
                                <p>
                                    We strive to ensure that our website is available at all times. However, we may occasionally experience downtime due to maintenance or technical issues.
                                </p>
                                <ul>
                                    <li>IP address and device-related information</li>
                                    <li>Browser type and internet service provider</li>
                                    <li>Date, time, and pages visited</li>
                                    <li>User interaction and navigation behavior</li>
                                </ul>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Privacy Policies</h4>
                                <p>
                                    We are committed to protecting your privacy and ensuring that your personal data is handled securely. Appropriate security measures are in place to safeguard your information.
                                </p>
                                <p>
                                    Your data will only be used for legitimate purposes related to our services and will not be shared without your consent, except where required by law.
                                </p>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Third Party Policies</h4>
                                <p>
                                    Our website may include links or integrations with third-party services. These platforms have their own privacy policies, and we are not responsible for their practices.
                                </p>
                                <ul>
                                    <li>All brand names, logos, and content belong to their respective owners</li>
                                    <li>Users do not gain ownership rights over any platform content</li>
                                    <li>Content is protected under applicable copyright and intellectual property laws</li>
                                </ul>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Online Privacy</h4>
                                <p>
                                    This policy applies only to online activities and is valid for users visiting our website. It does not apply to information collected offline or through other channels.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4">
                        <SidebarOne />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PolicyArea;