import  { FlipCardsSection1Container, HeroCards, HeroCard, HeroCardTitle }  from "./flip-cards.styles"

const FlipCardsSection1 = () => (
    <FlipCardsSection1Container>
                <HeroCards>
                    {/* Hero Card 1 */}
                    <HeroCard id='hero-card-1'>
                        <HeroCardTitle>
                            <span>Plan</span>
                            <span>01</span>
                        </HeroCardTitle>
                        <HeroCardTitle>
                            <span>01</span>
                            <span>Plan</span>
                        </HeroCardTitle>
                    </HeroCard>

                    {/*Hero Card 2 */}
                    <HeroCard id='hero-card-2'>
                        <HeroCardTitle>
                            <span>Plan</span>
                            <span>02</span>
                        </HeroCardTitle>
                        <HeroCardTitle>
                            <span>02</span>
                            <span>Plan</span>
                        </HeroCardTitle>
                    </HeroCard>

                    {/*Hero Card 3 */}
                    <HeroCard id='hero-card-3'>
                        <HeroCardTitle>
                            <span>Plan</span>
                            <span>03</span>
                        </HeroCardTitle>
                        <HeroCardTitle>
                            <span>03</span>
                            <span>Plan</span>
                        </HeroCardTitle>
                    </HeroCard>
                </HeroCards>
            </FlipCardsSection1Container>
)

export default FlipCardsSection1