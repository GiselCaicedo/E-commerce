import React from "react";

class Home extends React.Component{
    render() {
        return(
            <body>
      <section>
        <nav className="containerList">
          <ul>
            <li><a href="#">Store</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">PlayStation</a></li>
            <li><a href="#">Xbox</a></li>
            <li><a href="#">Nintendo</a></li>
          </ul>
        </nav>
        <div className="shadowContainerList"></div>
      </section>

      <section className="mainImages">
        <img className="img" src="./../assets/img/poster-starfield.jpg" />
        <img className="img" src="./../assets/img/resident4.jpg" />
        <img className="img" src="./../assets/img/hogwarts.jpeg" />
        <img className="img" src="./../assets/img/zelda.jpg" />
      </section>

      <div className="border"></div>

      <section className="backgroundBody">
        <div className="arrow">
          <i id="left" className="fa-solid fa-angle-left"></i>
        </div>
        <h1 className="sectionTitle">FEATURED</h1>
        <section className="containerFeatured">
          <section>
            <div className="container">
              <div className="images">
                <img className="imageSlides" src="../assets/img/rdr2.jpg" alt="img" draggable="false" />
              </div>
              <div className="product">
                <h1>RED DEAD REDEMPTION II</h1>
                <p className="price">$100</p>
                <p className="desc">With more than 175 Game of the Year awards and more than 250 perfect ratings, Red Dead Redemption 2 is the epic story of Arthur Morgan and the Van der Linde gang on the run across America at the dawn of a new era. It also includes access to the shared multiplayer world of Red Dead Online.</p>
                <div className="buttons">
                  <button className="add">Add to Cart</button>
                  <button className="like"><span><i className="fa-solid fa-heart" style={{ color: '#ffffff' }}></i></span></button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="images">
                <img className="imageSlides" src="../assets/img/gtaV.jpeg" alt="img" draggable="false" />
              </div>
              <div className="product">
                <h1>GRAND THEFT AUTO V</h1>
                <p className="price">$20</p>
                <p className="desc">Grand Theft Auto V for PC gives players the option to explore the award-winning world of Los Santos and Blaine County at 4K resolution and enjoy the game at 60 frames per second.</p>
                <div className="buttons">
                  <button className="add">Add to Cart</button>
                  <button className="like"><span><i className="fa-solid fa-heart" style={{ color: '#ffffff' }}></i></span></button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="images">
                <img className="imageSlides" src="../assets/img/lanoire.jpg" />
              </div>
              <div className="product">
                <h1>L.A NOIRE</h1>
                <p className="price">$20</p>
                <p className="desc">A dark and violent crime thriller set in 1940s Los Angeles.</p>
                <div className="buttons">
                  <button className="add">Add to Cart</button>
                  <button className="like"><span><i className="fa-solid fa-heart" style={{ color: '#ffffff' }}></i></span></button>
                </div>
              </div>
            </div>
          </section>
        </section>
        <div className="arrow">
          <i id="right" className="fa-solid fa-angle-right"></i>
        </div>
      </section>

      <section className="backgroundBody">
        <div className="wrapper">
          <h1 className="sectionTitle">RECOMMENDED FOR YOU</h1>
          <h2></h2>
          <div className="cards">
            <figure className="card">
              <img src="../assets/img/dota2.jpg" />
              <figcaption>Dota 2</figcaption>
            </figure>
            <figure className="card">
              <img src="../assets/img/stickfight.jpg" />
              <figcaption>Stick Fight</figcaption>
            </figure>
            <figure className="card">
              <img src="../assets/img/minionsmaster.jpg" />
              <figcaption>Minion Masters</figcaption>
            </figure>
            <figure className="card">
              <img src="../assets/img/dontstarve.jpg" />
              <figcaption>Don't Starve</figcaption>
            </figure>
          </div>
        </div>
        <button type="button" className="custom-btn btn-16">
          Show all
        </button>
      </section>

      <section className="backgroundBody">
        <div className="wrapper">
          <h1 className="sectionTitle">BEST SELLING</h1>
          <h2></h2>
          <div className="cards">
            <figure className="card">
              <img src="../assets/img/starfield.jpg" />
              <figcaption>Starfield</figcaption>
            </figure>
            <figure className="card">
              <img src="../assets/img/ageofempires.jpeg" />
              <figcaption>Age of Empires IV</figcaption>
            </figure>
            <figure className="card">
              <img src="../assets/img/baldursgate.jpg" />
              <figcaption>Baldur's Gate III</figcaption>
            </figure>
            <figure className="card">
              <img src="../assets/img/daysgone.jpg" />
              <figcaption>Days Gone</figcaption>
            </figure>
          </div>
        </div>
        <button type="button" className="custom-btn btn-16">
          Show all
        </button>
      </section>

      <section className="backgroundBody">
        <div className="wrapper">
          <h1 className="sectionTitle">UPCOMING GAMES</h1>
          <h2></h2>
          <div className="cards">
            <figure className="card">
              <img src="../assets/img/mortalkombat.jpg" />
              <figcaption>Mortal Kombat I | Premium Edition</figcaption>
            </figure>
            <figure className="card">
              <img src="../assets/img/payday2.jpg" />
              <figcaption>PayDay 3</figcaption>
            </figure>
            <figure className="card">
              <img src="../assets/img/takken.jpg" />
              <figcaption>Takken 8 | Ultimate Edition</figcaption>
            </figure>
            <figure className="card">
              <img src="../assets/img/fc24.jpg" />
              <figcaption>FC24 | Xbox Series X/S & Xbox One</figcaption>
            </figure>
          </div>
        </div>
        <button type="button" className="custom-btn btn-16">
          Show all
        </button>
      </section>
    </body>
        )
    }
}

export default Home;