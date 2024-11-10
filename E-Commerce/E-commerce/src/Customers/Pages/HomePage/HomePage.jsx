import MainCarosel from "../../Components/HomeCarousel/MainCarosel";
import HomeSectionCarousel from "../../Components/HomeSectionCarousel/HomeSectionCarousel";
import MenKurta from "../../../Data/MenKurta";
import Footer from "../../Components/Footer/Footer";

export default function HomePage () {
    return (
        <div>
            <MainCarosel />
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarousel data = {MenKurta} SectionName={"Ethnic Wear"}/>
                <HomeSectionCarousel data = {MenKurta} SectionName={"Wastern Wear"}/>
                <HomeSectionCarousel data = {MenKurta} SectionName={"Casual Styles"}/>
                <HomeSectionCarousel data = {MenKurta} SectionName={"Sleep Wear"}/>
                <HomeSectionCarousel data = {MenKurta} SectionName={"Work Wear"}/>
            </div>
        </div>
    );
}