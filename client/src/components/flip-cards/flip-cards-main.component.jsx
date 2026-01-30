
import FlipCardsSection1 from "./flip-cards-section1.component"
import FlipCardsSection2 from "./flip-cards-section2.component"
import FlipCardsSection3 from "./flip-cards-section3.component"
import { FlipCardsWrapper } from "./flip-cards.styles"



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
            <section className='cards section-wrapper h-screen flex justify-center bg-white'>
                <div className="cards-container">
                    {/* Card 1 */}
                    <div className="card" id="card-1">
                        <div className="card-wrapper">
                            <div className="flip-inner-card">
                                {/* Front of Card 1 */}
                                <div className="flip-card-front">
                                     <div className="card-title">
                                        <span>Plan</span>
                                        <span>01</span>
                                    </div>
                                    <div className="card-title">
                                        <span>01</span>
                                        <span>Plan</span>
                                    </div>
                                </div>

                                {/* Back of Card 1 */}
                                <div className="flip-card-back">
                                     <div className="card-title">
                                        <span>Plan</span>
                                        <span>01</span>
                                    </div>

                                    {/* Card Content */}
                                    <div className="card-copy">
                                        <p>Content 1</p>
                                        <p>Content 2</p>
                                        <p>Content 3</p>
                                        <p>Content 4</p>
                                        <p>Content 5</p>
                                        <p>Content 6</p>
                                    </div>

                                    <div className="card-title">
                                        <span>01</span>
                                        <span>Plan</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card" id="card-2">
                        <div className="card-wrapper">
                            <div className="flip-inner-card">
                                {/* Front of Card 2 */}
                                <div className="flip-card-front">
                                     <div className="card-title">
                                        <span>Plan</span>
                                        <span>02</span>
                                    </div>
                                    <div className="card-title">
                                        <span>02</span>
                                        <span>Plan</span>
                                    </div>
                                </div>

                                {/* Back of Card 2 */}
                                <div className="flip-card-back">
                                     <div className="card-title">
                                        <span>Plan</span>
                                        <span>02</span>
                                    </div>

                                    {/* Card Content */}
                                    <div className="card-copy">
                                        <p>Content 7</p>
                                        <p>Content 8</p>
                                        <p>Content 9</p>
                                        <p>Content 10</p>
                                        <p>Content 11</p>
                                        <p>Content 12</p>
                                    </div>

                                    <div className="card-title">
                                        <span>02</span>
                                        <span>Plan</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card" id="card-3">
                        <div className="card-wrapper">
                            <div className="flip-inner-card">
                                {/* Front of Card 3 */}
                                <div className="flip-card-front">
                                     <div className="card-title">
                                        <span>Plan</span>
                                        <span>03</span>
                                    </div>
                                    <div className="card-title">
                                        <span>03</span>
                                        <span>Plan</span>
                                    </div>
                                </div>

                                {/* Back of Card 3 */}
                                <div className="flip-card-back">
                                     <div className="card-title">
                                        <span>Plan</span>
                                        <span>03</span>
                                    </div>

                                    {/* Card Content */}
                                    <div className="card-copy">
                                        <p>Content 13</p>
                                        <p>Content 14</p>
                                        <p>Content 15</p>
                                        <p>Content 16</p>
                                        <p>Content 17</p>
                                        <p>Content 18</p>
                                    </div>

                                    <div className="card-title">
                                        <span>03</span>
                                        <span>Plan</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                        
            </section>
        </FlipCardsWrapper>
    )
}

export default FlipCardsMain