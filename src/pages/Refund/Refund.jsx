import { Helmet } from "react-helmet-async";

const Refund = () => {
    return (
        <>
            <Helmet> <title>Cine Sphere - Refund</title> </Helmet>
            <section className="container mx-auto px-5 pb-52">
                <h2 className="text-secondaryColor text-center mb-16 text-5xl"><span className="text-textColor dark:text-white">Refund</span> <span className="underline underline-offset-8">Policy</span></h2>

                <div className="space-y-5">

                    <div>
                        <h4 className="text-2xl font-semibold">1. Subscription Cancellations</h4>
                        <p>
                            1. Monthly Subscriptions: If you cancel your monthly subscription, the cancellation will take effect at the end of your current billing period. No refunds or credits will be provided for partial months or unused services.
                        </p>
                        <p>
                            2. Annual Subscriptions: Annual subscriptions are billed at the start of the subscription period. If you cancel, the cancellation will take effect at the end of your current billing cycle, and no refund will be issued for the remaining months.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold">2. Refund Conditions</h4>
                        <p>
                            Refunds are only issued in the following situation:
                        </p>
                        <p>
                            1. If you were charged for a subscription after canceling.
                        </p>
                        <p>
                            2. If you experienced technical issues that prevented you from using the service, and our support team could not resolve the issue within a reasonable time frame.
                        </p>
                        <p>
                            3. If you were charged incorrectly or for a subscription plan you did not sign up for.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold">3. Requesting a Refund</h4>
                        <p>
                            1. To request a refund, please contact our support team within 7 days of the billing date. You can reach us at support@cinesphere.com or through our support portal on the website.
                        </p>
                        <p>
                            2. Include your account details, the reason for your refund request, and any supporting evidence (e.g., error messages, screenshots).
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold">4. Processing Refunds</h4>
                        <p>
                            1. Once your refund request is received and verified, we will process your refund within 7-10 business days.
                        </p>
                        <p>
                            2. Refunds will be credited back to the original payment method used for the transaction. Please note that it may take additional time for your bank or card issuer to post the refund to your account.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold">5. Non-Refundable Items</h4>
                        <p>
                            1. Gift Cards: All sales of gift cards are final and non-refundable.
                        </p>
                        <p>
                            2. Promotional Offers: Subscriptions purchased through promotional offers are non-refundable.
                        </p>
                        <p>
                            3. Third-Party Purchases: If you subscribed to CineSphere through a third-party platform (e.g., App Store, Google Play), refund requests must be directed to the respective third-party.
                        </p>
                    </div>

                    
                </div>
            </section>
        </>
    );
};

export default Refund;