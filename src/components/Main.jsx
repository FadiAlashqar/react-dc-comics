import ListComics from "./ListComics"

const Main = () => {
    return (
        <main>

            <ListComics />

            <div className="icons">
                <ul>
                    <li>
                        <img className="icon" src="../src/assets/img/buy-comics-digital-comics.png" alt="" />
                        DIGITAL COMICS

                    </li>
                    <li>
                        <img className="icon" src="../src/assets/img/buy-comics-merchandise.png" alt="" />
                        DC MERCHANDISE

                    </li>
                    <li>
                        <img className="icon" src="../src/assets/img/buy-comics-subscriptions.png" alt="" />
                        SUBSCRIPTION

                    </li>
                    <li>
                        <img className="icon" src="../src/assets/img/buy-comics-shop-locator.png" alt="" />
                        COMIC SHOP LOCATOR

                    </li>
                    <li>
                        <img className="icon" src="../src/assets/img/buy-dc-power-visa.svg" alt="" />
                        DC POWER VISA

                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Main