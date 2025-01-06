import { Helmet } from "react-helmet-async";

const Faq = () => {
    return (
        <>
            <Helmet> <title>Cine Sphere - FAQ's</title> </Helmet>
            <section className="container mx-auto px-5 pb-52">
                <h2 className="text-secondaryColor text-center mb-16 text-5xl"><span className="text-textColor dark:text-white">Frequently Asked</span> <span className="underline underline-offset-8">Questions</span></h2>

                <div className="space-y-5">
                    <div>
                        <h4 className="text-2xl font-semibold">1. What is CineSphere?</h4>
                        <p>CineSphere is a premium movie streaming platform offering a wide range of movies from various genres and eras. You can stream your favorite films anytime, anywhere, on multiple devices.</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold">2. How do I sign up for CineSphere?</h4>
                        <p>To sign up, click on the "Sign Up" button at the top right of the homepage. Fill in the required details, choose your subscription plan, and you’re ready to start streaming!</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold">3. What devices are compatible with CineSphere?</h4>
                        <p>CineSphere is compatible with most devices, including smartphones, tablets, laptops, desktop computers, and smart TVs. You can also download our app from the App Store or Google Play for a better mobile experience.</p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold">4. Can I download movies to watch offline?</h4>
                        <p>
                            Yes! CineSphere allows you to download select movies to your mobile device so you can enjoy them offline, perfect for traveling or when you’re away from a reliable internet connection.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold">5. How much does CineSphere cost?</h4>
                        <p>
                            CineSphere offers various subscription plans to suit different needs. Please visit our Pricing page for detailed information on our plans and their respective features.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold">6. Is there a free trial available?</h4>
                        <p>
                            Yes, CineSphere offers a 7-day free trial for new users. This allows you to explore our platform and its features before committing to a subscription.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold">7. How can I cancel my subscription?</h4>
                        <p>
                            You can cancel your subscription at any time by going to the Account Settings section under your profile. Click on Subscription, and you’ll find the option to cancel. Your access will remain active until the end of the current billing period.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold">8. Are there parental controls available?</h4>
                        <p>
                            Yes, CineSphere offers robust parental controls to ensure a safe viewing experience for children. You can set age-appropriate content restrictions and manage viewing preferences in the Parental Controls section of your account.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold"> 9. What should I do if I experience streaming issues?</h4>
                        <p>
                            If you encounter streaming issues, try the following steps:
                        </p>
                        <p>
                            1. Check your internet connection
                        </p>
                        <p>
                            2. Clear your browser cache or app data.
                        </p>
                        <p>
                            3. Restart your device. If the problem persists, please contact our Customer Support for further assistance.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold">10. How can I contact customer support?</h4>
                        <p>
                            You can reach out to our Customer Support team via the Contact Us page on our website. We’re available 24/7 to assist you with any issues or questions you may have.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faq;