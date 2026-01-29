
import FlipCardsSection1 from "./flip-cards-section1.component"
import FlipCardsSection2 from "./flip-cards-section2.component"
import FlipCardsSection3 from "./flip-cards-section3.component"
import { FlipCardsWrapper } from "./flip-cards.styles"



const FlipCardsMain = () => {

    return (
        <FlipCardsWrapper>
            {/* Section 1 */}
            <FlipCardsSection1>
                Section 2 Content
            </FlipCardsSection1>

            {/* Section 2 */}
            <FlipCardsSection2>
                Section 2 Content
            </FlipCardsSection2>

            {/* Section 3 */ }
            <FlipCardsSection3>
                Section 3 Content
            </FlipCardsSection3>
        </FlipCardsWrapper>
    )
}

export default FlipCardsMain