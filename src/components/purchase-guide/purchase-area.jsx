import React from 'react';
import SidebarOne from '../common/sidebar/blog-sidebar-1';

const PurchaseArea = () => {
    return (
        <section className="privacy-policy-area purchase-guide-area dfdfd">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-8">
                        <div className="privacy-policy purchase-guide">
                            <div className="text-block">
                                <h3 className="title">Purchase Currency</h3>
                                <p>Some online platforms or businesses may use the term purchase currency to describe the virtual currency or credits that users can buy and use within a particular ecosystem, like in online games or digital platforms. </p>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Account Registering</h4>
                                <p>The registration process usually requires the user to provide personal details and create login credentials, allowing the platform to store and manage their data for future interactions.</p>
                                <div className="row">
                                    <div className="col-lg-5">
                                        <ul>
                                            <li>Name (required)</li>
                                            <li>Age (required)</li>
                                            <li>Date of birth (required)</li>
                                            <li>Passport/ ID no. (required)</li>
                                            <li>Current career (required)</li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6">
                                        <ul>
                                            <li>Mobile phone numbers (required)</li>
                                            <li>Email address (required)</li>
                                            <li>Hobbies & interests (optional)</li>
                                            <li>Social profiles (optional)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="text-block">
                                <h4 className="title">How to Purchase a Course?</h4>
                                <p>Click on any course title to view more details, including course content, pricing, and instructor information.</p>
                                <p>Once you’ve found a course you’re interested in, click on the "Enroll Now" button on the course page.</p>
                                <p>You will be taken to a checkout page where you can review your selection.</p>
                                <p>If you don’t already have an account, you’ll be prompted to Create an Account by entering your email and setting a password</p>
                                <p>After logging in, you’ll be taken to the Shopping Cart where you can review your course selection.</p>
                                <p>Click "Proceed to Checkout" to enter your payment information.</p>
                                <p>You’ll be asked to provide your payment details (e.g., credit card or PayPal).</p>
                                <p>Fill in the required information on the payment page. We accept a variety of payment methods (credit/debit cards, PayPal, etc.).</p>
                                <p>After entering your payment info, click "Confirm Payment".</p>
                                <p>Once your payment is processed, you’ll see a confirmation page that your order has been successfully completed.</p>
                                <p>Simply go to your Account Dashboard, where you’ll find your enrolled courses.</p>
                                <p>Click on the course title to start learning!</p>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Accepted Credit Cards</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <ul>
                                    <li>Visa</li>
                                    <li>Mastercards</li>
                                    <li>American Express</li>
                                    <li>Discover</li>
                                </ul>
                            </div>

                            <div className="text-block">
                                <h4 className="title">Why to Buy Our Course?</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <ul>
                                    <li>Updated content on a regular basis</li>
                                    <li>Secure & hassle-free payment</li>
                                    <li>1-click checkout</li>
                                    <li>Easy access & smart user dashboard</li>
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

export default PurchaseArea;
