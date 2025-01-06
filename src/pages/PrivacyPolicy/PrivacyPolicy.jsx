import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
    return (
        <>
            <Helmet> <title>Cine Sphere - Privacy Policy</title> </Helmet>
            <section className="container mx-auto px-5 pb-52">
                <h2 className="text-secondaryColor text-center mb-16 text-5xl"><span className="text-textColor dark:text-white">Privacy</span> <span className="underline underline-offset-8">Policy</span></h2>

                <div className="space-y-5">
                    <div>
                        <h4 className="text-2xl font-semibold">1. Information We Collect</h4>
                        <p>
                            1. Personal Information: When you sign up for CineSphere, we collect personal details such as your name, email address, billing information, and payment details.
                        </p>
                        <p>
                            2. Usage Data: We collect data on how you use our platform, including your browsing history, preferences, and interactions with movies and features.
                        </p>
                        <p>
                            3. Device Information: Information about the devices you use to access CineSphere, including IP address, browser type, and operating system, is collected automatically.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold">2. How We Use Your Information</h4>
                        <p>
                            1. To provide, maintain, and improve our services.
                        </p>
                        <p>
                            2. To personalize your experience on CineSphere by recommending content based on your preferences.
                        </p>
                        <p>
                            3. To process transactions and send you confirmations, updates, and technical notices.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold">3. Sharing Your Information</h4>
                        <p>
                            1. Third-Party Service Providers: We share your information with third-party vendors who help us operate, manage, and improve our platform.
                        </p>
                        <p>
                            2. Legal Compliance: We may disclose your information if required by law or if we believe it is necessary to protect our legal rights, enforce our terms, or comply with legal processes.
                        </p>
                        <p>
                            3. Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold">4. Cookies and Tracking Technologies</h4>
                        <p>
                            1. We use cookies and similar tracking technologies to enhance your experience on CineSphere. These technologies help us understand your usage patterns and deliver personalized content.
                        </p>
                        <p>
                            2. You can manage your cookie preferences through your browser settings.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold">5. Your Rights and Choices</h4>
                        <p>
                            1. Access and Correction: You have the right to access the personal information we hold about you and request corrections.
                        </p>
                        <p>
                            2. Data Portability: You can request a copy of your personal data in a structured, commonly used format.
                        </p>
                        <p>
                            3. Opt-Out: You can opt-out of receiving promotional communications by following the unsubscribe link in our emails or by contacting us directly.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;