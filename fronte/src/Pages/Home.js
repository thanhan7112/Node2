import '../Style/main.css'

function Home () {
    return (
        <div>
             <div id="display" className="center__row">
            <div className="display__info container__center">
                <h1>Ethical Sourcing Coffee</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae alias natus, rerum officiis facilis odit laboriosam dolore omnis?</p>
                <div className="buttons center__row">
                    <a href="#" className="link__btn">Buy Now</a>
                    <a href="#" className="link__btn blue__btn">Learn More</a>
                </div>
            </div>
            <div className="product__display--container">
                 {/* <img src={hello} alt=""/>  */}
            </div>
        </div>
    
        <section id="social" className="container__center">
            <div className="social__cont center__row">
                <div className="social__icon container__center">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <div className="background"></div>
                </div>
                <div className="social__icon container__center">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <div className="background"></div>
                </div>
                <div className="social__icon container__center">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <div className="background"></div>
                </div>
                <div className="social__icon container__center">
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <div className="background"></div>
                </div>
            </div>
        </section>   
    
    
        <section id="info">
            <div className="info__column">
                <div className="info__card--left">
                    <i className="fas fa-leaf card__icon"></i>
                    <h4>Sustainable Coffee</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, veniam!</p>
                </div>
                <div className="info__card--left">
                    <i className="fas fa-people-carry card__icon"></i>
                    <h4>Ethically Sourced</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, veniam!</p>
                </div>
                <div className="info__card--left">
                    <i className="fas fa-seedling card__icon"></i>
                    <h4>Farmer Support</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, veniam!</p>
                </div>
            </div>
            <div className="info__column">
                <div className="info__card--right">
                    <i className="fas fa-hands-helping card__icon"></i>
                    <h4>Our Goal</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, nulla.</p>
                </div>
                <div className="info__card--right">
                    <i className="fas fa-piggy-bank card__icon"></i>
                    <h4>How we help</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, laborum?</p>
                </div>  
                <div className="info__card--right">
                    <i className="fas fa-users card__icon"></i>
                    <h4>Our relationships</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, laborum?</p>
                </div>
            </div>
            {/* <img src={hello1} alt=""/> */}
        </section>
    
        <section id="image__cont" className="center__row">
            <div className="image__info container__center">
                <h1>Helping coffee communities</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed aut voluptate error dignissimos ducimus accusamus tempore consequatur, harum, magnam pariatur soluta, magni quam nam doloribus voluptatum quod! Voluptas, hic dolore.</p>
                <div className="buttons center__row">
                    <a href="#" className="link__btn">Our partners</a>
                </div>
            </div>
            {/* <img src={hello2} alt=""/> */}
        </section>
    
    
    
        <section id="contact" className="center__row">
            <div className="contact__info container__center">
                <h1>Buy online or come to our store</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae obcaecati aspernatur ipsa! Soluta facilis perspiciatis ex similique dolorum.</p>
                <a href="#" className="link__btn">Find a store</a>
            </div>
            <div className="contact__methods">
                <button className="info__btn">
                    <i className="fas fa-phone alt"></i>
                    <a>+1 234 567 8901</a>
                </button>
                <button className="info__btn">
                    <i className="far fa-envelope"></i>
                    <a>info@coffeestore.com</a>
                </button>
            </div>
        </section>
        <footer className="center__row">
            <h4>&copy The coffee store</h4>
            <div className="links">
                <a href="#">FAQ'S</a>
                <a href="#">Mission</a>
                <a href="#">About</a>
            </div>
            <a href="#">Follow Us</a>
        </footer>
    
    
        </div>
      )
    
}

export default Home;