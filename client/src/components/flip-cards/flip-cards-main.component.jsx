
import FlipCardsSection1 from "./flip-cards-section1.component"
import FlipCardsSection2 from "./flip-cards-section2.component"
import FlipCardsSection3 from "./flip-cards-section3.component"
import { Card, CardsContainer, CardsWrapper, CardTitle, CardWrapper, FlipCardsWrapper } from "./flip-cards.styles"



const FlipCardsMain = () => {

    return (
        <FlipCardsWrapper>
            {/* Section 1 */}
            <FlipCardsSection1>
                Section 1 Content
            </FlipCardsSection1>

            {/* Section 2 */}
            <FlipCardsSection2>
                Section 2 Content
            </FlipCardsSection2>

            {/* Section 3 */ }
            <FlipCardsSection3>
                Section 3 Content
            </FlipCardsSection3>

            {/* Additional sections can be added here */}
            <CardsWrapper>
                <CardsContainer>
                    {/* Card 1 */}
                    <Card id="card-1">
                        <CardWrapper>
                            <div className="flip-inner-card">
                                {/* Front of Card 1 */}
                                <div className="flip-card-front">
                                     <CardTitle>
                                        <span>Plan</span>
                                        <span>01</span>
                                    </CardTitle>
                                    <CardTitle>
                                        <span>01</span>
                                        <span>Plan</span>
                                    </CardTitle>
                                </div>

                                {/* Back of Card 1 */}
                                <div className="flip-card-back">
                                     <CardTitle>
                                        <span>Plan</span>
                                        <span>01</span>
                                    </CardTitle>

                                    {/* Card Content */}
                                    <div className="card-copy">
                                        <p>Content 1</p>
                                        <p>Content 2</p>
                                        <p>Content 3</p>
                                        <p>Content 4</p>
                                        <p>Content 5</p>
                                        <p>Content 6</p>
                                    </div>

                                    <CardTitle>
                                        <span>01</span>
                                        <span>Plan</span>
                                    </CardTitle>
                                </div>
                            </div>
                        </CardWrapper>
                    </Card>

                    {/* Card 2 */}
                    <Card id="card-2">
                        <CardWrapper>
                            <div className="flip-inner-card">
                                {/* Front of Card 2 */}
                                <div className="flip-card-front">
                                     <CardTitle>
                                        <span>Plan</span>
                                        <span>02</span>
                                    </CardTitle>
                                    <CardTitle>
                                        <span>02</span>
                                        <span>Plan</span>
                                    </CardTitle>
                                </div>

                                {/* Back of Card 2 */}
                                <div className="flip-card-back">
                                     <CardTitle>
                                        <span>Plan</span>
                                        <span>02</span>
                                    </CardTitle>

                                    {/* Card Content */}
                                    <div className="card-copy">
                                        <p>Content 7</p>
                                        <p>Content 8</p>
                                        <p>Content 9</p>
                                        <p>Content 10</p>
                                        <p>Content 11</p>
                                        <p>Content 12</p>
                                    </div>

                                    <CardTitle>
                                        <span>02</span>
                                        <span>Plan</span>
                                    </CardTitle>
                                </div>
                            </div>
                        </CardWrapper>
                    </Card>

                    {/* Card 3 */}
                    <Card id="card-3">
                        <CardWrapper>
                            <div className="flip-inner-card">
                                {/* Front of Card 3 */}
                                <div className="flip-card-front">
                                     <CardTitle>
                                        <span>Plan</span>
                                        <span>03</span>
                                    </CardTitle>
                                    <CardTitle>
                                        <span>03</span>
                                        <span>Plan</span>
                                    </CardTitle>
                                </div>

                                {/* Back of Card 3 */}
                                <div className="flip-card-back">
                                     <CardTitle>
                                        <span>Plan</span>
                                        <span>03</span>
                                    </CardTitle>

                                    {/* Card Content */}
                                    <div className="card-copy">
                                        <p>Content 13</p>
                                        <p>Content 14</p>
                                        <p>Content 15</p>
                                        <p>Content 16</p>
                                        <p>Content 17</p>
                                        <p>Content 18</p>
                                    </div>

                                    <CardTitle>
                                        <span>03</span>
                                        <span>Plan</span>
                                    </CardTitle>    
                                </div>
                            </div>
                        </CardWrapper>
                    </Card>
                </CardsContainer>
                        
            </CardsWrapper>
        </FlipCardsWrapper>
    )
}

export default FlipCardsMain