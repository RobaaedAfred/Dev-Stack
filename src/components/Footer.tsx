
import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white container mx-auto">
            <div className="container mx-auto px-6 py-12">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">


                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2">
                            <img src={Logo} alt="Dev Stack logo" />
                        </div>

                        <p className="mt-4 text-sm leading-6 text-slate-500">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="mt-5 flex items-center gap-4 text-sm font-medium text-gray-600">
                            <a href="">GitHub</a>
                            <a href="">Twitter</a>
                            <a href="">LinkedIn</a>
                        </div>
                    </div>

                    <div className="hidden md:col-span-3 md:flex md:justify-between">

                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">
                                PRODUCT
                            </h3>

                            <ul className="mt-4 space-y-3 text-sm text-slate-500">
                                <li>Home</li>
                                <li>Technologies</li>
                                <li>Projects</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">
                                COMPANY
                            </h3>

                            <ul className="mt-4 space-y-3 text-sm text-slate-500">
                                <li>About</li>
                                <li>Contact</li>
                                <li>Careers</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">
                                LEGAL
                            </h3>

                            <ul className="mt-4 space-y-3 text-sm text-slate-500">
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="mt-10 border-t border-slate-100 pt-6">
                    <div className="flex items-center justify-between text-sm text-slate-400">

                        <p className="whitespace-nowrap">
                            © 2026 Dev Stack. All rights reserved.
                        </p>

                        <div className="flex items-center gap-6">
                            <p>Privacy</p>
                            <p>Terms</p>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

