import React from 'react';
import SidebarOne from '../common/sidebar/blog-sidebar-1';

const ConditionArea = () => {
  return (
        <section className="privacy-policy-area terms-condition-area">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-8">
                    <div className="privacy-policy terms-condition">
                        <div className="text-block">
                            <h3 className="title">Definitions of Basic Terms, Rights and Restrictions:</h3>
                            <p>
                                These Terms and Conditions outline the rules and guidelines for using our platform. By accessing or using our services, you agree to comply with these terms.
                            </p>
                            <p>
                                Please read them carefully to understand your rights, responsibilities, and limitations while using our website and learning resources.
                            </p>
                        </div>

                        <div className="text-block">
                            <h4 className="title">Basic Terms</h4>
                            <p>
                                Our platform provides access to educational content, courses, and resources intended for personal learning and skill development. Users are expected to use the platform responsibly and in accordance with all applicable laws and regulations.
                            </p>
                        </div>

                        <div className="text-block">
                            <h4 className="title">Rights & Restrictions</h4>
                            <p>
                                By using our platform, you are granted limited access to the content under the following conditions:
                            </p>
                            <ul>
                                <li>Members must meet the minimum age requirement as per applicable laws.</li>
                                <li>Access is granted for personal use only and cannot be transferred or shared with others.</li>
                                <li>Course access is provided for a limited or defined period based on your purchase plan.</li>
                                <li>All video content is streamed online and may not be available for download.</li>
                                <li>The platform reserves the right to update, modify, or discontinue content at any time.</li>
                            </ul>
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

export default ConditionArea;