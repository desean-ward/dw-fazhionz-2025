
import FlipCardSection1 from "./flip-cards-section1.component"
import { FlipCardDiv1Container, FlipCardDiv2Container, FlipCardDiv3Container, FlipCardsWrapper, HeroCard, HeroCards } from "./flip-cards.styles"



const FlipCardsMain = () => {

    return (
        <FlipCardsWrapper>
            {/* Section 1 */}
            <FlipCardSection1>
                Section 2 Content
            </FlipCardSection1>

            {/* Section 2 */}
            <FlipCardDiv2Container>
                Section 2 Content
            </FlipCardDiv2Container>

            {/* Section 3 */ }
            <FlipCardDiv3Container>
                Section 3 Content
            </FlipCardDiv3Container>
        </FlipCardsWrapper>
    )
}

export default FlipCardsMain