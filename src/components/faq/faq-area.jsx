import React from 'react';
import SingleFaq from './single-faq';

function NavTab({ active = false, id, title }) {
    return (
        <li className="nav-item" role="presentation">
            <button
                className={`nav-link ${active ? 'active' : ''}`}
                data-bs-toggle="tab"
                data-bs-target={`#${id}`}
                type="button"
                role="tab"
                aria-selected={active ? 'true' : 'false'}
            >
                {title}
            </button>
        </li>
    );
}

const FaqArea = () => {
    return (
        <section className="edu-section-gap faq-page-area">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4">
                        <div className="faq-page-nav">
                            <h3 className="title">Questions By This Category</h3>
                            <p>
                                Find answers to the most common questions about our courses,
                                platform usage, payments, and policies.
                            </p>

                            <ul className="nav nav-tabs" role="tablist">
                                <NavTab active={true} id="gn-ques" title="General Questions" />
                                <NavTab id="rg-ques" title="Regular Questions" />
                                <NavTab id="ad-ques" title="Advanced Questions" />
                                <NavTab id="com-policy" title="Company Policies" />
                                <NavTab id="pay-option" title="Payment Options" />
                                <NavTab id="terms-condition" title="Terms & Conditions" />
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="tab-content faq-page-tab-content" id="faq-accordion">

                            {/* General Questions */}
                            <div className="tab-pane fade show active" id="gn-ques">
                                <div className="accordion">
                                    <SingleFaq show id="1" title="How can I contact support?"
                                        desc="You can reach our support team via email or through the contact form available on our website. We usually respond within 24 hours." />

                                    <SingleFaq id="2" title="How do I choose the right course?"
                                        desc="You can explore course descriptions, difficulty levels, and reviews to select the course that best matches your goals and experience." />

                                    <SingleFaq id="3" title="Can beginners join these courses?"
                                        desc="Yes, most of our courses are beginner-friendly and include step-by-step guidance to help you get started." />

                                    <SingleFaq id="4" title="Do you provide certificates?"
                                        desc="Yes, a certificate of completion is provided after successfully finishing the course." />

                                    <SingleFaq id="5" title="Are the courses self-paced?"
                                        desc="Yes, you can learn at your own pace and access the content anytime." />

                                    <SingleFaq id="6" title="What are the system requirements?"
                                        desc="A basic computer with internet access and a modern browser is sufficient for most courses." />

                                    <SingleFaq id="7" title="Do you offer career guidance?"
                                        desc="Yes, we provide guidance on building portfolios, preparing for interviews, and improving job readiness." />
                                </div>
                            </div>

                            {/* Regular Questions */}
                            <div className="tab-pane fade" id="rg-ques">
                                <div className="accordion">
                                    <SingleFaq show id="8" title="Is there a free trial available?"
                                        desc="Yes, some courses offer a limited free preview so you can evaluate the content before enrolling." />

                                    <SingleFaq id="9" title="Can I switch courses after enrolling?"
                                        desc="Course switching depends on the plan. Please contact support for assistance." />

                                    <SingleFaq id="10" title="Do courses include projects?"
                                        desc="Yes, most courses include real-world projects to help you apply what you learn." />

                                    <SingleFaq id="11" title="How long do I get access?"
                                        desc="You will have lifetime access to the course materials once enrolled." />

                                    <SingleFaq id="12" title="Are updates included?"
                                        desc="Yes, course updates are provided regularly at no extra cost." />

                                    <SingleFaq id="13" title="Can I learn on mobile?"
                                        desc="Yes, the platform is fully responsive and works on mobile devices." />
                                </div>
                            </div>

                            {/* Advanced Questions */}
                            <div className="tab-pane fade" id="ad-ques">
                                <div className="accordion">
                                    <SingleFaq show id="14" title="Do you cover advanced topics?"
                                        desc="Yes, we offer advanced modules covering real-world applications and best practices." />

                                    <SingleFaq id="15" title="Will I work on real projects?"
                                        desc="Yes, advanced courses include industry-level projects for hands-on experience." />

                                    <SingleFaq id="16" title="Do you provide mentorship?"
                                        desc="Some premium courses include mentorship and doubt-clearing sessions." />

                                    <SingleFaq id="17" title="Is there job support?"
                                        desc="Yes, we provide interview preparation and resume-building guidance." />
                                </div>
                            </div>

                            {/* Company Policies */}
                            <div className="tab-pane fade" id="com-policy">
                                <div className="accordion">
                                    <SingleFaq show id="18" title="What is your refund policy?"
                                        desc="We offer a limited refund period if you're not satisfied with the course." />

                                    <SingleFaq id="19" title="Is my data secure?"
                                        desc="Yes, we follow industry-standard security practices to protect user data." />

                                    <SingleFaq id="20" title="Do you share user information?"
                                        desc="No, we do not share your personal information with third parties." />

                                    <SingleFaq id="21" title="Are there any hidden charges?"
                                        desc="No, all pricing details are clearly mentioned before purchase." />
                                </div>
                            </div>

                            {/* Payment Options */}
                            <div className="tab-pane fade" id="pay-option">
                                <div className="accordion">
                                    <SingleFaq show id="22" title="What payment methods are accepted?"
                                        desc="We accept credit/debit cards, UPI, and other popular payment gateways." />

                                    <SingleFaq id="23" title="Is EMI available?"
                                        desc="Yes, EMI options are available for selected courses." />

                                    <SingleFaq id="24" title="Is online payment secure?"
                                        desc="Yes, all transactions are encrypted and processed securely." />

                                    <SingleFaq id="25" title="Do you provide invoices?"
                                        desc="Yes, invoices are automatically generated after successful payment." />
                                </div>
                            </div>

                            {/* Terms & Conditions */}
                            <div className="tab-pane fade" id="terms-condition">
                                <div className="accordion">
                                    <SingleFaq show id="26" title="Can I share my account?"
                                        desc="No, account sharing is not allowed as per our terms of use." />

                                    <SingleFaq id="27" title="Can I download course content?"
                                        desc="Content is accessible online and may not be downloadable in all cases." />

                                    <SingleFaq id="28" title="What happens if I violate terms?"
                                        desc="Violation may lead to suspension or termination of your account." />

                                    <SingleFaq id="29" title="Can terms be updated?"
                                        desc="Yes, we may update terms occasionally. Continued use means acceptance of changes." />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FaqArea;