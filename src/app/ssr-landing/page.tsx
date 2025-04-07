



import { HeaderLanding } from "@/components/landing/HeaderLanding";
import { PrincipalContent } from "@/components/landing/PrincipalContent";
import { QuickTour } from "@/components/landing/QuickTour";
import { Topbanner } from "@/components/landing/Topbanner";


const LandingPage = () => {

    return (
        <div>
            <Topbanner />
            <HeaderLanding />
            <PrincipalContent />
            <QuickTour />
        </div>
    )
}

export default LandingPage;