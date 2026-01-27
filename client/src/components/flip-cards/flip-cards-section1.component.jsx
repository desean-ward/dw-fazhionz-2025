import  FlipCardSection1Styles  from "./flip-cards.styles"

const FlipCardSection1 = () => (
    <FlipCardDiv1Container>
                Section 1 Content Updated
                <HeroCards>
                    {/* Hero Card 1 */}
                    <HeroCard className='card' id='hero-card-1'>
                        <div className="card-title">
                            <span>Plan</span>
                            <span>01</span>
                        </div>
                        <div className="card-title">
                            <span>01</span>
                            <span>Plan</span>
                        </div>
                    </HeroCard>

                    {/*Hero Card 2 */}
                    <HeroCard className='card' id='hero-card-2'>
                        <div className="card-title">
                            <span>Plan</span>
                            <span>02</span>
                        </div>
                        <div className="card-title">
                            <span>02</span>
                            <span>Plan</span>
                        </div>
                    </HeroCard>

                    {/*Hero Card 3 */}
                    <HeroCard className='card' id='hero-card-3'>
                        <div className="card-title">
                            <span>Plan</span>
                            <span>03</span>
                        </div>
                        <div className="card-title">
                            <span>03</span>
                            <span>Plan</span>
                        </div>
                    </HeroCard>
                </HeroCards>
            </FlipCardDiv1Container>
)

export default FlipCardSection1